/**
 * @file san ui addon ui.js
 * @author {{author}}
 */

module.exports = api => {
    // 注册addon 区分生产环境和开发环境
    if (process.env.SAN_CLI_UI_DEV) { // 开发环境
        api.registerAddon({
            id: 'san.widgets.client-addon.dev1',
            url: 'http://localhost:8890/index.js' // 开发环境地址，也即本地服务地址
        });
    }
    else { // 生产环境
        api.registerAddon({
            id: 'san.widgets.mydemo.client-addon', // addon的唯一id，推荐增加类型前缀'san.widgets'
            path: 'san-cli-ui-widget-mydemo/dist' // 生产环境指向本插件包的编译产出地址
        });
    }
    // 接下来注册widget
    api.registerWidget({
        id: 'san.widgets.mydemo', // 命名不重复即可
        title: 'san-cli-ui-widget-mydemo.title', // locales定义的文案
        description: 'san-cli-ui-widget-mydemo.description',
        icon: 'file-image', // santd的icon类型
        component: 'san.widgets.components.mydemo', // 指定显示的组件id
        // 接下来具体组件的配置信息
        minWidth: 2,
        minHeight: 2,
        maxWidth: 2,
        maxHeight: 2,
        maxCount: 1
    });
}
