---
omd: "0.1"
brand: 중학 문법이 곧 실력
bootstrapped_from: duolingo
bootstrapped_at: "2026-06-16"
category: education
palette: toss
primary_color: "#3182f6"
tokens:
  source: "palette=Toss (color tokens) · structure/voice=duolingo-derived"
  colors:
    primary: "#3182f6"
    primary-lip: "#1b64da"
    brand-deep: "#0064ff"
    accent: "#3182f6"
    accent-lip: "#1b64da"
    canvas: "#ffffff"
    surface: "#f2f4f6"
    foreground: "#191f28"
    muted: "#8b95a1"
    border: "#e5e8eb"
    on-primary: "#ffffff"
    error: "#f04452"
    success: "#03b26c"
    warning: "#fe9800"
    sel-bg: "#e8f1fd"
  typography:
    family: { sans: "Pretendard", display: "Nunito" }
    display-hero: { size: 40, weight: 800, lineHeight: 1.2, tracking: -0.5, use: "랜딩 히어로, 큰 축하 모먼트" }
    title:        { size: 24, weight: 700, lineHeight: 1.25, use: "섹션 제목, 모달 헤더" }
    body:         { size: 17, weight: 400, lineHeight: 1.5, use: "지문·해설 본문" }
    button:       { size: 15, weight: 700, lineHeight: 1.2, use: "CTA 버튼 라벨" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48 }
  rounded: { sm: 8, md: 12, lg: 16, full: 9999 }
  shadow:
    button-3d: "0 4px 0 0 #1b64da"
    card: "0 2px 0 0 rgba(0,0,0,0.1)"
  components:
    button-primary: { type: button, bg: "#3182f6", fg: "#ffffff", radius: "12px", padding: "14px 20px", height: "50px", font: "15px / 700", shadow: "0 4px 0 #1b64da", active: "translateY(4px), lip collapses", disabled: "bg #e5e8eb, fg #8b95a1, no lip", use: "단일 주요 액션 — 정답 확인, 다음 문제, 시작하기" }
    button-accent: { type: button, bg: "#3182f6", fg: "#ffffff", radius: "12px", padding: "14px 20px", font: "15px / 700", shadow: "0 4px 0 #1b64da", use: "보조 긍정 액션, 해설 보기, 정보 CTA" }
    card: { type: card, bg: "#ffffff", border: "2px solid #e5e8eb", radius: "16px", padding: "16px", shadow: "none", use: "문법 유닛, 챕터 타일, 문제 목록 행" }
---

<!-- omd:limitation §11(Brand Narrative)의 출시 시점·운영 주체 등 사실 정보는 미입력. [FILL IN] 부분을 채우기 전까지 지어내지 말 것. -->

# Design System Inspiration of 중학 문법이 곧 실력

> **Palette: Toss** (color tokens). **Structure·voice·motion: Duolingo-derived.** 구조(촉각적 3D lip 버튼·2px 카드 외곽선·게이미피케이션 상태·보이스/내러티브)는 Duolingo 시스템을 한국 중학생 영어 문법 훈련 맥락으로 옮긴 그대로 유지하되, **색 팔레트만 Toss로 교체**했다. 색의 권위는 frontmatter `tokens.colors` + §2 + §9이며, 본문 내러티브에 남아 있는 옛 색 이름(Toss Blue 등)은 이 Toss 팔레트로 대체됨. Toss 핵심: primary `#3182f6`, 넓은 표면/HUD용 deep `#0064ff`, 텍스트 `#191f28`, 보조 `#8b95a1`, 표면 `#f2f4f6`, 테두리 `#e5e8eb`, 성공 `#03b26c`, 에러 `#f04452`.

## 1. Visual Theme & Atmosphere

"중학 문법이 곧 실력"의 인터페이스는 **공부가 아니라 게임처럼 느껴지도록** 설계된다. 핵심 명제는 "많이 풀수록 강해진다" — 문제를 한 문제 더 풀고 싶게 만드는 것이 디자인의 전부다. 시그니처 컬러 **Toss Blue** (`#3182F6`)은 거의 비현실적으로 밝고 낙관적인 라임색으로, 에너지·성장·"가자(go)"를 읽게 한다. 정답의 색, 연속학습(streak)의 색, 모든 주요 액션의 색이다. 무엇 하나 칙칙하거나 교과서적이지 않다 — 의도적으로 칠판 녹색의 반대편에 있다.

이 시스템을 시각적으로 정의하는 것은 **묵직하고 촉각적인 장난기(chunky, tactile playfulness)**다. 버튼은 평평한 사각형이 아니라, 자기 색의 더 진한 그림자가 아래에 깔린 입체 "lip"을 가져서 누르면 실제 키를 누르는 느낌이 난다. 카드는 부드러운 그림자 대신 **굵은 2px 외곽선**을 쓴다. 모서리는 넉넉히 둥글고(12–16px), 모든 요소가 크고 고대비다 — 큰 둥근 글자, 큰 터치 영역, 큰 축하 상태. 동화책과 아케이드 게임에서 빌려오되 성숙한 제품 시스템의 엄정함으로 실행한다 — "다 자란 동화책".

