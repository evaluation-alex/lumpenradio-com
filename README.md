## Lumpen Radio Web 2.0

[![Stack Share](http://img.shields.io/badge/tech-stack-0690fa.svg?style=flat)](http://stackshare.io/jhabdas/lumpen-radio-web-2-0)
[![Dependency Status](https://david-dm.org/jhabdas/lumpenradio-com.svg)](https://david-dm.org/jhabdas/lumpenradio-com)
[![devDependency Status](https://david-dm.org/jhabdas/lumpenradio-com/dev-status.svg)](https://david-dm.org/jhabdas/lumpenradio-com#info=devDependencies)
[![Tips](http://img.shields.io/gratipay/jhabdas.svg)](https://gratipay.com/jhabdas)

The new Lumpen Radio is an evolution of the mind.

![wlpn-com-proto-navigation](https://cloud.githubusercontent.com/assets/440298/10523933/98b4cafa-7342-11e5-85da-7e4966aea6a8.gif)

### Features

- Remote data and Authentication with [Firebase](https://www.firebase.com/).
- [Isomorphic rendering](http://nerds.airbnb.com/isomorphic-javascript-future-web-apps/) of Firebase data.
- [Alt](http://alt.js.org/) as a lightweight [Flux](http://alt.js.org) implementation.
- Leverages [Material UI](http://material-ui.com) for access to robust pre-assembled components.
- BEM-style CSS components with Bootstrap inspired variables using [CSS Next](http://cssnext.io).
- Markdown processing with [Showdown](https://github.com/showdownjs/showdown) (with XSS filter).

### Documentation

  * **General**
    - [React Style Guide](./docs/react-style-guide.md)
    - [How to configure text editors and IDEs](./docs/how-to-configure-text-editors.md)
  * **Questions**
    - [Which module bundler should I use?](https://github.com/kriasoft/react-starter-kit/issues/3)
    - [Which Flux implementation should I use?](https://github.com/kriasoft/react-starter-kit/issues/22)
  * **Recipes**
    - [How to Implement Routing and Navigation](./docs/recipes/how-to-implement-routing.md)
    - [How to Integrate Disqus](./docs/recipes/how-to-integrate-disqus.md)

### Directory Layout

```
├── /build/                     # The folder for compiled output
├── /docs/                      # Documentation files for the project
├── /node_modules/              # 3rd-party libraries and utilities
├── /src/                       # The source code of the application
│   ├── /actions/               # Action creators that allow to trigger a dispatch to stores
│   ├── /api/                   # REST API / Relay endpoints
│   ├── /components/            # React components
│   ├── /constants/             # Constants (action types etc.)
│   ├── /content/               # Static content (plain HTML or Markdown, Jade, you name it)
│   ├── /core/                  # Core components (Flux dispatcher, base classes, utilities)
│   ├── /decorators/            # Higher-order React components
│   ├── /public/                # Static files which are copied into the /build/public folder
│   ├── /stores/                # Stores contain the application state and logic
│   ├── /utils/                 # Utility classes and functions
│   ├── /app.js                 # Client-side startup script
│   ├── /config.js              # Global application settings
│   ├── /routes.js              # Universal (isomorphic) application routes
│   └── /server.js              # Server-side startup script
├── /tools/                     # Build automation scripts and utilities
│   ├── /lib/                   # Library for utility snippets
│   ├── /build.js               # Builds the project from source to output (build) folder
│   ├── /bundle.js              # Bundles the web resources into package(s) through Webpack
│   ├── /clean.js               # Cleans up the output (build) folder
│   ├── /config.js              # Webpack configuration for application bundles
│   ├── /copy.js                # Copies static files to output (build) folder
│   ├── /deploy.js              # Deploys your web application
│   ├── /serve.js               # Launches the Node.js/Express web server
│   └── /start.js               # Launches the development web server with "live reload"
│── package.json                # The list of 3rd party libraries and utilities
└── preprocessor.js             # ES6 transpiler settings for Jest
```

### Getting Started

Just clone the repo and start hacking:

```shell
$ git clone https://github.com/jhabdas/lumpenradio-com.git
$ cd lumpenradio-com
$ npm install                   # Install Node.js components listed in ./package.json
$ npm start                     # Compile and launch
```

### How to Build

```shell
$ npm run build                 # or, `npm run build -- --release`
```

By default, it builds in *debug* mode. If you need to build in release
mode, just add a `-- --release` flag. This will optimize the output bundle for
production.

### How to Run

```shell
$ npm start                     # or, `npm start -- --release`
```

This will start a light-weight development server with "live reload" and
synchronized browsing across multiple devices and browsers.

### How to Deploy

```shell
$ npm run deploy                # or, `npm run deploy -- --production`
```

For more information see `tools/deploy.js`.

### How to Update

You can always fetch and merge recent changes from this repo back into
your own project:

```shell
$ git checkout master
$ git fetch react-starter-kit
$ git merge react-starter-kit/master
$ npm install
```

### How to Test

Run unit tests powered by [Jest](https://facebook.github.io/jest/) with the following
[npm](https://www.npmjs.org/doc/misc/npm-scripts.html) command:

```shell
$ npm test
```

Test any javascript module by creating a `__tests__/` directory where
the file is. Append `-test.js` to the filename and [Jest](https://facebook.github.io/jest/) will do the rest.
