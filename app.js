const button = document.getElementById('btn')
const result = document.getElementById('result')


button.onclick = function results() {
    var price = document.getElementById('vPrice').value
    var res = Math.floor(price * .0057);
    result.innerHTML = `Tax Amount: $${res}`;
}