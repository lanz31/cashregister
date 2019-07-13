function isNotNumber(input) {
    if (isNaN(input)) {
        return true;
    }
}

function isInputEmpty(input) {
    if (input == "") {
        return true;
    }
}

function getTotal() {
    let price = Number(document.getElementById('price').value);
    let qty = Number(document.getElementById('quantity').value);

    if (isNotNumber(price) || isNotNumber(qty)) {
        alert("Invalid input");
    }
    else if (isInputEmpty(price) || isInputEmpty(qty)) {
        alert("Fields must not be empty.");
    }
    else {
        let total = price * qty;
        document.getElementById('total').innerText = total;
    }
}

function save() {
    let inputCash = Number(document.getElementById('inpcash').value);
    let total = Number(document.getElementById('total').innerText);

    if (isNotNumber(inputCash) || isNotNumber(total)) {
        alert("Must input numbers.");
    }
    else {
        if (inputCash < total) {
            alert("Insufficient cash");
        }
        else {
            let change = inputCash - total;
    
            document.getElementById('sumProd').innerText = document.getElementById('product').value;
            document.getElementById('sumPrice').innerText = document.getElementById('price').value;
            document.getElementById('sumQty').innerText = document.getElementById('quantity').value;
            document.getElementById('sumTotal').innerText = total;
            document.getElementById('sumCash').innerText = document.getElementById('inpcash').value;
            document.getElementById('sumChange').innerText = change;
        }
    }
}