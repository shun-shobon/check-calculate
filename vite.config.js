import { minifyHtml } from "vite-plugin-html";
import plainText from "vite-plugin-plain-text";

export default {
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  plugins: [minifyHtml(), plainText(/\.txt$/)],
};
