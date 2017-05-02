/**
 * Created by lenovo on 2017/4/26.
 */
import tpl from './list.tpl';
const list = {
    template: tpl,
    created() {
        console.log('list created');
    },
    data() {
        return {
            lists: [{name: 'l1'}, {name: 'l2'}, {name: 'l3'}]
        }
    }
}
export default list;