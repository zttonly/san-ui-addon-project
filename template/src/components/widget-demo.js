/**
 * @file 组件实现
 * @author {{author}}
 */

import styles from './widget-demo.less';
// 默认启用css module，使用方式：styles.xxx
export default {
    template: /* html */`
        <div class="\{{styles.widgetDemo}}">
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
}
