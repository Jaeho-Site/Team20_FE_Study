# K-콘텐츠 여행 플래너 - 디자인 시스템

tailwindcss는 v4 부터 많은 변화가 있었습니다. 이런게 바뀐거구나 처럼 간단하게만 사용법같은것만
참고하시고, 아래 참고 자료 링크를 AI에게 첨부해서 요약해달라고 해서 사용법을 익혀보세요!
저도 다 일일이 안 읽어 봤어요.
또 이 저장소에서 하셔도 되고, 처음부터 본인 스타일로 하셔도되고, 특별한 의견이 없으시면 가장 간단하게 배포해둔 https://kspot-test.vercel.app/ 스타일 그대로, 또는 조금 변경해서 사용하자고 하셔도 됩니다.
스타일 정의 파일 index.css만 회의전에 생각해와주시면 됩니다!

**참고 자료**

https://tailwindcss.com/blog/tailwindcss-v4

https://velog.io/@oneook/tailwindcss-4.0-%EB%AC%B4%EC%97%87%EC%9D%B4-%EB%8B%AC%EB%9D%BC%EC%A1%8C%EB%82%98%EC%9A%94

## 🎯 팀 회의 준비

굳이 제가 만든것처럼 하실필요없고, 간단하게 스타일 정의해서 button같은 기본 테크에만 적용해서 회의 오셔도됩니다! 팀 회의 전에 본인이 생각하는 가장 좋은 스타일을 생각해서 와주세요!

1. **컨셉 설명** (1-2문장)
2. **주요 색상 3가지** (Primary, Secondary, Accent)
3. **스크린샷** (데모 페이지 캡처 또는 PR)

## 📁 프로젝트 구조

```
src/
├── index.css           # 🎨 테마 토큰 정의 (메인 작업 파일)
├── components/         # 🧩 기본 컴포넌트들
├── demos/             # 📋 각 컴포넌트별 테스트 데모
└── App.tsx            # 🏠 메인 페이지 (데모 조립)
```

## 🎨 테마 토큰 정의

### 📍 작업 위치: `src/index.css`

```css
@theme {
  /* 브랜드 컬러 - 가장 중요! */
  --color-brand-primary: oklch(55% 0.18 220); /* 메인 색상 */
  --color-brand-secondary: oklch(70% 0.12 240); /* 보조 색상 */
  --color-brand-accent: oklch(75% 0.15 200); /* 강조 색상 */

  /* 상태별 컬러 */
  --color-success: oklch(70% 0.16 150);
  --color-warning: oklch(80% 0.15 70);
  --color-danger: oklch(65% 0.2 20);

  /* 타이포그래피 */
  --font-family-sans: 'Pretendard Variable', system-ui, sans-serif;
}
```

### 🎯 컨셉별 색상 예시

```css
/* 🌸 벚꽃 테마 */
--color-brand-primary: oklch(70% 0.15 350); /* 벚꽃 핑크 */

/* 🌿 자연 테마 */
--color-brand-primary: oklch(60% 0.18 130); /* 자연 그린 */

/* 🌅 석양 테마 */
--color-brand-primary: oklch(65% 0.2 30); /* 따뜻한 오렌지 */
```

## 🧪 테스트 방법

### 3. 컴포넌트별 테스트

- **ButtonDemo**: 4가지 버튼 스타일
- **InputDemo**: 입력 필드 상태들
- **CardDemo**: 카드와 hover 효과
- **TagDemo**: 태그 variants

## 🔧 개발 워크플로우

### 1. 브랜치 생성

```bash
git checkout -b theme/이름-컨셉명
# 예시: git checkout -b theme/김철수-테마
```

### 2. 개발 단계

1. **컨셉 정하기** - K-콘텐츠 분위기 선택
2. **메인 색상 결정** - `--color-brand-primary` 먼저 정의
3. **보조 색상 조화** - secondary, accent 색상 조정
4. **전체 확인** - 모든 데모에서 색상 조화 체크

## 🆘 문제 해결

### CSS 린터 경고 (정상)

- `Unknown at rule @theme`
- `Unknown at rule @apply`

### 색상 미적용시

1. 브라우저 새로고침 (Ctrl+F5)
2. CSS 변수명 오타 확인
3. OKLCH 형식 확인: `oklch(L% C H)`
