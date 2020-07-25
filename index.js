// let bar = document.createElement('div');
// bar.setAttribute("class", "div");
// bar.setAttribute("id", "1");
// document.body.appendChild(bar);
// let bar1 = document.createElement('div');
// bar1.setAttribute("class", "div1");
// bar1.setAttribute("id", "2");
// document.body.appendChild(bar1);
// let bar2 = document.createElement('div');
// bar2.setAttribute("class", "div2");
// bar2.setAttribute("id", "3");
// document.body.appendChild(bar2);
// let hor_bar = document.createElement('div');
// hor_bar.setAttribute("class", "hor_bar");
// document.body.appendChild(hor_bar);
// let flag = 2;
// let bar_ids = [1, 2, 3];
// let stack1 = [100, 110, 120];

// function myFunc(id, val) {

//     console.log(document.getElementById(id));



// }


var popped, public_id;
var i, j;
var stack1 = [
        [3, 2, 1],
        [120, 110, 100]
    ],
    stack2 = [
        [],
        [121, 111, 101]
    ],
    stack3 = [
        [],
        [122, 112, 102]
    ];
flag = 2;

function myFunc(id, val) {
    if (flag == 2) {
        if (id == 120 || id == 110 || id == 100) {
            public_id = id;
            len = stack1[0].length - 1;
            popped = stack1[0].pop();
            document.getElementById(stack1[1][len]).innerHTML = "<img src='dummy.png' class='table3'>";
        }
        if (id == 121 || id == 111 || id == 101) {
            public_id = id;
            len = stack2[0].length - 1;
            popped = stack2[0].pop();
            document.getElementById(stack2[1][len]).innerHTML = "<img src='dummy.png' class='table1'>";
        }
        if (id == 122 || id == 112 || id == 102) {
            public_id = id;
            len = stack3[0].length - 1;
            popped = stack3[0].pop();
            document.getElementById(stack3[1][len]).innerHTML = "<img src='dummy.png' class='table2'>";
        }
        flag -= 1;
    } else {
        if (id == 120 || id == 110 || id == 100) {
            if (stack1[0].length == 0) { stack1[0].push(popped); } else if (popped < stack1[0][stack1[0].length - 1]) {
                stack1[0].push(popped);
            } else if (popped > stack1[0][stack1[0].length - 1]) {
                recover(public_id, popped);
                alert("Wrong move");
            }
            for (i = 0; i < stack1[0].length; i++) {
                for (j = 0; j < stack1[0].length; j++) {
                    if (i == j) {
                        document.getElementById(stack1[1][i]).innerHTML = "<img src='" + stack1[0][i] + ".png'  class='table3'>";
                    }
                }
            }
        }
        if (id == 121 || id == 111 || id == 101) {
            if (stack2[0].length == 0) { stack2[0].push(popped); } else if (popped < stack2[0][stack2[0].length - 1]) {
                stack2[0].push(popped);
            } else if (popped > stack2[0][stack2[0].length - 1]) {
                recover(public_id, popped);
                alert("Wrong move");
            }
            for (i = 0; i < stack2[0].length; i++) {
                for (j = 0; j < stack2[0].length; j++) {
                    if (i == j) {
                        document.getElementById(stack2[1][i]).innerHTML = "<img src='" + stack2[0][i] + ".png' class='table1'>";
                    }
                }
            }
        }
        if (id == 122 || id == 112 || id == 102) {
            if (stack3[0].length == 0) { stack3[0].push(popped); } else if (popped < stack3[0][stack3[0].length - 1]) {
                stack3[0].push(popped);
            } else if (popped > stack3[0][stack3[0].length - 1]) {
                recover(public_id, popped);
                alert("Wrong move");
            }
            for (i = 0; i < stack3[0].length; i++) {
                for (j = 0; j < stack3[0].length; j++) {
                    if (i == j) {
                        document.getElementById(stack3[1][i]).innerHTML = "<img src='" + stack3[0][i] + ".png' class='table2'>";
                    }
                }
            }
        }
        flag = 2;
    }
    (function() {
        if (stack3[0].length == 3) {
            //document.getElementById(stack3[1][0]).innerHTML = "<img src='1.png' class='table2'>";
            alert("Completed");
            //console.log("Completed");
            //reset();
        }
    })();
}

function recover(public_id, popped) {
    if (public_id == 120 || public_id == 110 || public_id == 100) {
        stack1[0].push(popped);
        for (i = 0; i < stack1[0].length; i++) {
            for (j = 0; j < stack1[0].length; j++) {
                if (i == j) {
                    document.getElementById(stack1[1][i]).innerHTML = "<img src='" + stack1[0][i] + ".png' class='table3'>";
                }
            }
        }
    }
    if (public_id == 121 || public_id == 111 || public_id == 101) {
        stack2[0].push(popped);
        for (i = 0; i < stack2[0].length; i++) {
            for (j = 0; j < stack2[0].length; j++) {
                if (i == j) {
                    document.getElementById(stack2[1][i]).innerHTML = "<img src='" + stack2[0][i] + ".png' class='table1'>";
                }
            }
        }
    }
    if (public_id == 122 || public_id == 112 || public_id == 102) {
        stack3[0].push(popped);
        for (i = 0; i < stack3[0].length; i++) {
            for (j = 0; j < stack3[0].length; j++) {
                if (i == j) {
                    document.getElementById(stack3[1][i]).innerHTML = "<img src='" + stack3[0][i] + ".png' class='table2'>";
                }
            }
        }
    }
}

function reset() {
    stack1 = [
        [3, 2, 1],
        [120, 110, 100]
    ], stack2 = [
        [],
        [121, 111, 101]
    ], stack3 = [
        [],
        [122, 112, 102]
    ];
    for (i = 0; i < stack1[0].length; i++) {
        for (j = 0; j < stack1[0].length; j++) {
            if (i == j) {
                document.getElementById(stack1[1][i]).innerHTML = "<img src='" + stack1[0][i] + ".png' class='table3'>";
            }
        }
    }
    for (i = 0; i < 3; i++) {
        document.getElementById(stack2[1][i]).innerHTML = "<img src='dummy.png' class='table1'>";
        document.getElementById(stack3[1][i]).innerHTML = "<img src='dummy.png' class='table2'>";
    }
}