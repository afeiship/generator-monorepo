# <%= project_name %>
> Photon components built with React.

## preview
- https://afeiship.github.io/<%= project_name %>/

## installation
```shell
npm i -S <%= scope %>/<%= project_name %>
```

## dynamic import
1. install `babel-plugin-import`

   ```shell
   npm i -D babel-plugin-import
   ```
2. `.babelrc`

  ```js
  {
    "presets": ["@babel/preset-env", "@babel/react"],
    "plugins": [
      // ....
      [ "import", { "libraryName": "<%= project_name %>", "libraryDirectory": "dist/lib" } ]
    ]
  }
  ```
