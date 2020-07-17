var requirement = document.getElementById("requirement")
var calculate = document.getElementById("calculate")

calculate.addEventListener("click", function () {    
    r = requirement.value
    strn = `
        <ul id="divCalculatedValue" style="display: block;">
    <li class="row">
        <div class="col-sm-4">
            <b>AAC Block</b>
        </div>
        <div class="col-sm-8">
            <label id="lblAacBlock">${(0.03*r-0.00465*r).toFixed(2)} (CBM)</label>
        </div>
    </li>
    <li class="row">
        <div class="col-sm-4">
            <b>Block Joining Mortar</b>
        </div>
        <div class="col-sm-8">
            <label id="lblBlockJoiningMortar">${0.02*r} (bags of 40 Kg)</label>
        </div>
    </li>
    <li class="row">
        <div class="col-sm-4">
            <b>Tile Adhesive</b>
        </div>
        <div class="col-sm-8">
            <label id="lblTileAdhesive">${0.02*r} (bags of 30 Kg)</label>
        </div>
    </li>
    <li class="row">
        <div class="col-sm-4">
            <b>Putty</b>
        </div>
        <div class="col-sm-8">
            <label id="lblPutty">${0.01*r} (bags of 40 Kg)</label>
        </div>
    </li>
    <li class="row">
        <div class="col-sm-4">
            <b>Cement</b>
        </div>
        <div class="col-sm-8">
            <label id="lblCement">${0.33*r} bags of Cement (50 Kg each)</label>
        </div>
    </li>
    <li class="row">
        <div class="col-sm-4">
            <b>Sand</b>
        </div>
        <div class="col-sm-8">
            <label id="lblSand">${1.17*r} CFT Sand</label>
        </div>
    </li>
    <li class="row">
        <div class="col-sm-4">
            <b>10 mm Aggregate</b>
        </div>
        <div class="col-sm-8">
            <label id="lbl10mmAggregate">${0.18*r} CFT Stone Aggregates (10 mm)</label>
        </div>
    </li>
    <li class="row">
        <div class="col-sm-4">
            <b>20 mm Aggregate</b>
        </div>
        <div class="col-sm-8">
            <label id="lbl20mmAggregate">${0.33*r} CFT Stone Aggregates (20 mm)</label>
        </div>
    </li>
    <li class="row">
        <div class="col-sm-4">
            <b>Steel</b>
        </div>
        <div class="col-sm-8">
            <label id="lblSteel">${0.80*r} Kg Reinforcement Steel</label>
        </div>
    </li>
</ul>
`
    var details = document.getElementById('details')
    details.innerHTML = strn;

    // document.getElementById("demo").innerHTML = "Hello" +  req*20 + "sqft"
})



// jsn = {
//     "AAC Block": 0.03,
//     "Block Joining Mortar": 0.02,
//     "Tile Adhesive": 0.02,
//     "Putty": 0.01,
//     "Cement": 0.33,
//     "Sand": 1.17,
//     "10 mm Aggregate": 0.18,
//     "20 mm Aggregate": 0.33,
//     "Steel": 0.80
// }