
import { dirname } from "path"
import { fileURLToPath } from "url"
import { FlatCompat } from "@eslint/eslintrc"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript", "prettier"],
    rules: {
      "no-console": "error",
      semi: "off",
      "no-unused-vars": "error",
      "no-dupe-class-members": "off",
      "no-duplicate-imports": "error",
      "no-import-assign": "error",
      "no-unused-expressions": "error",
      "react/react-in-jsx-scope": "off",
      "react-hooks/exhaustive-deps": "warn",
      "react/jsx-curly-brace-presence": [
        "error",
        {
          children: "ignore",
          props: "always",
        },
      ],
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "react-native-unistyles",
              message: "Import from @/src/styles",
            },
          ],
        },
      ],
      "prefer-arrow-callback": "warn",
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        {
          prefer: "type-imports",
        },
      ],
      "@typescript-eslint/no-require-imports": "warn",
    },
    overrides: [
      {
        files: ["app/**/*.*"],
        rules: {
          "prefer-arrow/prefer-arrow-functions": "off",
        },
      },
    ],
  }),
]

export default eslintConfig
