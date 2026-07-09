# OmD Preferences — 중학 문법이 곧 실력

DESIGN.md에 아직 정식 반영되지 않은 사용자 교정 로그. `omd:learn`으로 fold-in.

---

## 넓은 표면 + 흰 글자에는 brand의 충분히 어두운 셰이드 사용 (대비 ≥4.5:1)

```omd-meta
status: pending
date: 2026-06-16
scope: color, a11y
context: 중학문법이곧실력_Ch01_차시01_v14.html (.hud)
source: user-correction
```

헤더(HUD)처럼 넓은 표면에 흰 글자를 얹을 때, 형광/밝은 primary를 그대로 배경에 쓰지 않는다(대비 ~2:1로 글자가 안 읽힘). brand 계열의 **충분히 어두운 셰이드**를 써서 흰 글자 대비 ≥4.5:1을 확보한다. 밝은 primary는 버튼·진행 게이지·정답 등 좁은 상호작용/피드백 요소에만. (예: Toss는 HUD에 밝은 `#3182f6` 대신 더 진한 brand `#0064ff` 사용.)

---

## 프로젝트 팔레트를 Toss로 변경 — DESIGN.md(duolingo 기반)와 불일치

```omd-meta
status: pending
date: 2026-06-16
scope: color, reference
context: 프로젝트 전역
source: user-request
```

사용자 요청으로 HTML 팔레트를 duolingo(Feather Green) → **Toss**로 교체: primary `#3182f6`, HUD/brand `#0064ff`, 텍스트 `#191f28`, 보조 `#8b95a1`, 표면 `#f2f4f6`, 테두리 `#e5e8eb`, 성공 `#03b26c`, 에러 `#f04452`, 경고 `#fe9800`. 현재 DESIGN.md는 여전히 duolingo 기반이라 **토큰이 불일치** — `omd:init`으로 toss 재부트스트랩하거나 DESIGN.md 토큰만 Toss로 갱신 필요. (버튼 3D lip·2px 카드 외곽선 등 구조는 아직 duolingo식.)
