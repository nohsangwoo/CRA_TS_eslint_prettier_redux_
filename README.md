# CRA with TS

# eslint, TS, prettier

- 현재 버전 확인
  npm info "eslint-config-airbnb@latest" peerDependencies

- 2021.12.17 기준 확인된 버젼을 통해 설치하기
  npm install eslint@^7.32.0 eslint-plugin-import@^2.25.3 eslint-plugin-jsx-a11y@^6.5.1 eslint-plugin-react@^7.27.1 eslint-plugin-react-hooks@^4.3.0 eslint-config-prettier eslint-plugin-prettier eslint-config-airbnb prettier --save-dev

- for ts
  npm install @typescript-eslint/eslint-plugin @typescript-eslint/parser --save-dev

패키지 설명:
eslint: ESLint 코어
prettier : 코드의 스타일을 잡아주는 포맷팅 기능
eslint-plugin-react: React 관련 린트 설정을 지원
eslint-plugin-react-hooks: React Hooks의 규칙을 강제해주는 플러그인
eslint-plugin-import: ES2015+의 import/export 구문을 지원
eslint-plugin-jsx-a11y: JSX 내의 접근성 문제에 대해 즉각적인 AST린팅 피드백을 제공
eslint-config-prettier: prettier와 eslint의 충돌을 일으키는 ESLint 규칙들을 비활성화시켜주는 config
eslint-plugin-prettier: prettier에서 인식하는 오류를 ESLint가 출력
eslint-config-airbnb: airbnb사의 코딩규칙을 사용
@typescript-eslint/eslint-plugin : Typescript 관련 린팅규칙을 설정하는 플러그인 (추가)
@typescript-eslint/parser : Typescript를 파싱 하기 위해 사용 (추가)

# apply Redux

# apply AOS

# issue 1

ERROR in Failed to load config "react-app" to extend from.
Referenced from: /Users/klounge/Documents/klounge/admin.gotalk.to/new-admin.gotalk.to/package.json

- yarn add eslint-config-react-app

# basic start pack

package.json과 각종 환경성정을 참고하여 기본 세팅에 적용해보자.
