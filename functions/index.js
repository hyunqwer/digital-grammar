const { onRequest } = require("firebase-functions/v2/https");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const textToSpeech = require("@google-cloud/text-to-speech");

// 서비스 계정(ADC)으로 인증 — 별도 키 불필요
const ttsClient = new textToSpeech.TextToSpeechClient();

// 한국어 여성(발랄) / 영어 여성 음성 설정
exports.speak = onRequest(
  { timeoutSeconds: 60, memory: "512MiB", invoker: "public" },
  async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    if (req.method === "OPTIONS") return res.status(204).send("");
    if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

    const { text, lang, voice, pitch, rate } = req.body || {};
    if (!text) return res.status(400).json({ error: "text required" });
    const isEn = lang === "en";
    const koVoice = voice || "ko-KR-Chirp3-HD-Kore";
    const isChirp = /chirp/i.test(koVoice); // Chirp3-HD 음성은 pitch 미지원

    try {
      const audioConfig = {
        audioEncoding: "MP3",
        speakingRate: isEn ? 1.0 : (rate != null ? rate : 1.12),
      };
      if (!isEn && !isChirp) audioConfig.pitch = (pitch != null ? pitch : 3.5);

      const [resp] = await ttsClient.synthesizeSpeech({
        input: { text: String(text).slice(0, 800) },
        voice: isEn
          ? { languageCode: "en-US", name: "en-US-Neural2-F" }
          : { languageCode: "ko-KR", name: koVoice },
        audioConfig,
      });
      res.setHeader("Content-Type", "application/json");
      res.json({ audio: Buffer.from(resp.audioContent).toString("base64") });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message || "TTS failed" });
    }
  }
);

exports.askGemini = onRequest(
  {
    secrets: ["GEMINI_API_KEY"],
    timeoutSeconds: 120,
    invoker: "public",
  },
  async (req, res) => {
    // Manual CORS — must come before any other header
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
      return res.status(204).send("");
    }

    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const { system, input } = req.body || {};

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    // ⚠️ 정확한 모델 ID는 배포 전 반드시 확인 필요
    // 확인: https://ai.google.dev/gemini-api/docs/models
    const model = genAI.getGenerativeModel({
      model: "gemini-3.5-flash",
      systemInstruction: system || "You are a helpful assistant.",
    });

    // Set SSE headers and flush before starting the stream
    res.writeHead(200, {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      "Connection": "keep-alive",
    });

    try {
      const result = await model.generateContentStream(input || "");

      for await (const chunk of result.stream) {
        const text = chunk.text();
        if (text) {
          res.write(`data: ${JSON.stringify({ delta: text })}\n\n`);
        }
      }

      res.write(`data: ${JSON.stringify({ done: true })}\n\n`);
    } catch (error) {
      console.error(error);
      res.write(`data: ${JSON.stringify({ error: error.message || "Gemini request failed" })}\n\n`);
    }

    res.end();
  }
);
