module.exports ={
    "extends": "react-app",
    "parserOptions": {
        "ecmaVersion": 2016
    },
    "rules": {
        "array-bracket-spacing": ["error", "never"],
        "arrow-parens": ["error", "as-needed"],
        "brace-style": "error",
        "comma-dangle": ["error", "always-multiline"],
        "computed-property-spacing": ["error", "never"],
        "curly": "error",
        "eqeqeq": ["error", "always"],
        "func-call-spacing": ["error", "never"],
        "indent": ["error", "tab", {
            "SwitchCase": 1
        }],
        "keyword-spacing": ["error", {
            "after": true,
            "before": true
        }],
        "max-len": ["error", {
            "code": 100,
            "ignoreStrings": true,
            "ignoreTemplateLiterals": true,
            "ignoreUrls": true,
            "ignoreRegExpLiterals": true,
            "tabWidth": 2
        }],
        "no-extra-parens": "error",
        "object-curly-spacing": "error",
        "operator-linebreak": ["error", "before"],
        "quotes": ["error", "single"],
        "rest-spread-spacing": ["error", "never"],
        "semi": ["error"],
        "space-before-blocks": "error",
        "space-before-function-paren": ["error", "never"],
        "space-in-parens": ["error", "never"],
        "space-infix-ops": "error",
        "template-curly-spacing": ["error", "never"]
    }
}
