// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
    "plugins": {
        "postcss-import": {},
        "postcss-url": {},
        // to edit target browsers: use "browserslist" field in package.json
        "autoprefixer": {},
        {{#closeCssModule}}
        "postcss-selector-namespace": {
            namespace() {
                // 注意此处需要与registerAddon定义的id对应（方式为将.替换为_）
                return '.{{name}}'
            }
        }
        {{/closeCssModule}}
    }
};

