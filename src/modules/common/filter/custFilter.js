/**
 * Created by lenovo on 2017/4/27.
 */
import Vue from 'vue';
Vue.filter('round', function(val, lefts) {
    let ret = parseFloat(val),
    left = lefts === '' ? 2 : lefts;
    return Math.round(ret * Math.pow(10, left))/Math.pow(10, left);
})