타입 시스템은 두 목소리를 짝짓는다. **디스플레이 페이스**(Nunito 700/800, Feather Bold 대체)는 제목·버튼·개성이 필요한 순간을 담당하고, **본문 페이스**(Pretendard)는 문법 지문·해설처럼 길게 읽어야 하는 곳을 담당한다. 둘이 함께 친근하되 유치하지 않은 톤을 만든다.

**핵심 특성:**
- Toss Blue (`#3182F6`)을 보편 primary로 — CTA, 정답, streak, 정답률
- 눌리는 입체 3D 버튼: 자기 색의 더 진한 단색 offset "lip"
- 부드러운 그림자 대신 2px 카드/버튼 외곽선
- 넉넉한 모서리(버튼 12px, 카드 16px)와 큰 터치 영역
- 디스플레이(제목·버튼) + Pretendard(본문) 타입 페어링
- 게이미피케이션 팔레트 — Toss Blue 파랑, Cardinal 빨강, Bee 노랑, Fox 주황
- 흰색 위주 표면, 강한 색은 상호작용·피드백에만
- 넉넉한 여백, 한 화면 한 초점, 한 번에 하나의 명확한 액션

## 2. Color Palette & Roles

팔레트는 **Toss**다. Toss는 단일 파랑을 절제 있게 쓰고, 나머지는 뉴트럴 그레이 사다리와 시맨틱 색으로 운영한다. (구조·보이스는 duolingo 계열 유지, 색만 Toss.)

### Primary
- **Toss Blue** (`#3182F6`): 브랜드 일꾼. Primary CTA, 정답 강조, 진행도, 선택 상태. 가장 중요한 단 하나의 색.
- **Toss Blue Pressed** (`#1B64DA`): 3D 버튼 "lip" 그림자와 눌림 상태에 쓰는 더 진한 파랑.
- **Brand Deep** (`#0064FF`): HUD/헤더처럼 넓은 표면에 흰 글자를 얹을 때 (밝은 `#3182F6`은 흰 글자 대비 부족 → deep 사용).

### Semantic
- **정답 / 성공**: Toss Success Green (`#03B26C`).
- **오답 / 에러**: Toss Error Red (`#F04452`).
- **경고 / 보상 강조**: Toss Warning Orange (`#FE9800`).
- **정보 / 보조 액션**: Toss Blue (`#3182F6`) 재사용 (별도 secondary 색 없음). 강한 보조 액션은 그레이 fill `#4E5968`.

### Neutral Scale
- **White** (`#FFFFFF`): 주 표면. 페이지·카드 배경.
- **Surface** (`#F2F4F6`): 보조 표면, 비활성/빈 채움, 교차 행.
- **Border** (`#E5E8EB`): 기본 테두리, 구분선, 진행바 트랙.
- **Muted** (`#8B95A1`): placeholder·비활성·캡션 텍스트, 비활성 아이콘.
- **Grey** (`#4E5968` / `#333D4B`): 보조 텍스트, 강한 그레이 액션.
- **Foreground** (`#191F28`): 주 텍스트색 — 제목·본문 near-black. 순수 검정이 아닌 Toss 잉크.

### Selection / Tint
- **선택 상태**: 배경 `#E8F1FD` (Toss Blue 연한 틴트) + 테두리 `#3182F6`.

### Surface & Text Summary
- **페이지 배경**: `#FFFFFF`
- **은은한 표면**: `#F2F4F6`
- **기본 테두리**: `#E5E8EB`
- **제목/본문 잉크**: `#191F28`
- **보조 텍스트**: `#8B95A1`
- **placeholder/비활성**: `#8B95A1`

## 3. Typography Rules

### Font Family
- **디스플레이 / 버튼 / 제목**: `"Nunito", "Feather Bold", -apple-system, BlinkMacSystemFont, sans-serif` — 둥글고 친근한 디스플레이 페이스, 개성이 필요한 모든 곳.
- **UI / 본문(한글)**: `"Pretendard", "Pretendard Variable", -apple-system, "Apple SD Gothic Neo", "Noto Sans KR", sans-serif` — 긴 한글 지문·해설·밀도 높은 UI용.
- **영어 예문**: 영어 문제·예문은 `"Nunito"` 또는 본문 sans에서 한글과 자연스럽게 섞이도록 동일 행간 유지.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Nunito 800 | 40px | 800 | 48px (1.2) | -0.5px | 랜딩 히어로, 큰 축하 |
| Display | Nunito 800 | 32px | 800 | 40px (1.25) | -0.25px | 섹션 헤더, 유닛 완료 |
| Heading Large | Nunito 700 | 24px | 700 | 32px (1.33) | normal | 화면 제목, 모달 헤더 |
| Heading | Nunito 700 | 20px | 700 | 28px (1.4) | normal | 카드 제목, 소제목 |
| Subtitle | Nunito 700 | 17px | 700 | 24px (1.4) | normal | 목록 헤더, 문제 발문 |
| Button Label | Nunito 700 | 15px | 700 | 20px | 0.4px | CTA |
| Body Large | Pretendard | 17px | 400 | 26px (1.5) | normal | 문법 지문·예문·해설 |
| Body | Pretendard | 15px | 400 | 23px (1.5) | normal | 표준 읽기 텍스트 |
| Caption | Pretendard | 13px | 400 | 18px (1.4) | normal | 메타, 힌트, 안내 |
| Stat / Number | Nunito 800 | 24px+ | 800 | tight | normal | XP, streak, 정답률 — 크고 굵게 |

