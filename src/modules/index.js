/**
 * Created by lenovo on 2017/4/26.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import d1 from './test1/sayHello';
import d2 from './test2/sayHello';
import list from './list/list';
import life from './life_cycle/life';
import mix from './mixin/mix';
import ref from './refs/ref';

// 导入指令和过滤器
import cusDirect from './common/directive/custDirect';
import aa from './common/filter/custFilter';
// 使用路由
Vue.use(VueRouter);

// 路由列表
const routes = [
    { path: '/', name : 'd1', component: d1, params : {ctx : null} },
    // { path: '/d2', name : 'd2', component: d2, params : {ctx : null} },
    { path: '/life', name : 'life', component: life, params : {ctx : null} },
    { path: '/list', name : 'list', component: list, params : {ctx : null} },
    { path: '/ref', name : 'ref', component: ref, params : {ctx : null} },

    { path: '/mix', name : 'mix', component: mix, params : {ctx : null} },

];
Vue.config.errorHandler = function (err, d2) {
    // handle error
    console.log('next');
    console.log(err);
}
// 定义路由
const router = new VueRouter({
    routes
});


// 声明VUE实例
const app = new Vue({
    router
}).$mount('#app');