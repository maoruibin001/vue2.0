<div class="container">
    <div class="row-fluid">
        <div class="col-sm-12">
            Fluid 12
            <div class="row-fluid">
                <div class="col-sm-6">
                    Fluid 6
                    <div class="row-fluid">

                        <div class="col-sm-6 bg-info">
                            <button class="btn btn-danger">button</button>
                            Fluid 6</div>
                        <div class="col-sm-6 bg-danger">Fluid 6</div>
                    </div>
                </div>
                <div class="col-sm-6">Fluid 6</div>
            </div>
        </div>
    </div>
    <ul>
        <li v-for="item in lists">
            {{item.name}}
        </li>
    </ul>
</div>