### Principles
- **디스플레이는 개성, Pretendard는 가독**: 제목·버튼·스탯은 둥근 디스플레이 페이스, 여러 문장 콘텐츠(지문·해설)는 Pretendard로 편안하게.
- **버튼은 외친다**: Primary 버튼 라벨은 Nunito 700, 짧고 명령형 (`정답 확인`, `다음 문제`, `시작하기`).
- **굵게 vs 얇게**: 얇은 본문 weight는 쓰지 않는다. 400(본문)과 700/800(강조)만. 절제는 weight 다양성이 아니라 크기에서 온다.
- **숫자는 축하받는다**: XP·streak·정답률은 큰 Nunito 800으로 — 게이미피케이션 스탯은 디스플레이 타이포그래피지 fine print가 아니다.
- **Eel, 순수 검정 아님**: 기본 텍스트는 `#191F28`, 절대 `#000000` 아님 — 순수 검정은 장난기 있는 팔레트에 거칠게 부딪힌다.
- **한글 본문 16px 이상**: 학습 화면 본문은 16px 미만으로 내리지 않는다(중학생 가독성·접근성).

## 4. Component Stylings

### Buttons

이 시스템의 시그니처 컴포넌트: 자기 색의 더 진한 단색 **offset 아래 테두리("lip")**를 가진 묵직하고 촉각적인 컨트롤. 누르면 아래로 내려가며 lip이 사라진다 — 물리적 키처럼.

**Primary (Green)**
- 배경: `#3182F6`
- 텍스트: `#FFFFFF`
- 테두리: 없음
- Lip / 아래 그림자: `0 4px 0 #1B64DA` (단색, blur 없음)
- Radius: 12px
- Padding: 14px 20px (min-height 50px)
- Font: 15px / 700 / Nunito, 0.4px tracking
- 눌림: `translateY(4px)`, lip이 `0 0`으로 collapse
- 비활성: bg `#E5E8EB`, text `#AFAFAF`, lip 없음
- 용도: 단일 주요 액션 — `정답 확인`, `다음 문제`, `시작하기`

**Secondary (Blue / Toss Blue)**
- 배경: `#3182F6`
- 텍스트: `#FFFFFF`
- Lip: `0 4px 0 #1899D6`
- Radius: 12px · Padding: 14px 20px · Font: 15px / 700
- 용도: 보조 긍정 액션, `해설 보기`, 정보 CTA

**Destructive (Red / Cardinal)**
- 배경: `#F04452`
- 텍스트: `#FFFFFF`
- Lip: `0 4px 0 #EA2B2B`
- Radius: 12px · Padding: 14px 20px · Font: 15px / 700
- 용도: 오답 후 `계속` 바, 학습 종료/포기, 삭제

**Outline / Ghost (Neutral)**
- 배경: `#FFFFFF`
- 텍스트: `#3182F6` (또는 중립은 `#191F28`)
- 테두리: 2px solid `#E5E8EB`
- Lip: `0 2px 0 #E5E8EB`
- Radius: 12px · Padding: 14px 20px · Font: 15px / 700
- 용도: filled primary와 짝지은 보조 선택 (`건너뛰기`, `나중에`)

**Disabled**
- 배경: `#E5E8EB` · 텍스트: `#AFAFAF` · 테두리 없음, lip 없음 · Radius: 12px
- 용도: 답을 고르기 전 비활성 `정답 확인`

버튼은 모바일 문제 화면에서 보통 전체 너비(`block`), 밀도 높은 설정 행에서는 auto-width inline. lip은 브랜드를 정의하는 디테일 — *항상* 자기 색의 더 진한 단색, 절대 blur 그림자 아님.

### Inputs

탭 우선 제품이라 입력은 드물게 쓰지만, 쓸 때는 같은 둥근·굵은-테두리 언어를 따른다.

**Default**
- 배경: `#FFFFFF` · 텍스트: `#191F28` · 테두리: 2px solid `#E5E8EB` · Radius: 12px · Padding: 12px 16px
- Font: 15px / 400 / Pretendard · Placeholder: `#AFAFAF` · Focus: 테두리 `#3182F6` (2px)
- 용도: 주관식 답 입력(빈칸 채우기), 로그인

**Error**
- 배경: `#FFF0F0` · 텍스트: `#191F28` · 테두리: 2px solid `#F04452` · Radius: 12px · Padding: 12px 16px
- 아래 helper 텍스트: `#F04452` 13px
- 용도: 형식 오류, 잘못된 입력

**Answer Tile (단어 은행 / 보기 칩)**
- 배경: `#FFFFFF` · 텍스트: `#191F28` · 테두리: 2px solid `#E5E8EB` · Lip: `0 2px 0 #E5E8EB` · Radius: 12px · Padding: 10px 16px
- Font: 17px / 400 / Pretendard
- 선택됨: 테두리 `#3182F6`, bg `#DDF4FF`
- 용도: 어순 배열·보기 선택 문제의 탭 가능한 칩

