const button = document.getElementById('btn')
const result = document.getElementById('result')


button.onclick = function results() {
    let price = document.getElementById('vPrice').value
    let res = Math.floor(price * .0057);
    result.innerHTML = `Tax Amount: $${res}`;
}
