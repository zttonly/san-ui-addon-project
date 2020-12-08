/**
 * @file san config
 * @author {{author}}
 */

const clientAddonConfig = require('san-cli-ui/san.addon.config');

module.exports = {
    ...clientAddonConfig({
        id: 'san.webpack.client-addon.widget.widget-demo',
        port: 8891
    })
};