### Cards

**Unit / Chapter Card**
- 배경: `#FFFFFF` · 테두리: 2px solid `#E5E8EB` · Radius: 16px · Padding: 16px · 그림자: 없음(2px 외곽선이 elevation)
- 용도: 문법 유닛(시제·관계사 등), 챕터 타일, 문제 목록 행

**Highlight Card**
- 배경: `#DDF4FF` (밝은 Toss Blue 틴트) 또는 `#F2F4F6`
- 테두리: 2px solid `#3182F6` (활성/선택 시) · Radius: 16px · Padding: 16px
- 용도: 선택된 챕터, 오늘의 학습 카드, 문법 팁 콜아웃

**Stat Card**
- 배경: `#FFFFFF` · 테두리: 2px solid `#E5E8EB` · Radius: 16px · Padding: 20px
- 아이콘: 큰 컬러 일러스트(streak 불꽃, 정답률 배지)
- 숫자: Nunito 800 24px `#191F28`; 라벨 Wolf `#8B95A1` 13px
- 용도: 프로필 스탯 — 연속학습일, 누적 푼 문제 수, 정답률

### Badges & Pills

**Streak / 푼 문제 Pill**
- 배경: `#FFFFFF` + 2px `#E5E8EB` 테두리, 또는 단색
- 텍스트: `#FE9800` (streak) / `#FE9800` (XP) + 아이콘
- Radius: 9999px · Padding: 4px 10px · Font: 13px / 700
- 용도: 상단바 카운터

**New / Status Badge**
- 배경: `#F04452` (알림) / `#3182F6` (완료) · 텍스트: `#FFFFFF` · Radius: 9999px · Padding: 2px 8px · Font: 12px / 700
- 용도: "NEW", 안 읽음 점, 완료 체크

### Progress Bar

- 트랙: `#E5E8EB` (Swan), radius 9999px, height 16px
- 채움: `#3182F6` (Toss Blue), radius 9999px
- 안쪽 하이라이트: 윗부분 얇은 밝은-녹색 줄 — 광택 나는 게임 질감
- 용도: 모든 문제 화면 상단의 풀이 진행도

### Tabs / Bottom Nav

**Bottom Tab (Active)**
- 배경: `#FFFFFF`, 윗 테두리 2px `#E5E8EB`
- 활성 아이콘/라벨: `#3182F6` · 비활성: `#AFAFAF` · Font: 11px / 700
- 용도: 학습 / 챕터 / 오답노트 / 랭킹 / 프로필 내비

### Toasts / Feedback Bars

**정답(Correct)**
- 배경: `#D7FFB8` (밝은 녹색) / 하단 영역
- 텍스트: `#1B64DA` · 윗 테두리: 2px `#A5ED6E` · CTA 버튼: 녹색 primary `계속`
- 용도: 정답 후 하단 피드백 바

**오답(Incorrect)**
- 배경: `#FFDFE0` (밝은 빨강)
- 텍스트: `#EA2B2B` · 윗 테두리: 2px `#FFB3B3` · CTA 버튼: 빨강 `계속`
- 용도: 오답 후 하단 피드백 바 — `정답:`을 담담히 보여줌, 비난 없음

### Dialogs / Modals

**Centered Modal**
- 배경: `#FFFFFF` · 테두리: 없음 (또는 2px `#E5E8EB`) · Radius: 16px · Padding: 24px
- 그림자: `0 8px 0 rgba(0,0,0,0.05)` 부드럽게, 가끔 confetti/캐릭터 일러스트
- 제목: Nunito 700 20px `#191F28`
- 용도: streak 축하, 챕터 완료, 종료 확인

### Toggles

**Default**
- 트랙: `#3182F6` (on) / `#E5E8EB` (off) · Thumb: `#FFFFFF` 원, 부드러운 inner shadow · Radius: 9999px
- 용도: 설정(효과음, 알림)

---

**Bootstrapped from:** duolingo · **brand essence(voice/principles/motion)** canonical 권위 유지, visual surface 토큰도 axis shift 없이 그대로.

## 5. Layout Principles

### Spacing System
- 기본 단위: 8px
- 공통 값: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px
- 화면 가로 패딩: 16px(모바일), 웹은 넉넉히 24px+
- 문제 화면은 의도적으로 비운다 — 한 발문, 답 영역, 하나의 CTA

### Grid & Container
- 모바일 우선; 기준 ~375–414px
- 단일 컬럼, 전체 너비 콘텐츠, 화면당 하나의 초점 액션
- 웹 학습 뷰는 제약된 컬럼(~600px)을 중앙에, 좌우에 streak/랭킹 위젯 레일
- 마케팅/랜딩은 더 넓은 중앙 컨테이너(max ~1080px) + 큰 일러스트 블록

### Whitespace Philosophy
- **한 번에 하나**: 각 문제 화면은 한 문제만. 경쟁하는 액션 없음, 스크롤 잡동사니 없음 — 다음 CTA가 항상 명백한 다음 수.
- **숨 쉴 공간, 축하할 공간**: 발문·답 주변 넉넉한 패딩으로 초점 유지; 축하 모먼트(유닛 완료, streak)는 전체 화면.
- **굵게 vs 분주하게**: 작은 요소 여럿보다 크고 고대비인 요소 몇 개.

