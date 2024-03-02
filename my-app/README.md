## How to config the linter

Install the linter:

```bash
npm install --save-dev babel-eslint eslint-config-standard eslint-config-standard-jsx eslint-config-standard-react eslint-plugin-promise  eslint-plugin-import eslint-plugin-node eslint-plugin-react
```

Then, config the package.json

```json
"eslintConfig": {
    "parser": "babel-eslint",
    "extends": [
      "standard",
      "standard-jsx",
      "standard-react"
    ]
  }
```
