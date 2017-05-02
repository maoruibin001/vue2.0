/**
 * Created by lenovo on 2017/4/26.
 */
import Vue from 'vue';
import tpl from './sayhello.tpl';
import Say2 from '../test2/sayHello';
// import MySlot from '../slot/slot';
const d1 = {
    template: tpl,
    components: {
        Say2
    },
    created(){
        console.log(2222);
    },
    data() {
        return {
            sayData: {
                name: 'maoruibin222'
            },
            price: ''
        }
    },
    methods: {
        sayhello() {
            this.sayData.name = '333';
        }
    },
    name: 'test1'
}
export default d1;