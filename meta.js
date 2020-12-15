module.exports = {
    complete(data, {chalk, logger}) {
        console.log(
            logger.boxen(
                `        San CLI UI

Start with ${chalk.bold('yarn/npm start')}`,
                {padding: 1, borderStyle: 'round'}
            )
        );
    },
    helpers: {
        /* eslint-disable fecs-camelcase */
        if_or: (v1, v2, options) => {
            /* eslint-enable fecs-camelcase */
            if (v1 || v2) {
                return options.fn(this);
            }

            return options.inverse(this);
        }
    },
    filters: {
        '_eslintrc.js': '!lint',
        'src/components/widget-demo.js': 'addonType ==="widget"',
        'src/components/widget-demo.less': 'addonType ==="widget"',
        'src/components/config-demo.js': 'addonType ==="config"',
        'src/components/config-demo.less': 'addonType ==="config"'
    },
    prompts: {
        name: {
            type: 'string',
            required: true,
            label: '项目名称',
            default: '{{name}}'
        },
        description: {
            type: 'string',
            required: true,
            label: '项目描述',
            default: 'A San ui addon project'
        },
        author: {
            type: 'string',
            label: '作者',
            default: '{{author}}'
        },
        addonType: {
            type: 'list',
            message: '选择创建的组件类型',
            choices: [
                {
                    name: 'widget-仪表盘部件',
                    value: 'widget',
                    short: 'widget'
                },
                {
                    name: 'config-配置',
                    value: 'config',
                    short: 'config'
                }
                // {
                //     name: 'task-任务',
                //     value: 'task',
                //     short: 'task'
                // },
                // {
                //     name: 'view-自定义视图',
                //     value: 'view',
                //     short: 'view'
                // }
            ]
        },
        lint: {
            type: 'confirm',
            message: '是否安装 ESLint？'
        },
        lintConfig: {
            when: 'lint',
            type: 'list',
            message: '选择 ESLint 配置',
            choices: [
                {
                    name: '@ecomfe/eslint-config (https://github.com/ecomfe/eslint-config)',
                    value: 'ecomfe',
                    short: 'ecomfe'
                },
                {
                    name: 'Standard (https://github.com/standard/standard)',
                    value: 'standard',
                    short: 'Standard'
                },
                {
                    name: 'Airbnb (https://github.com/airbnb/javascript)',
                    value: 'airbnb',
                    short: 'Airbnb'
                }
            ]
        },
        lintHook: {
            when: 'lint',
            type: 'confirm',
            message: '是否安装ESLint的 lint-staged？'
        }
    }
};
