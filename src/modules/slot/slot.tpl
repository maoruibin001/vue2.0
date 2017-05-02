<div id="hello">
    <h1 @click="sayhello()">say hello2</h1>
    <h2 @click="changeSayData()">this is selfData: {{selfData.name}}</h2>
    <input type="text" :value="value" @input="updateValue()">
</div>