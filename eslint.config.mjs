import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
  {
    rules: {
      // Ensure imports remain at the top of the file (after directive prologues like 'use client')
      "no-restricted-syntax": [
        "error",
        {
          selector:
            "Program > :not(ImportDeclaration, ExpressionStatement[directive]) ~ ImportDeclaration",
          message:
            "Import declarations must be at the top of the file (after directives like 'use client').",
        },
      ],
      // Keep this strict to prevent regressions with apostrophes in JSX text
      "react/no-unescaped-entities": "error",
    },
  },
];

export default eslintConfig;