### Border Radius Scale
- Small (8px): 인라인 칩, 작은 태그
- Standard (12px): 버튼, 입력, 보기 타일
- Comfortable (16px): 카드, 모달, 큰 표면
- Pill (9999px): 진행바, streak pill, 토글, 배지

## 6. Depth & Elevation

이 시스템의 깊이 모델은 **물리적이지 대기적이지 않다(physical, not atmospheric)**. 부드러운 blur 그림자 대신, 요소 자기 색의 더 진한 단색 offset이 바로 아래에 깔린다. 버튼이 진짜 누를 수 있는 키처럼 느껴지는 이유다.

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | 테두리·그림자 없음 | 인라인 텍스트, 페이지 배경 |
| Outlined (Level 1) | 2px solid `#E5E8EB` 테두리 | 카드, 타일, 목록 행 |
| Lip (Level 2) | `0 4px 0 <darker-shade>` 단색 offset | 버튼, 보기 타일 — 시그니처 3D |
| Raised (Level 3) | 2px 외곽선 + 은은한 `0 4px 0 rgba(0,0,0,0.05)` | 떠 있는 카드, 선택된 챕터 |
| Modal (Level 4) | `0 8px 0 rgba(0,0,0,0.05)` + scrim `rgba(0,0,0,0.4)` | 다이얼로그, 축하 시트 |

**그림자 철학**: 3D "lip"이 브랜드 촉각성의 심장이다. *항상* 단색(blur·spread 없음)이고 *항상* 그 위 컴포넌트의 더 진한 틴트 — 녹색 버튼은 `#1B64DA`, 파랑은 `#1899D6`, 빨강은 `#EA2B2B`. 누르면 요소가 lip 높이만큼 내려가고 lip이 사라져 물리적 키 travel을 흉내 낸다. 대기적 blur 그림자는 드물게, 매우 은은하게만.

### Blur Effects
- 모달 scrim은 `rgba(0,0,0,0.4)`로 배경을 어둡게 — 평평한 dim, blur 최소/없음
- 고정 헤더/푸터(진행바, 피드백 바)는 단색 표면 위, glass 없음

## 7. Do's and Don'ts

### Do
- 모든 화면의 단일 주요 액션에 Toss Blue (`#3182F6`)
- 버튼에 단색 3D lip (`0 4px 0` 같은 색의 더 진한 틴트)
- 카드는 부드러운 그림자 대신 2px 외곽선
- 본문/제목 텍스트는 Eel (`#191F28`), 절대 순수 검정 아님
- CTA는 Nunito 700, 짧은 명령형 한국어 (`정답 확인`, `다음 문제`)
- 게이미피케이션 팔레트(Bee, Fox, Toss Blue)는 보상/피드백에만
- 넉넉한 radius — 버튼 12px, 카드 16px, pill 진행바
- 화면당 하나의 명확한 액션; 숨 쉬게 둘 것
- 학습 화면 본문 16px 이상 유지

### Don't
- 3D lip 자리에 blur/soft 그림자 쓰지 말 것 — 촉각성을 죽인다
- 텍스트에 순수 검정(`#000000`) 쓰지 말 것 — Eel `#191F28`이 브랜드 잉크
- 한 문제 화면에 주요 액션 여럿 두지 말 것
- 얇은 font weight 쓰지 말 것 — 400과 700/800만
- lip을 blur·중립 그림자로 만들지 말 것 — 버튼 자기 색의 더 진한 틴트여야
- 채도 낮은/탁한 녹색 쓰지 말 것 — Toss Blue은 의도적으로 선명
- 터치 영역 줄이지 말 것; 버튼은 크게(≥50px)
- radius 무작위로 섞지 말 것 — 8/12/16/pill 스케일 준수
- **오답에 비난·창피 주는 카피 금지** (`틀렸어요!`, `또 틀림` 등) — 오답은 정상적인 단계

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile (Primary) | <768px | 전체 화면 단일 컬럼 문제, 전체 너비 CTA, 하단 내비 |
| Tablet | 768–1024px | 중앙 학습 컬럼, 측면 위젯 등장 |
| Desktop | >1024px | 제약된 중앙 컬럼(~600px) + 좌측 내비 레일 + 우측 streak/랭킹 레일 |

### Touch Targets
- 버튼: ≥50px 높이, 모바일에서 보통 전체 너비
- 보기 타일: ≥44px 높이, 빠른 탭을 위한 넉넉한 간격
- 하단 내비 항목: ≥48px 탭 영역

### Collapsing Strategy
- 데스크톱 측면 레일(streak, 랭킹, 프리미엄 프로모)은 모바일에서 화면 밖으로, 상단바·전용 탭으로 노출
- 고정 상단 진행바 + 고정 하단 피드백/CTA 바는 모든 사이즈에서 유지
- 마케팅 히어로는 모바일에서 일러스트 위·카피 아래로 쌓고, 데스크톱에서 좌우 배치

