<!-- omd:managed:start -->
# Design System — 중학 문법이 곧 실력

이 프로젝트의 UI/시각 작업은 **[DESIGN.md](./DESIGN.md)**를 단일 source of truth로 따른다. (bootstrapped from duolingo, 2026-06-16)

**핵심 토큰 요약 (팔레트=Toss, 구조=duolingo식)** (전체는 DESIGN.md 참조):
- Primary CTA: Toss Blue `#3182f6` (3D lip `#1b64da`) — 화면당 단 하나
- HUD/넓은 표면+흰 글자: Brand Deep `#0064ff` · 오답/에러: `#f04452` · 정답/성공: `#03b26c` · 경고: `#fe9800`
- 텍스트 잉크: `#191f28` (절대 순수 검정 아님) · 보조: `#8b95a1` · 테두리: `#e5e8eb`
- 배경: White `#ffffff`, 은은한 표면 `#f2f4f6` · 선택: 테두리 `#3182f6` + 배경 `#e8f1fd`
- 타입: 제목/버튼 Nunito 700/800, 본문 Pretendard. 학습 화면 본문 ≥16px
- Radius: 버튼/입력 12px, 카드/모달 16px, 바/배지 pill(9999px)
- Depth: 단색 3D "lip"(`0 4px 0 <brand 더 진한 틴트>`) + 2px 카드 외곽선 (구조는 duolingo식 유지)

**불변 규칙:**
- 모든 주요 액션 = Toss Blue + 3D lip (타협 불가)
- 오답에 비난·창피 카피 금지 (`틀렸어요!` 금지) — 오답은 정상적인 단계
- 화면당 하나의 명확한 액션, 넉넉하게
- 얇은 weight 금지(400/700/800만), 채도 낮은 녹색 금지

자세한 컴포넌트·상태·모션·보이스는 DESIGN.md의 §4·§10·§14·§15 참조.
<!-- omd:managed:end -->
