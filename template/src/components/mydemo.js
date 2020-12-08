/**
 * @file 组件实现
 * @author {{author}}
 */

import './mydemo.less';

export default {
    template: /* html */`
        <div class="mydemo">
            <div>{{hello}}</div>
            <div>{{$t('san-cli-ui-widget-mydemo.welcome')}}</div>
        </div>
    `,
    initData() {
        return {
            hello: 'hello san ui'
        };
    }
}