### Image Behavior
- 캐릭터/마스코트 일러스트는 벡터/Lottie — 어느 크기에서도 선명
- 챕터/문법 아이콘은 목록 내 일관된 크기(24–40px)
- 축하 애니메이션(confetti, 캐릭터 반응)은 완료 화면에서 전체 화면 재생

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Toss Blue (`#3182F6`), lip `#1B64DA`
- Secondary/Info: Toss Blue (`#3182F6`); 강한 보조 액션 그레이 fill (`#4E5968`)
- HUD/넓은 표면 + 흰 글자: Brand Deep (`#0064FF`)
- Destructive/오답: Toss Error Red (`#F04452`)
- 정답/성공: Toss Success Green (`#03B26C`)
- 경고: Toss Warning Orange (`#FE9800`)
- 배경: White (`#FFFFFF`), 은은한 표면 (`#F2F4F6`)
- 제목/본문 텍스트: Foreground (`#191F28`)
- 보조 텍스트: Muted (`#8B95A1`)
- placeholder/비활성: Muted (`#8B95A1`)
- 테두리: Border (`#E5E8EB`)
- 선택 상태: 테두리 `#3182F6` + 배경 `#E8F1FD`

### Example Component Prompts
- "Primary 버튼: `#3182F6` 배경, 흰색 Nunito 700 15px `정답 확인` 라벨, 12px radius, 14px/20px 패딩, min-height 50px, 단색 3D lip `0 4px 0 #1B64DA`. 누르면 translateY(4px)에 lip collapse."
- "문제 진행바: 16px 높이, 9999px radius, 트랙 `#E5E8EB`, 채움 `#3182F6`에 얇은 밝은-녹색 윗 sheen, width 애니메이션."
- "보기 타일: 흰 배경, 2px `#E5E8EB` 테두리, 12px radius, `0 2px 0 #E5E8EB` lip, 17px Pretendard `#191F28`. 선택: 테두리 `#3182F6`, bg `#DDF4FF`."
- "정답 피드백 바: 하단 고정, bg `#D7FFB8`, text `#1B64DA`, 윗 테두리 2px `#A5ED6E`, 오른쪽에 녹색 `계속` 버튼."
- "streak 스탯 카드: 흰 배경, 2px `#E5E8EB` 테두리, 16px radius, 20px 패딩. 불꽃 아이콘, Nunito 800 24px `#191F28` 카운트, Wolf `#8B95A1` 13px 라벨."

### Iteration Guide
1. 모든 주요 액션은 Toss Blue (`#3182F6`) + 3D lip — 타협 불가 브랜드 DNA
2. 버튼·제목은 Nunito 700/800; 본문은 Pretendard
3. 텍스트는 Eel `#191F28`, 순수 검정 아님; 보조는 Wolf `#8B95A1`
4. 카드는 2px `#E5E8EB` 외곽선, blur 그림자 아님
5. Radius: 버튼/입력 12px, 카드/모달 16px, 바/배지 pill
6. lip 그림자는 항상 요소 자기 색의 더 진한 단색
7. 화면당 하나의 명확한 주요 액션; 넉넉하고 축하하듯

---

## 10. Voice & Tone

"중학 문법이 곧 실력"은 **네가 이기길 진심으로 바라는, 약간 장난스러운 친구**처럼 말한다. 따뜻하고 격려하며 장난기 있되, 절대 엄하거나 학술적이지 않다. 한국어가 주 목소리이고, 중학생에게 친근한 반말~친근 존댓말 register로 쓴다. 칭찬은 후하고 구체적으로, 실패는 비난이 아니라 "괜찮아, 다시 가보자"의 정상적인 단계로 재구성한다. 문법 용어는 쓰되 항상 쉬운 말로 풀어준다.

| Context | Tone |
|---|---|
| CTA | 짧고 명령형, 활기차게 — `정답 확인`, `다음 문제`, `시작하기`, `이어서 풀기` |
| 정답 피드백 | 축하하듯 짧게 — `좋아!`, `완벽해!`, `정답이야 🎉` |
| 오답 피드백 | 부드럽게, 비난 없이 — `정답:`을 담담히 보여줌; 절대 `틀렸어요!` 아님 |
| streak / 보상 | 신나게 — `7일 연속!`, `+10 XP`, `오늘 30문제 돌파!` |
| 온보딩 | 친근한 2인칭, 한 화면 한 질문, 부담 낮게 |
| 빈 상태 | 격려하는 한 마디 + 하나의 명확한 액션 — 절대 차갑지 않게 |
| 문법 해설 | 쉬운 말로, 예문 중심, 규칙은 한 줄로 요약 후 예시 |

**금지 톤.** 학술 jargon, 실수에 대한 창피 주기(`틀렸어요!`, `또 못 풀었네`), 기업식 딱딱함, 학습 흐름 안에서의 죄책감 유발. 문장은 짧게. 진짜 신날 때의 느낌표는 환영. 시험·점수로 겁주지 않는다 — 동기는 "많이 풀수록 강해진다"는 성장감에서 온다.

## 11. Brand Narrative

