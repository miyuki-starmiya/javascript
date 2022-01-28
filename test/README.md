
# about testing

- `unit test`: individual units or components are tested. a unit might be an individual function, method, procedure, module, or object. Units that have no dependencies are called `isolated units`. Units that have dependencies are called `sociable units`
- component test: test components individually
- shapshot test: make sure that the UI does note change unexpectedly


# JEST

Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
It works with projects uring [Babel, TypeScript, Node, React, Angular, Vue] and more!


## install

```shell
# npm
npm install --save-dev jest
# yarn
yarn add --dev jest
```

global install

```shell
# npm
npm install --global jest
# yarn
yarn global add jest
```

### using Babel

```shell
yarn add --dev babel-jest babel-core regenerator-runtime
```

## init(optional)

generate jest.config.js

```shell
jest --init
```

## run

we need writing in package.json then we can use "npm test" or "yarn test" on our terminal

```json
{
  "scripts": {
    "test": "jest"
  }
}
```

## create test file with Jest

we can create test file by [*.test.js or *.spec.js]
Jest inspects all [.js, .jsx, .ts, .tsx] files

## how to write test code

test block
- describe(description, callback): test suite
  - beforeEach(callback): run before each test unit
  - afterEach(callback): run after each test unit
  - it(description, callback): individual each test unit
    - expext(input): test function that test input as expected result

test one value
```js
// import module from other.js
const isInteger = require("./isInteger");
const data = [value, result]

// test(description, arrow func)
test("isInteger description", () => {
    expect(isInteger(data[0])).toBe(data[1]);
});
```

test multiple values
```js
const isInteger = require("./isInteger");
const data = [
  [value1, result1],
  [value2, result2],
  [value3, result3],
]

test.each(data)(
  "the unit description",
  (value, result) => expect(isInteger(value)).toBe(result)
)
```

### Jest Helpers

- Booleans:
  - toBeTruthy(): checks that a variable/statement is true
  - toBeFalsy(): checks that a variable/statement is false
- Defined:
  - toBeNull(): checks if a variable matches only null
  - toBeUndefined(): checks if a variable is not defined
  - toBeDefined(): check if a variable is defined
- Numbers:
  - toBeGreaterThan(): checks if a number is greater than the value specified
  - toBeGreaterThanOrEqual(): checks if a number is greater than or equal to the value specified
  - toBeLessThan(): checks if a number is less than the value specified
  - toBeLessThanOrEqual(): checks if a number is less than or equal to the value specified
  - toBe() and toEqual(): checks if a number is the same as the value specified (these functions are equivalent for numbers)
  - toBeCloseTo(): checks if a number is equal to the value specified within a small tolerance (useful for floating-point numbers)
- Strings:
  - toMatch(): checks if a string is equal to the value specified (Regex can be used as the value specified!)
- Arrays:
  - toContain(): checks if an array contains the specified value
- not: qualifier can be chained with most of these checks:

### runs tests every code changes

```shell
jest --watch
```

# ESLint

ESLint is a tool for identifying and reporting on patterns found in ECMAScript code, with the goal of making code more consistent and avoiding bugs

- ESLint uses Espree for JS parsing
- ESLint uses an AST to evaluate patterns in code
- ESLint is completely pluggable, every single rule is a plugin and you can add more at runtime

## install all dependencies

first you have to install eslint-cli module into global
```shell
npm i eslint-cli -g
```

- eslint: linting, error messages, etc
- babel-esling: ES6, flow types, etc
- eslint-config-prettier: special config for prettier so it will not interfere with other eslint formatting rules
- eslint-plugin-prettier: runs prettier as an eslint rule so wrong formatting is seen as an error
- eslint-plugin-nuxt: adds nuxt support to eslint
- prettier: to properly format code

```shell
# npm
npm install eslint babel-eslint eslint-config-prettier eslint-plugin-prettier eslint-loader prettier --save-dev
# yarn
yarn add eslint babel-eslint eslint-config-prettier eslint-plugin-prettier eslint-loader prettier --dev
# if you use nuxt
npm i eslint-plugin-nuxt @nuxtjs/eslint-config-typescript @nuxtjs/eslint-module -D
```

## Prettier

Prettier is an opinionated code formatter with support for:

- JavaScript (including experimental features)
- JSX
- Angular
- Vue
- Flow
- TypeScript
- CSS, Less, and SCSS
- HTML
- JSON
- GraphQL
- Markdown, including GFM and MDX
- YAML

### init

init project and generate .eslintrc.js

```shell
# npm
npm eslint --init
# yarn
yarn run eslint --init
```

### run ESLint

```shell
eslint "dir/" --ext .js,.ts,.vue
# run all
eslint */ --ext .js,.ts,.vue
```


