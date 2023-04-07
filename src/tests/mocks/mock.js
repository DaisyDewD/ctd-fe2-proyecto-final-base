const path = require("path");
//Aquí se puede hacer un mock de los archivos que se importen en los tests
/**
 * TypeScript with type checking
 * https://jestjs.io/docs/code-transformation#typescript-with-type-checking
 */
module.exports = {
  process(sourceText, sourcePath, options) {
    return {
      code: `module.exports = ${JSON.stringify(path.basename(sourcePath))};`,
    };
  },
};