**중학 문법이 곧 실력**은 하나의 단순한 명제 위에 서 있다 — *영어 문법 실력은 많이 풀수록 강해진다.* 문법을 외워야 할 규칙의 더미가 아니라, 반복해서 풀며 몸에 붙이는 **훈련(training)**으로 다시 정의한다. 중학생이 시제·조동사·관계사·문장 형식 같은 핵심 문법을 한 문제 더 풀고 싶게 만드는 것 — 그것이 제품과 디자인의 전부다.

디자인 언어는 이 훈련 모델과 분리될 수 없다. 습관과 반복이 핵심이므로 인터페이스는 게임처럼 설계된다: streak, XP, 정답률, 연속 정답, 그리고 끊임없이 격려하는 톤. Toss Blue과 묵직한 촉각적 버튼은 한 세트의 문제 풀이가 내일 다시 돌아올 만큼 보람 있게 느껴지도록 존재한다. 3D 버튼 lip, confetti, 전체 화면 축하 상태 — 이것들은 장식이 아니라 픽셀로 렌더링된 **지속 학습 장치(retention mechanics)**다.

이 제품이 거부하는 것은 *문법책*의 미감이다. 칠판 녹색도, 빽빽한 규칙표를 앞세우는 것도, 겁주는 시험 카운트다운도 없다. 차가운 SaaS 미니멀리즘도 거부한다 — 회색 대시보드는 streak가 만들어내는 성취감을 절대 만들지 못한다. 엄정한 제품 설계가 친근한 게임의 옷을 입은, 의도된 중간 지대에 산다.

<!-- omd:limitation 출시 시점·운영 주체·정식 슬로건 등 추가 사실은 미입력 상태. 핵심 thesis("많이 풀수록 강해지는 문법 훈련")와 서비스명만 사용자 제공. 나머지 사실은 채우기 전까지 지어내지 말 것. [FILL IN: 출시 시점, 운영 주체, 정식 슬로건] -->

## 12. Principles

1. **많이 풀수록 강해진다.** 모든 장난스러운 디테일 — lip, confetti, streak — 은 "한 문제 더"를 위해 존재한다. 즐거움은 장식이 아니라 훈련이 작동하는 방식이다.
2. **한 화면 한 액션.** 문제 화면에는 정확히 하나의 명백한 다음 수가 있다. 선택 마비는 흐름을 죽이고, 밝은 녹색 CTA가 그것을 없앤다.
3. **모든 걸 축하한다.** 정답, streak, 레벨업, 마일스톤 — 모두 보이고 즐거운 피드백을 받는다. 보이는 진전은 반복되는 진전이다.
4. **녹색은 가라(go).** Toss Blue은 주요 액션과 정답에만. 한가하게 장식하지 않는다 — 항상 "이걸 해" 또는 "맞았어"를 뜻한다.
5. **평평함보다 촉각.** 컨트롤은 물리적으로 눌리는 느낌이어야 한다. 단색 3D lip과 눌림 key-travel이 인터페이스를 만지고 싶은 장난감처럼 만든다.
6. **실수에 친절하게.** 오답은 정상적인 단계로, 담담히 비난 없이 보여준다. 톤은 절대 창피 주지 않는다 — 실패는 실력으로 가는 길 위의 데이터일 뿐이다.
7. **굵고 읽기 쉽게.** 큰 둥근 글자, 고대비, 큰 터치 영역. 한눈에 읽히고 한 손으로 쓸 수 있게.
8. **일관성이 습관을 만든다.** 같은 녹색 버튼, 같은 진행바, 같은 축하 — 시각 언어의 반복이 습관을 붙게 한다.

## 13. Personas

*아래 페르소나는 "중1~3학년"이라는 사용자 세그먼트를 바탕으로 한 가상의 아키타입이며 실제 인물이 아니다.*

**지호, 중1.** 초등 영어와 중등 문법 사이에서 막 헤매기 시작한 학생. 문법 용어(주어·동사·보어)가 아직 낯설다. 짧고 쉬운 문제를 빠르게 풀며 "맞았다"는 피드백에서 자신감을 얻는다. 한 화면에 글이 많으면 금세 지친다 — 큰 `정답 확인` 버튼과 즉각적인 정답/오답 색 피드백이 핵심. 오답에 창피를 주면 바로 앱을 닫는다.

**서연, 중2.** 내신 시험 대비로 시제·조동사·관계사를 정확히 다지고 싶은 학생. 정답률과 누적 푼 문제 수를 신경 쓰고, streak를 끊기 싫어한다. 틀린 문제의 **해설(`해설 보기`)**을 실제로 읽으며, 규칙을 한 줄로 요약해주는 걸 좋아한다. "왜 틀렸는지"가 비난 없이 설명되면 다시 도전한다.

**민준, 중3.** 고등 진학을 앞두고 문장 형식·분사구문 같은 어려운 문법까지 훈련하려는 학생. 측정 가능한 진전(XP, 정답률 그래프)과 효율을 중시한다 — 문제 사이 루프가 빠르고 매끄럽길 바란다. 게이미피케이션을 즐기지만, 무엇보다 자기 실력이 실제로 강해지고 있다는 증거를 원한다.

## 14. States

