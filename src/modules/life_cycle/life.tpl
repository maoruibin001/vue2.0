<div>
    <h1 @click="updateTest()">this is a life_circle</h1>
    {{dataSet.test1}}
    <h2>a: {{a}}</h2>
    <div class="bg-success" v-show="isDestroy">a 队已经被销毁, {{this.second}}秒后将被重建...</div>

    <div>
        <h1>from mix name: {{name}}</h1>
    </div>
    <div>
        <button class="btn btn-default" @click="init">reset</button>
        <button class="btn btn-default" @click="updateA()">change a</button>
        <button class="btn btn-danger" @click="destoryView()">destory</button>
    </div>
</div>