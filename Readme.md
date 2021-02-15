# SASS
- SASS 들어가기 전에 환경설정은 맨 아래 dependency에 서술해놓았다.
- 직접 webpack 환경 구성 후 설정하였음.
- 환경자체는 react boilerplate와 유사

# dependency
- 리액트 관련
- react
- react-dom
- 웹팩 관련
- webpack
- webpack-cli
- webpack-dev-server
- webpack-merge
- 스타일 관련
- classnames


- 웹팩 플러그인 및 로더
- css 관련
- sass-loader
- node-sass (sass를 node에 인식시키는 패키지)
- css-loader
- cssnano (postcss 의존성 베이스 패키지)
- postcss
- postcss-loader
- mini-css-extract-plugin (css code spliting, **chunk정보 확인 필요**)
- autoprefixer ( 자동으로 css prefix 붙여줌, browserlist 설정필요)
- html-webpack-plugin (html 최적화 시 필요)


- 바벨
- babel-loader
- @babel/cli
- @babel/core
- @babel/preset-react