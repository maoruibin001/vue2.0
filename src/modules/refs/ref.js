/**
 * Created by lenovo on 2017/5/2.
 */
import template from './ref.tpl';
import Pro from '../components/extends/profile/profile';
import t2 from '../test2/sayHello';
import $ from 'jquery';
const Ref = {
    template,
    components: {
        t2
    },
    mounted() {
        let vm = new Pro();
        vm.$mount();
        document.getElementById('refId').appendChild(vm.$el);

        console.log(this.$isServer);
    },
    data() {
        return {
            sayData: {name: 'mao', age: '20'}
        }
    }
}
export default Ref;