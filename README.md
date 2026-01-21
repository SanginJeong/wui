# WonderUI

> 개인 사이드 프로젝트에서 “설치해서 바로 쓰는” 나만의 UI 라이브러리 + 디자인 시스템을 만들기 위한 프로젝트

## Why

개인 프로젝트를 할 때마다 Button/Modal/Dropdown 같은 기본 컴포넌트를 매번 새로 만들고,
스타일/간격/타이포 규칙이 흔들리면서 프로젝트마다 달라지는 문제가 있었습니다.

그래서 이 프로젝트는:

1. 반복되는 UI 개발 비용을 줄이기
2. 일관된 디자인 규칙 정의
3. 재사용 가능한 컴포넌트(UI Library) 구현
4. 어떤 프로젝트에서도 **설치만 하면 바로 쓸 수 있는** 형태로 만드는 것을 목표

## Goals

- **Design Tokens** 중심으로 UI 일관성을 유지 (color / spacing / typography / radius ...)
- 컴포넌트는 조합, 확장, 좋은 접근성을 목표
- 프로젝트와 프레임워크에 종속되지 않고 어디서든 사용 가능하도록 설계
- 문서화
- NPM 배포

## What’s inside

- **Foundations**
  - Color / Typography / Spacing / Radius / Shadow /
- **Tokens**
  - Semantic tokens 중심 (예: `--color-bg`, `--color-text`, `--color-primary`)
- **Components (예정/진행중)**
  - Button / Badge / Input / Select / Dropdown / Modal / Toast ...
- **Docs**
  - 토큰/컴포넌트 사용법과 가이드
  - 결정 기록(Decision Log), 설계 원칙(Architecture)

## Tech Stack

- React
- CSS Variables
- TypeScript

## Getting Started

### Install

[npm wui](https://www.npmjs.com/package/wonderui-tokens)

```bash
npm i wonderui-tokens
```
