/**
 * Created by lenovo on 2017/4/27.
 */
import Vue from 'vue';
// 自定义颜色指令
Vue.directive('custStyle', function(el, binding) {
    el.style.color = binding.value.color ? binding.value.color : el.style.color;
    el.style.fontSize = binding.value.fontSize ? binding.value.fontSize : el.style.fontSize;
})

Vue.directive('focus', {
    // 当绑定元素插入到 DOM 中。
    inserted(el) {
        // 聚焦元素
        setTimeout(() => {el.focus()})
    },
    update(el) {
        el.focus();
    }
})