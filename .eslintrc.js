module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "airbnb-base",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "quotes": [ "error", "single" ],
        "semi": [2, "never"],
        "no-use-before-define": "off",
        "no-underscore-dangle": "off",
        "no-shadow": "off"
    }
}
