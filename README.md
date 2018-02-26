# electron-app-starter
Electron + React + Typescript를 이용한 프로젝트용 Starter Kit입니다.

## 1. 컴퓨터 구성 / 필수 조건 안내 (Prerequisites)
OS 환경에 맞는 [nodejs](https://nodejs.org/ko/) 설치가 필요합니다.

## nodejs & npm 버전
- node: v9.3.0
- npm: 5.6.0

### global 설치를 권장하는 라이브러리
- electron
- electron-builder
- asar
- create-react-app
- foreman
- typescript
- tslint
- webpack
- yarn

### 패키지 구성
- **Electron**
  - electron
  - electron-builder
  - asar

- **React**
  - react
  - create-react-app
  - react-router@v4
  - redux
    - react-redux
    - redux-actions
    - redux-thunk
    - redux-logger
    - redux-promise-middleware
    - immutable
  - react-helmet
  - react-hot-loader@v4
  - react-loadable

- **Typescript**
  - typescript
  - tslint

- **CSS Framework**
  - semantic-ui-css
  - semantic-ui-react

- **Server Side Rendering(for web app)**
  - express

- **Module Loader/bundler**
  - webpack

- **Package Manager**
  - yarn

## 2. 설치 안내 (Installation Process)

### 패키지 설치
```
npm install
```

## 3. 사용법 (Getting Started)
### 로컬 서버 구동 및 electron 실행
```
npm run start
```
### 로컬 빌드
```
npm run build
```
### SSR 서버 구동
```
npm run serve
```
### electron 실행
```
npm run electron
```
### 빌드 후 로컬 서버 구동 및 electron 실행
```
npm run electron:start
```
### 로컬 서버 실행
```
npm run react:start
```
### electron-builder 실행
- OS X
```
npm run build && build --mac
```
- Windows
```
npm run build && build --win
```

## 4. 파일 정보 및 목록 (File Manifest)
## 5. 저작권 및 사용권 정보 (Copyright / End User License)
MIT © [http://github.com/pjb0811](pjb0811)
## 6. 배포자 및 개발자의 연락처 정보 (Contact Information)
- [pjb0811@gmail.com](mailto:pjb0811@gmail.com)
- [http://github.com/pjb0811](http://github.com/pjb0811)
<!--
## 7. 알려진 버그 (Known Issues)
## 8. 문제 발생에 대한 해결책 (Troubleshooting)
## 9. 크레딧 (Credit)
## 10. 업데이트 정보 (Change Log)
-->
