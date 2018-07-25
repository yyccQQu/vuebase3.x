# Dashboard

[![Build Status][travis-image]][travis-url]
[![Dependency Status][dependency-image]][dependency-url]
[![devDependency Status][devdependency-image]][devdependency-url]
[![Code Style][style-image]][style-url]

> A dashboard scaffolding based on vue.js created by [vuejs/vue-cli](https://github.com/vuejs/vue-cli).

## Preview

![WEDN.NET Dashboard](https://raw.githubusercontent.com/zce/dashboard/vue-backup/static/preview.png)

### Online demo

[http://dashboard.zce.me](http://dashboard.zce.me)

> - username: zce
> - password: wanglei

## Usage

### Clone Repo

```shell
# clone
$ git clone https://github.com/zce/dashboard.git
```

### Build Setup

```shell
# install dependencies
$ yarn

# serve with hot reload at http://localhost:8080
$ yarn serve

# build for production with minification
$ yarn build

# build for production and deploy to gh-pages
$ yarn deploy
```

## API Server

[https://jsonplaceholder.uieee.com](https://jsonplaceholder.uieee.com)

Source: [zce/dashboard-server](https://github.com/zce/dashboard-server)

### Usage

```shell
# clone api server
$ git clone https://github.com/zce/dashboard-server.git
# run api server
$ cd dashboard-server
$ yarn
$ yarn start
# => api server run @ http://localhost:2080
```

modify `baseURL` in `src/utils/axios.js`:

```diff
- baseURL: 'https://jsonplaceholder.uieee.com/',
+ baseURL: 'http://localhost:2080/',
```

## Environment

- [Node](https://nodejs.org/) >= 6.0.0
- [Yarn](https://yarnpkg.com/) >= 0.20.0 or [NPM](https://www.npmjs.com/) >= 3.0.0

## Stacks

- [Vue CLI 3](https://github.com/vuejs/vue-cli)
- [Vue](http://vuejs.org/)
- [Vuex](https://github.com/vuejs/vuex)
- [Vue Router](https://github.com/vuejs/vue-router)
- [Vue I18n](https://github.com/kazupon/vue-i18n)
- ~~[Vue Resource](https://github.com/pagekit/vue-resource)~~
- [Axios](https://github.com/mzabriskie/axios)
- [Element UI](https://github.com/ElemeFE/element)
- [NProgress](https://github.com/rstacruz/nprogress)
- [Webpack](https://webpack.js.org/)
- [Vue Loader](http://vuejs.github.io/vue-loader)
- [Babel](https://babeljs.io/)
- [Sass](http://sass-lang.com/)
- [JSON Server](https://github.com/typicode/json-server)
- [Mock](http://mockjs.com/)
- [ESLint](http://eslint.org/)
- [EditorConfig](http://editorconfig.org/)
- [Travis CI](https://travis-ci.org/)

## Todos

- [x] Restructure config file
- [x] Remove unused packages
- [x] Custom Element UI theme
- [x] All pages structure
- [x] JSON Server
- [x] Global state
- [x] Table demo
- [x] Login module
- [x] Restructure libs code
- [x] vue-resource -> Axios
- [ ] Options module
- [ ] Users module
- [ ] Media module
- [ ] Posts module
- [ ] Terms module
- [ ] Comments module
- [ ] Other module
- [ ] Config package
- [ ] Deploy to GitHub Pages by Travis CI

## License

[MIT](LICENSE) &copy; [汪磊](https://zce.me) & [WEDN.NET](https://wedn.net)



[travis-image]: https://img.shields.io/travis/zce/dashboard/vue.svg
[travis-url]: https://travis-ci.org/zce/dashboard
[dependency-image]: https://img.shields.io/david/zce/dashboard.svg
[dependency-url]: https://david-dm.org/zce/dashboard
[devdependency-image]: https://img.shields.io/david/dev/zce/dashboard.svg
[devdependency-url]: https://david-dm.org/zce/dashboard?type=dev
[style-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[style-url]: http://standardjs.com/
