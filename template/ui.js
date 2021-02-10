/**
 * @file san ui addon ui.js
 * @author {{author}}
 */

module.exports = api => {
    // 注册addon 区分生产环境和开发环境
    if (process.env.SAN_CLI_UI_DEV) { // 开发环境
        api.registerAddon({
            id: 'san.{{addonType}}.{{name}}.dev',
            url: 'http://localhost:8890/index.js' // 开发环境地址，也即本地服务地址
        });
    }
    else { // 生产环境
        api.registerAddon({
            id: 'san.{{addonType}}.{{name}}', // addon的唯一id，推荐增加类型前缀'san.widgets'
            path: '{{name}}/dist' // 生产环境指向本插件包的编译产出地址
        });
    }
    {{#if_eq addonType "widget"}}
    
    // 接下来注册widget
    api.registerWidget({
        id: 'san.widget.widget-demo', // 命名不重复即可
        title: '{{name}}.title', // locales定义的文案
        description: '{{name}}.description',
        icon: 'smile', // santd的icon类型
        component: 'san.widget.components.widget-demo', // 指定显示的组件id, 值对应src/index.js注册的组件名
        // 接下来具体组件的配置信息
        minWidth: 2,
        minHeight: 2,
        maxWidth: 2,
        maxHeight: 2,
        maxCount: 1
    });
    {{/if_eq}}
    
    {{#if_eq addonType "config"}}
    // 以san.config.js的配置为例
    api.registerConfig({
        id: 'san.san-cli',
        name: 'San CLI',
        description: '{{name}}.description',
        link: 'https://ecomfe.github.io/san-cli/#/config',
        files: {
            san: {
                js: ['san.config.js']
            }
        },
        icon: iconUrl,
        onRead: ({data}) => ({
            prompts: [
                {
                    name: 'publicPath',
                    type: 'input',
                    default: '/',
                    value: data.san && data.san.publicPath,
                    message: '{{name}}.san-cli.publicPath.label',
                    description: '{{name}}.san-cli.publicPath.description',
                    group: '{{name}}.san-cli.groups.general',
                    link: 'https://ecomfe.github.io/san-cli/#/config'
                },
                {
                    name: 'outputDir',
                    type: 'input',
                    default: 'dist',
                    value: data.san && data.san.outputDir,
                    validate: input => !!input,
                    message: '{{name}}.san-cli.outputDir.label',
                    description: '{{name}}.san-cli.outputDir.description',
                    group: '{{name}}.san-cli.groups.general',
                    link: 'https://ecomfe.github.io/san-cli/#/config'
                },
                {
                    name: 'assetsDir',
                    type: 'input',
                    default: '',
                    value: data.san && data.san.assetsDir,
                    message: '{{name}}.san-cli.assetsDir.label',
                    description: '{{name}}.san-cli.assetsDir.description',
                    group: '{{name}}.san-cli.groups.general',
                    link: 'https://ecomfe.github.io/san-cli/#/config'
                },
                {
                    name: 'pages',
                    type: 'input',
                    default: {},
                    value: data.san && data.san.pages,
                    message: '{{name}}.san-cli.pages.label',
                    description: '{{name}}.san-cli.pages.description',
                    group: '{{name}}.san-cli.groups.general',
                    link: 'https://ecomfe.github.io/san-cli/#/config'
                },
                {
                    name: 'copy',
                    type: 'input',
                    default: {},
                    value: data.san && data.san.copy,
                    message: '{{name}}.san-cli.copy.label',
                    description: '{{name}}.san-cli.copy.description',
                    group: '{{name}}.san-cli.groups.general',
                    link: 'https://ecomfe.github.io/san-cli/#/config'
                },
                {
                    name: 'sourceMap',
                    type: 'confirm',
                    default: true,
                    value: data.san && data.san.sourceMap,
                    message: '{{name}}.san-cli.sourceMap.label',
                    description: '{{name}}.san-cli.sourceMap.description',
                    group: '{{name}}.san-cli.groups.general',
                    link: 'https://ecomfe.github.io/san-cli/#/config'
                },
                {
                    name: 'filenameHashing',
                    type: 'confirm',
                    default: true,
                    value: data.san && data.san.filenameHashing,
                    message: '{{name}}.san-cli.filenameHashing.label',
                    description: '{{name}}.san-cli.filenameHashing.description',
                    group: '{{name}}.san-cli.groups.general',
                    link: 'https://ecomfe.github.io/san-cli/#/config'
                },
                {
                    name: 'largeAssetSize',
                    type: 'input',
                    default: 4e3,
                    value: data.san && data.san.largeAssetSize,
                    message: '{{name}}.san-cli.largeAssetSize.label',
                    description: '{{name}}.san-cli.largeAssetSize.description',
                    group: '{{name}}.san-cli.groups.general',
                    link: 'https://ecomfe.github.io/san-cli/#/config'
                },
                {
                    name: 'css.sourceMap',
                    type: 'confirm',
                    default: true,
                    value: data.san && data.san.css && data.san.css.sourceMap,
                    message: '{{name}}.san-cli.css.sourceMap.label',
                    description: '{{name}}.san-cli.css.sourceMap.description',
                    group: '{{name}}.san-cli.groups.general',
                    link: 'https://ecomfe.github.io/san-cli/#/config'
                },
                {
                    name: 'css.cssPreprocessor',
                    type: 'input',
                    default: 'less',
                    value: data.san && data.san.css && data.san.css.cssPreprocessor,
                    message: '{{name}}.san-cli.css.cssPreprocessor.label',
                    description: '{{name}}.san-cli.css.cssPreprocessor.description',
                    group: '{{name}}.san-cli.groups.general',
                    link: 'https://ecomfe.github.io/san-cli/#/config'
                },
                {
                    name: 'css.extract',
                    type: 'confirm',
                    default: true,
                    value: data.san && data.san.css && data.san.css.extract,
                    message: '{{name}}.san-cli.css.extract.label',
                    description: '{{name}}.san-cli.css.extract.description',
                    group: '{{name}}.san-cli.groups.css',
                    link: 'https://ecomfe.github.io/san-cli/#/config'
                },
                {
                    name: 'css.requireModuleExtension',
                    type: 'confirm',
                    default: true,
                    value: data.san && data.san.css && data.san.css.requireModuleExtension,
                    message: '{{name}}.san-cli.css.requireModuleExtension.label',
                    description: '{{name}}.san-cli.css.requireModuleExtension.description',
                    group: '{{name}}.san-cli.groups.css',
                    link: 'https://ecomfe.github.io/san-cli/#/config'
                }
            ]
        }),
        onWrite: async ({api, prompts}) => {
            const sanData = {};
            for (const prompt of prompts) {
                sanData[prompt.id] = await api.getAnswer(prompt.id);
            }
            api.setData('san', sanData);
        }
    });
    {{/if_eq}}
};
