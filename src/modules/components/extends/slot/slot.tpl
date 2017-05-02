<div>
    <h1>Profile</h1>

    <div v-if="random > 0.7">
        you can see me ,i m if
    </div>
    <div v-else-if="random> 0.4 && random < 0.7">
        you can sese , i m else if
    </div>
    <span v-else>
        you also see me, im else
    </span>
    <div v-for="v,k in info">
        {{k}}: {{v}}
    </div>

    <div>{{1222.3367 | round(2)}}</div>

    <transition>
        <span :key="text" @click="changeText()">{{ text }}</span>
    </transition>

    <h1>{{msg}}</h1>
    <input type="text" v-focus>
    <div v-cust-style="{color: '#f00', fontSize: '40px'}">i m test div</div>

    <div>
        <h1>computed</h1>
        original: {{oriNum}}
        double: {{doubNum}}

        <input v-model="iptVal" v-focus  onkeyup="this.size=(this.value.length>8?this.value.length:8);" size="8">
        reverse: {{revVal}}
        <slot>只有在没有父组件内容时，我才会显示</slot>
    </div>
</div>