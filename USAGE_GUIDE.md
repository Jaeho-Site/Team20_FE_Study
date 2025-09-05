# 📘 파일 관계와 사용법 가이드

## 🔗 파일 간의 관계

```
index.css (테마 정의)
    ↓
components (컴포넌트에서 테마 사용)
    ↓
demos (컴포넌트 테스트)
    ↓
App.tsx (전체 조립)
```

## 📝 각 파일의 역할

### 1. `src/index.css` - 테마 토큰 정의소

**역할**: 색상, 폰트 등 디자인 토큰을 정의하는 곳

```css
@theme {
  --color-brand-primary: oklch(55% 0.18 220); /* 파란색 */
  --color-brand-secondary: oklch(70% 0.12 240);
  --color-brand-accent: oklch(75% 0.15 200);
}
```

### 2. `src/components/Button.tsx` - 토큰을 사용하는 컴포넌트

**역할**: index.css에서 정의한 토큰을 실제로 사용

```tsx
// Button.tsx에서는 이렇게 사용하지 않고
// <button style={{backgroundColor: 'blue'}}>

// 이렇게 CSS 클래스를 사용
<button className="bg-brand-primary text-white">{children}</button>
```

### 3. `src/index.css` - 컴포넌트 스타일 정의

**역할**: 컴포넌트에서 사용할 CSS 클래스를 정의

```css
@layer utilities {
  .btn-primary {
    @apply bg-brand-primary text-white; /* 토큰 사용 */
  }
}
```

### 4. `src/demos/ButtonDemo.tsx` - 컴포넌트 테스트

**역할**: 컴포넌트가 제대로 작동하는지 확인

```tsx
export const ButtonDemo = () => (
  <div>
    <Button variant="primary">테스트 버튼</Button>
    <Button variant="secondary">테스트 버튼</Button>
  </div>
);
```

### 5. `src/App.tsx` - 전체 조립

**역할**: 모든 데모를 한 페이지에서 확인

```tsx
export const App = () => (
  <div>
    <ButtonDemo />
    <InputDemo />
    <CardDemo />
  </div>
);
```

## 🎯 핵심 작업 흐름

### 1단계: 토큰 정의 (index.css)

```css
@theme {
  /* 내가 원하는 색상으로 변경 */
  --color-brand-primary: oklch(70% 0.15 350); /* 핑크색으로 변경 */
}
```

### 2단계: 자동으로 적용됨

- Button 컴포넌트의 `bg-brand-primary` 클래스가 자동으로 핑크색이 됨
- 다른 모든 컴포넌트도 자동으로 핑크 테마가 적용됨

### 3단계: 브라우저에서 확인

- `npm run dev` 실행
- 모든 버튼이 핑크색으로 변경된 것을 확인

## 🛠️ 실제 사용 예시

### 예시 1: 색상만 바꾸고 싶을 때

```css
/* index.css에서만 수정 */
@theme {
  --color-brand-primary: oklch(65% 0.2 30); /* 오렌지로 변경 */
}
```

→ 모든 컴포넌트가 자동으로 오렌지 테마가 됨

### 예시 2: 새로운 버튼 스타일 추가하고 싶을 때

```css
/* index.css에 추가 */
@layer utilities {
  .btn-special {
    @apply bg-brand-accent text-black rounded-full;
  }
}
```

```tsx
/* Button.tsx에 variant 추가 */
const variantClasses = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  special: 'btn-special', // 새로 추가
};
```

## 🎨 테마 변경 실습

### 벚꽃 테마로 바꿔보기

1. `src/index.css` 열기
2. 다음으로 변경:

```css
@theme {
  --color-brand-primary: oklch(75% 0.12 350); /* 벚꽃 핑크 */
  --color-brand-secondary: oklch(85% 0.08 350); /* 연한 핑크 */
  --color-brand-accent: oklch(90% 0.05 350); /* 아주 연한 핑크 */
}
```

3. 저장 후 브라우저에서 확인
4. 모든 버튼, 카드, 태그가 핑크 테마로 변경됨!

## 💡 핵심 포인트

1. **토큰만 바꾸면 전체 테마 변경**: `index.css`의 토큰만 수정하면 모든 컴포넌트가 자동으로 변경
2. **컴포넌트는 건드릴 필요 없음**: Button.tsx, Card.tsx 등은 수정하지 않아도 됨
3. **데모로 실시간 확인**: 브라우저에서 모든 변경사항을 즉시 확인 가능

## 🔧 문제 해결

**Q: 색상이 안 바뀜**
A: `oklch(L% C H)` 형식 확인, 브라우저 새로고침

**Q: 새로운 컴포넌트 만들고 싶음**
A: `components/` 폴더에 새 파일 생성 후 `bg-brand-primary` 같은 클래스 사용

**Q: 데모 추가하고 싶음**
A: `demos/` 폴더에 새 파일 생성 후 `App.tsx`에 추가
