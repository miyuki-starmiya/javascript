
# Vue.js

Vue is a progressive `JavaScript framework for building UI`. Unlike monolithic frameworks, the core library is focused on the `view layer only`.

this enable you to develop web app integrated by using single file component. Vue tend to be adopted no less than Japanese company and for enterprise.
I recommend you to use Vue v.2 because v.3 ecosystem isn't enough at Nov 2021

## install

CDN
```html
<!-- development version, includes helpful console warnings -->
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<!-- production version, optimized for size and speed -->
<script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
```

CLI
```shell
# npm
npm install -g @vue/cli
# yarn
yarn global add @vue/cli

# upgrade
npm update -g @vue/cli
yarn global upgrade @vue/cli
```

# API

## global

### Vue.use

## export data

vue file return below object keys

- name: 
- data: this value is a function which return store data object which you want to render
- props: this value is received props object by parent component
- computed: 
- methods: this value is method objects

## DOM

### render

## Life Cycle Hooks

- created: 
- mounted: 
- updated: 
- destroyed: 

## directives

you can use vue-directive in <template />. you should surround them with "". for example, <li v-for="todo in todos" v-bind:key="id" />

- v-if: <v-if="" />, <v-else-if="" />, <v-else />
- v-for: array loop. this require `"v-bind:key=id"`
- v-bind: this brings a JS value. <v-bind:value="">. shorthand syntax is `:value`
- v-on: event handler. <v-on:event="someMethod">. shorthand syntax is `@event`
- v-model: this enables two-way bind. <v-model="variable"> {{ variable }}. v-model = v-bind + v-on

below is same way

```html
<input v-model="something">

<input
    v-bind:value="something"
    v-on:input="something = $event.target.value"
>
```


# Vue Router
# Vuex

# Nuxt.js

This is Vue Framework

- Nuxt.js = Vue.js(v2) + vue-router + Vuex + SSR(node)
- you need to append module and plugin to `nuxt.config.js` every installation

## Get started




## tags

- NuxtLink: like <a />
    - to: href attribute
- main: like <div />. use as child element of <template />
- Nuxt: render components in pages/ by layouts/default.vue

## directory structure

- pages/: routes automatically
- components/: be run files automatically
- assets/: css, img, font which has been compiled
- static/: like public/. this files are never compiled and located as raw
- layouts/: default.vue = App.vue + <header /> + <nav /> + <footer>
- store/: activate Vuex in index.js
- nuxt.config.js: config file in nuxt app. you can config plugin, <head />


## property


## glossary

- context: access object to Nuxt contents developed for API
- helper: access to variable in server side via $nuxt
- SSR: server side rendering by using node in Nuxt SSR mode
- SPA: this doesn't require node. browser render <NuxtLink /> only once, after static hosting server render files
- lifecycle: load plugin -> serverInit(Vuex, context) -> middleware -> created() -> fetch() -> mounted()

## .env

1. install @nuxtjs/dotenv package
2. add @nuxtjs/dotenv to buildModules in nuxt.config.js
3. you can refer to process.env.VAR


