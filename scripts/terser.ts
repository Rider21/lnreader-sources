const terser = require("terser");
import { readFile, writeFile } from "fs/promises";

const config = {
  compress: {
    arrows: false,
    booleans_as_integers: true,
  },
  mangle: {},
  ecma: 5, // specify one of: 5, 2015, 2016, etc.
  enclose: false, // or specify true, or "args:values"
  keep_classnames: false,
  keep_fnames: false,
  module: true,
  toplevel: true,
};

export const minify = async function (path: string) {
  const code = await readFile(path);
  const result = await terser.minify(code.toString(), config);
  await writeFile(path, result.code);
};
