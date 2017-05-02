/**
 * Created by lenovo on 2017/4/26.
 */
import Profile from '../components/extends/profile/profile';
import tpl from './slot.tpl';
import $ from 'jquery';
const MySlot = {
    template: tpl,
    // props: ['sayData', 'value'],
    mounted() {
        this.vm = new Profile();
        this.vm.$mount();
        $('#hello').append(this.vm.$el);
    },
    data: function() {
        return {
            vm: null,
            selfData: {
                name: this.sayData.name
            }
        }
    },
    methods: {
        sayhello() {
            // alert('hello');
        },
        changeSayData() {
            this.selfData.name = 'child';
        },
        updateValue() {

        }
    }
}
export default MySlot;