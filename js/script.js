const valTabuada = document.getElementById("val-tabuada");
const tab = document.getElementById("selftab");
const form = document.querySelector("form");

function showRes(event) {
    event.preventDefault()
    let val = Number(valTabuada.value);
    let c = 1;
    tab.innerHTML = ''
    while (c <= 10) {
        let item = document.createElement("option");
        calc = val * c;
        item.text = `${val} x ${c} = ${calc}`;
        item.value = `tab${c}`;
        tab.appendChild(item);
        c++
    }
    valTabuada.value = '';
}

form.addEventListener("submit", showRes);