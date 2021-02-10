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
    // 推荐以类型前缀定义组件的唯一id：'san.widget',修改id时请同步修改.postcssrc.js的namespace，并将.替换为_
    {{#if closeCssModule}}
    // 第三个参数保持与.postcssrc.js中namespace返回对应
    ClientAddonApi.defineComponent('san.widget.components.widget-demo', widgetdemo, '{{name}}');
    {{else}}
    ClientAddonApi.defineComponent('san.widget.components.widget-demo', widgetdemo);
    {{/if}}

    {{/if_eq}}
}
