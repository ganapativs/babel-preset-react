# Base babel config for react setup

Automagically add `Babel` support to `react` setup by adding this package.

## Install

```sh
yarn add @ganapativs/babel-preset-react --dev
```

## Extend babel config

```sh
# create `.babelrc` in root folder of the service
# .babelrc
{
    "presets": [
        "@ganapativs/babel-preset-react"
    ]
}

# Or require in babel.config.js
module.exports = function config(api) {
    api.cache(true);

    return {
        presets: [
            "@ganapativs/babel-preset-react"
        ],
    }
}

# alternatively,
# use require.resolve('@ganapativs/babel-preset-react') in
# babel loader options in build tool config(eg: webpack config)
```

## Publish

```sh
# Scoped packages are private by default
npm publish --access public
```
