/**
 * @file 组件实现
 * @author {{author}}
 */

import './config-demo.less';

export default {
    template: /* html */`
        <div class="config-demo">
            <div>{{hello}}</div>
            <div>{{$t('{{name}}.welcome')}}</div>
        </div>
    `,
    initData() {
        return {
            hello: 'hello san ui config'
        };
    }
}
