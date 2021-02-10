/**
 * @file san config
 * @author {{author}}
 */

const clientAddonConfig = require('san-cli-ui/san.addon.config');

module.exports = {
    ...clientAddonConfig({
        id: 'san.webpack.client-addon.{{name}}',
        port: 8890
    }),
    {{#closeCssModule}}
    css: {
        sourceMap: false,
        cssPreprocessor: 'less',
        extract: false
    }
    {{/closeCssModule}}
};
