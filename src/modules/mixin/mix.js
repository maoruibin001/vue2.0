/**
 * Created by lenovo on 2017/4/28.
 */
import template from './mix.tpl';
import mix from '../common/mixins/mix';
const Mix = {
    template,
    created() {
        console.log('hello mix')
    },
    mixins: [mix],
    data() {
        return {
            name: ''

        }
    },
    name: 'hello'
}
export default Mix;
