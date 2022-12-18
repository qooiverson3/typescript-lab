### TypeScript Lab
---

Initial npm project
```bash
$ npm init -y
```

Install typescript
```bash
$ yarn add -D typescript
```

Setup the environment of Node.js and TypeScript

- `ts-node`: Node.js 的 TypeScript 執行環境和 REPL，且支援 source map

  - 不用手動執行 `tsc` 編譯 typescript 檔案，就能執行像是使用 `node` 指令那樣，直接透過 `ts-node` 指令來編譯並執行 typescript 檔案。

- `nodemon`:
- `@types/node`

Setup thee environment of Jest and TypeScript

- `jest`: JavaScript 測試框架
- `ts-jest`:
- `@types/jest`

Configure `package.json`

```json
{
  "scripts": {
    "start": "ts-node src/main.ts",
    "dev": "nodemon --watch 'src/**/*.ts' --exec ts-node src/main.ts",
    "build": "tsc",
    "test": "jest --coverage"
  }
}
```

Configure `jest.config.js`
```bash
$ npx ts-jest config:init
```
`jest.config.js`
```javascript
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
};
```

Ref:
- https://titangene.github.io/article/jest-typescript.html