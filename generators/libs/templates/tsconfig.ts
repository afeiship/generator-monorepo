{
  "extends": "./tsconfig.base.json",
    "compilerOptions": {
    "baseUrl": ".",
      "paths": {
      "lib": ["packages/src"],
        "site": ["site/src"]
    },
    "noEmit": true
  }
}