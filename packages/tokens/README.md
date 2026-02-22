# WonderUI Tokens

WonderUI Tokens는 팀이 일관된 UI를 빠르게 만들 수 있도록 돕는 디자인 토큰 패키지입니다.  
색상, 간격, 타이포그래피, 라운드, 그림자, 테두리 굵기 등 핵심 디자인 규칙을 CSS 변수로 제공해 어떤 프로젝트에서도 바로 사용할 수 있습니다.

## Features

- Design Tokens 중심의 UI 일관성
- 프레임워크 종속 없는 CSS 변수 제공
- 재사용 가능한 컴포넌트와 연결되는 토큰 구조
- 문서화 및 확장에 유리한 구조

## Included Tokens

- Color (Primary, Neutral)
- Spacing
- Typography
- Radius
- Shadow
- Border Width
- (추가 예정: Semantic, Transition, Z-Index)

## Install

```bash
npm i wonderui-tokens
```

## Usage

### JS/TS 번들러에서 바로 import

```bash
import "wonderui-tokens";
```

### CSS에서 직접 import

```bash
@import "wonderui-tokens/dist/tokens.css";
```

## Design Workflow

- Figma에서 Tokens Studio로 토큰 수정
- JSON 업데이트 후 Style Dictionary로 CSS 변수 빌드
- 변경 사항은 배포 파이프라인에 반영

## Links

- [WonderUI Docs](https://wonder-ui-eight.vercel.app/)
- [Figma](https://www.figma.com/design/gwb1lulY9VdTa9alJIZuBU/Wonder-Design-Token)
- [Github](https://github.com/SanginJeong/wui)
