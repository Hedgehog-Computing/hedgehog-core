console.log("Hello");


import { executeOutput } from './runtime';
import transpile from './transpiler/transpiler-core';

export * from './output/output-item';

export { executeOutput, transpile };
console.log("done!");
