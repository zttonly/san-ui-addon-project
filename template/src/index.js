/**
 * @file mydemo 注册
 */

import mydemo from './components/mydemo';
import locales from './locales.json';

if (window.ClientAddonApi) {
    // 扩展语言
    ClientAddonApi.addLocales(locales);
    // 推荐以类型前缀定义组件的唯一id：'san.widgets'
    ClientAddonApi.defineComponent('san.widgets.components.mydemo', mydemo);
}