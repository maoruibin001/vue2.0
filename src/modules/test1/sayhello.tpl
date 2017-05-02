<div>
    <h1 @click="sayhello()">say hello1</h1>
    parent sayData is: {{sayData.name}}
    <Say2 :sayData="sayData" v-model="price">
        <h1>222222222内容有了压 </h1>
    </Say2>
    <!--<MySlot></MySlot>-->
    this price is : {{price}}
</div>