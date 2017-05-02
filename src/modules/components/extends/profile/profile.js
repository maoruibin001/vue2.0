/**
 * Created by lenovo on 2017/4/27.
 */
import Vue from 'vue';
import template from './profile.tpl';
const Profile = Vue.extend({
    template,
    // render(createElement) {
    //     return createElement('p', '2234234hellloworld');
    // },
    props: ['msg'],
    data() {
        return {
            info: {
                name: 'maoruibin',
                age: '20',
                sex: '男'
            },
            random: Math.random(),
            text: 'hello world',
            oriNum: 33,
            iptVal: '',
            myWidth: '500px'
        }
    },
    computed: {
        doubNum() {
            return 2 * this.oriNum;
        },
        revVal() {
            return this.iptVal.split('').reverse().join('');
        }
    },
    methods: {
        changeText() {
            this.text = Math.random() + 'text';
        }
    }
});
export default Profile;