| State | Treatment |
|---|---|
| **빈 상태(아직 푼 문제 없음)** | 친근한 Nunito 800 헤드라인 + Wolf `#8B95A1` 격려 한 줄, 녹색 `#3182F6` CTA(`첫 문제 풀기`). 캐릭터 일러스트와 함께. 절대 차갑지 않게. |
| **로딩(첫 페인트)** | `#F2F4F6`(Polar) 스켈레톤 블록을 최종 치수로, 또는 중앙 애니메이션 캐릭터. 챕터 타일 fade-in. |
| **로딩(정답 채점 중)** | `정답 확인` 버튼에 인라인 스피너/짧은 비활성; 전체 화면을 막지 않음. |
| **정답** | 하단 피드백 바 bg `#D7FFB8`, text `#1B64DA`, 윗 테두리 `#A5ED6E`, 경쾌한 카피(`좋아!`), 녹색 `계속` 버튼. 선택적 효과음 + 작은 confetti. |
| **오답** | 하단 피드백 바 bg `#FFDFE0`, text `#EA2B2B`, `정답:`을 담담히 표시, 빨강 `계속` 버튼. 비난 카피 없음. 해당 시 하트/목숨 감소. |
| **에러(입력 필드)** | 2px `#F04452` 테두리, bg `#FFF0F0`, 아래 helper `#F04452` 13px, 실행 가능한 한 문장. |
| **비활성(답 고르기 전 정답 확인)** | bg `#E5E8EB`, text `#AFAFAF`, lip 없음, 누를 수 없음. 선택하는 순간 즉시 활성화. |
| **성공(챕터/유닛 완료)** | 전체 화면 축하: confetti, 캐릭터 반응, XP가 Bee `#FE9800`/Nunito 800으로 카운트업, streak 증가, 단일 녹색 `계속`. 감정의 정점. |
| **streak 마일스톤** | 불꽃 일러스트 모달, 큰 Nunito 800 카운트, Fox `#FE9800` 액센트, 공유 + 계속 액션. |
| **하트 소진** | 하트 소진 설명 모달, 기다리기·복습으로 회복·프리미엄 업셀 옵션. 톤은 가볍게, 징벌적이지 않게. |
| **스켈레톤** | `#F2F4F6` 블록을 정확한 최종 치수로, 부드러운 shimmer, 컴포넌트 radius로 둥글게. |

## 15. Motion & Easing

**Durations** (named):

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | 비활성 상태 전환, reduced-motion 폴백 |
| `motion-fast` | 150ms | 버튼 누름 / lip collapse, hover, 작은 reveal |
| `motion-standard` | 250ms | 화면 전환, 피드백 바 slide-up, 타일 선택 |
| `motion-celebrate` | 400–600ms | XP 카운트업, 진행도 채움, 성공 reveal |
| `motion-confetti` | 800ms+ | 챕터 완료 confetti와 캐릭터 반응 |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | 피드백 바, 모달, 화면 push 등장 |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | 닫힘, 바 slide-down |
| `ease-standard` | `cubic-bezier(0.4, 0.0, 0.2, 1)` | 양방향 전환, 탭/콘텐츠 전환 |
| `ease-bounce` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | 축하 — XP pop, streak 불꽃, 캐릭터 bounce, 배지 reveal. 장난스러운 overshoot는 여기서만 on-brand. |

**Signature motions.**

1. **버튼 key-press.** 탭 시 버튼이 lip 높이(`4px`)만큼 `motion-fast`로 내려가고 단색 lip이 0으로 collapse — 물리적 키를 누르는 것과 똑같이. 떼면 튀어 올라온다. 가장 알아보기 쉬운 시그니처 상호작용.
2. **진행도 채움.** 정답마다 상단 진행바의 녹색 채움 width가 `motion-standard` + `ease-standard`로 애니메이션 — 보이고 만족스러운 전진.
3. **축하 pop.** 챕터 완료 시 XP가 카운트업되고, streak 불꽃·배지가 `ease-bounce`로 scale-in, confetti가 터진다. Overshoot/bounce는 *축하 맥락에서만* 허용 — 다른 곳에선 가벼워 보이지만 여기선 기쁨이 핵심.
4. **모션 줄이기.** `prefers-reduced-motion: reduce`에서 confetti와 bounce overshoot 제거, duration은 `motion-instant`로 수렴, 전환은 단순 fade로. 제품은 완전히 사용 가능하고 카피로는 여전히 축하하되, 덜 동적으로.

<!--
OmD v0.1 — bootstrapped from duolingo (2026-06-16)
- Visual surface 토큰(색·radius·shadow·motion): duolingo canonical, axis shift 없음.
- Brand essence(voice·principles·motion philosophy): duolingo canonical 권위 유지하되 한국어 중학생 문법 훈련 맥락으로 voice sample 변형.
- §11-13 사용자 제공 사실: 서비스명("중학 문법이 곧 실력"), thesis("많이 풀수록 강해지는 문법 훈련"), 타겟(중1~3). 출시 시점·운영 주체·정식 슬로건은 [FILL IN] — 지어내지 말 것.
- §13 Personas는 "중1~3학년" 세그먼트 기반 가상 아키타입.
-->
