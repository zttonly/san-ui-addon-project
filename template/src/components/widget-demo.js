/**
 * @file 组件实现
 * @author {{author}}
 */

import './widget-demo.less';

export default {
    template: /* html */`
        <div class="widget-demo">
            <div>\{\{hello}}</div>
            <div>\{\{$t('{{name}}.welcome')}}</div>
        </div>
    `,
    initData() {
        return {
            hello: 'hello san ui widget'
        };
    }
}
