/**
 * Created by lenovo on 2017/4/28.
 */
import Vue from 'vue';
import template from './life.tpl';
import mix from '../common/mixins/mix';
const vm = new Vue({
    created() {
    },
    beforeDestroy() {
        debugger;
    },
    destroyed() {
        debugger;
    }
});
const Life = {
    template,
    mixins: [mix],
    beforeCreate() {
        console.log('beforeCreate');
    },
    created() {
        console.log('created');
    },
    beforeMount() {
        console.log('beforeMount');
    },
    mounted() {
        console.log('mounted');
    },
    beforeUpdate() {
        console.log('beforeUpdate');
    },
    updated() {
        console.log('updated');
    },
    beforeDestroy() {
        debugger;
    },
    destroyed() {},
    data() {
        return {
            dataSet: {
                test1: 'i m test1, i m init value'
            },
            a: 2,
            c: vm,
            second: 5,
            tip: '',
            isDestroy: false,
            _a: 0,
            name: ''
        }
    },
    methods: {
        init() {
            this.dataSet = {
                test1: 'i m test1, i m init value'
            };
        },
        updateTest() {
            this.dataSet.test1 = 'i m also test1 , but i m changed'
        },
        updateA() {
            this.a = '';
            this.second = 5;
            this.isDestroy = true;
        },
        destoryView() {
            this.c = null;
        }
    },
    watch: {
        dataSet: {
            handler(before, val) {
                console.log('============i m watcher====');
                console.log(before.test1);
                console.log(val.test1);
            },
            deep: true

        },
        a(val, oldVal){
            this.tip = `a 队已经被销毁, {{this.second}}秒后将被重建...`;
            this._a = oldVal;
            const self = this;
            let t = this.second;
            for(let i = t - 1; i >= 0; i --) {
                setTimeout((function(i){
                    return function() {
                        self.second = i;
                        if (self.second === 0) {
                            self.isDestroy = false;
                            self.a = self._a;
                        }
                    }
                })(i), (t - i) * 1000)
            }

            console.log(val);
            console.log(oldVal);
        },
        c(val, oldVal) {
            console.log();
            debugger;
        }
    }
};
export default Life;