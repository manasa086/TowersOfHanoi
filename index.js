let bar = document.createElement('div');
bar.setAttribute("class", "div");
bar.setAttribute("id", "1");
document.body.appendChild(bar);
let bar1 = document.createElement('div');
bar1.setAttribute("class", "div1");
bar1.setAttribute("id", "2");
document.body.appendChild(bar1);
let bar2 = document.createElement('div');
bar2.setAttribute("class", "div2");
bar2.setAttribute("id", "3");
document.body.appendChild(bar2);
let hor_bar = document.createElement('div');
hor_bar.setAttribute("class", "hor_bar");
document.body.appendChild(hor_bar);

function myFunc(id) {
    document.getElementById(id).innerHTML = "";
    document.getElementById("2").innerHTML = "<button>1</button>"
}