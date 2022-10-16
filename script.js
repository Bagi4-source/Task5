function get_price() {
    let price = parseFloat(document.getElementById('price').value);
    let volume = parseInt(document.getElementById('volume').value);
    let result = document.querySelector('div.result > span.result-text');
    if (price * volume) {
        result.textContent = (price * volume).toString();
    } else {
        result.textContent = '0';
    }
}

function validate_volume() {
    let volume = document.querySelector('input.volume');
    if (volume.value === '') {
        volume.value = '0';
    } else {
        volume.value = volume.value.replace(/0(.*)/, "$1");
    }
    volume.value = volume.value.replace(/\D/g, '');
}


function validate_price() {
    let price = document.querySelector('input.price');
    if (price.value === '') {
        price.value = '0';
    } else {
        price.value = price.value.replace(/0(.*)/, "$1");
    }
    price.value = price.value.replace(/[^\d.,]/g, '').replace(/,/g, '.').replace(/\.+/g, '.').replace(/(\d+\.*\d*).*/g, "$1");
}

function get_price_evo(){
    let volume = parseFloat(document.querySelector('input.volume').value);
    let price = parseFloat(document.querySelector('input.price').value);
    let result = document.querySelector('div.result-evo > span.result-text');
    result.textContent = (price * volume).toString();
}


function main() {
    document.querySelector('button#get-price').addEventListener('click', get_price);
    document.querySelector('button.get-price').addEventListener('click', get_price_evo);
    document.querySelector('input.price').addEventListener('input', validate_price);
    document.querySelector('input.volume').addEventListener('input', validate_volume);
}

window.addEventListener('DOMContentLoaded', main);