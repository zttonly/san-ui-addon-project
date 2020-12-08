/**
 * @file demo 注册
 */
{{#if_eq addonType "widget"}}
import widgetdemo from './components/widget-demo';
{{/if_eq}}
import locales from './locales.json';

if (window.ClientAddonApi) {
    // 扩展语言
    ClientAddonApi.addLocales(locales);
    {{#if_eq addonType "widget"}}
    // 推荐以类型前缀定义组件的唯一id：'san.widget'
    ClientAddonApi.defineComponent('san.{{addonType}}.components.widget-demo', widgetdemo);
    {{/if_eq}}
}
