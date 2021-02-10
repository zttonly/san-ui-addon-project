/**
 * @file 组件实现
 * @author {{author}}
 */
{{#if closeCssModule}}
import './widget-demo.less';
{{else}}
import styles from './widget-demo.less';
{{/if}}
// 默认启用css module，使用方式：styles.xxx
export default {
    template: /* html */`
        {{#if closeCssModule}}
        <div class="widget-demo">
        {{else}}
        <div class="\{{styles.widgetDemo}}">
        {{/if}}
            <div>\{{hello}}</div>
            <div>\{{$t('{{name}}.welcome')}}</div>
        </div>
    `,
    initData() {
        return {
            styles,
            hello: 'hello san ui widget'
        };
    }
};
