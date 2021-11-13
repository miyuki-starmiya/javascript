
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

test one value

```js: isInteger.test.js
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

### runs tests for new change

```shell
jest --watch
```

# ESLint

ESLint is a tool for identifying and reporting on patterns found in ECMAScript code, with the goal of making code more consistent and avoiding bugs

- ESLint uses Espree for JS parsing
- ESLint uses an AST to evaluate patterns in code
- ESLint is completely pluggable, every single rule is a plugin and you can add more at runtime

## install

```shell
# npm
npm install eslint --save-dev
# yarn
yarn add eslint --dev
```

## init

init project and generate .eslintrc.js

```shell
# npm
npm eslint --init
# yarn
yarn run eslint --init
```

