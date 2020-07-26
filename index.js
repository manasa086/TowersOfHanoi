let main_division = document.createElement('div');
main_division.setAttribute('class', 'main_division');
document.body.appendChild(main_division);
let image = document.createElement('img');
image.setAttribute('src', 'back.png');
image.setAttribute('class', 'back1');
main_division.appendChild(image);
let select = document.createElement("select");
select.setAttribute("class", "select-css");
select.setAttribute("id", "select");
let opt = document.createElement('option');
opt.setAttribute("value", "0")
var tt = document.createTextNode("Default");
opt.appendChild(tt);
select.appendChild(opt);
let option1 = document.createElement("option");
option1.setAttribute("value", "1");
var t = document.createTextNode("Easy");
option1.appendChild(t);
select.appendChild(option1);
let option2 = document.createElement("option");
option2.setAttribute("value", "2");
var t2 = document.createTextNode("Medium");
option2.appendChild(t2);
select.appendChild(option2);
let option3 = document.createElement("option");
option3.setAttribute("value", "3");
var t3 = document.createTextNode("Hard");
option3.appendChild(t3);
select.appendChild(option3);
var value = "";
select.addEventListener('change', function() {
    value = this.value;
});
main_division.appendChild(select);
let start = document.createElement('button');
start.setAttribute('class', 'start');
start.innerHTML = 'Start';
start.addEventListener('click', function() {
    display(value);
});
main_division.appendChild(start);

function display(value) {
    if (value != "") {

        var timeleft = document.createElement('span');
        timeleft.innerHTML = "Time Left:";
        timeleft.setAttribute("id", "timeleft");
        main_division.appendChild(timeleft);
        var timer = document.createElement('span');
        timer.setAttribute("id", "timer");
        main_division.appendChild(timer);
        document.getElementById('timer').innerHTML = 001 + ":" + 01;
        startTimer();

        function startTimer() {
            let success = false;
            if (timer.innerHTML != "") {
                var presentTime = document.getElementById('timer').innerHTML;
                var timeArray = presentTime.split(/[:]+/);

                var m = timeArray[0];
                var s = checkSecond((timeArray[1] - 1));
                if (s == 59) { m = m - 1 }
                //if(m<0){alert('timer completed')}
                if (m < 0) {
                    clearTimeout();
                    main_division.innerHTML = "";
                    let image = document.createElement('img');
                    image.setAttribute('src', 'back.png');
                    image.setAttribute('class', 'back1');
                    main_division.appendChild(image);
                    let para = document.createElement('p');
                    para.innerHTML = "Time Limit Exceeded";
                    para.setAttribute('class', 'para');
                    main_division.appendChild(para);

                    var button = document.createElement('button');
                    button.setAttribute('class', 'but');
                    button.innerHTML = 'restart';
                    button.addEventListener('click', function() {
                        reloading();
                    });
                    main_division.appendChild(button);

                } else if (m == 1) {
                    if (value == 1) {
                        success = Easy(timer, timeleft);
                    } else if (value == 2) {
                        Medium(timer, timeleft);
                    } else if (value == 3) {
                        Hard(timer, timeleft);
                    }
                }
                if (!success) {
                    document.getElementById('timer').innerHTML = m + ":" + s;
                    setTimeout(startTimer, 1000);
                }

            }

            function checkSecond(sec) {
                if (sec < 10 && sec >= 0) { sec = "0" + sec }; // add zero in front of numbers < 10
                if (sec < 0) { sec = "59" };
                return sec;
            }
        }
    }
}


function Easy(timer, timeleft) {


    let main_img = document.createElement('img');
    main_img.setAttribute('src', 'background.jpg');
    main_img.setAttribute('class', 'main');
    main_division.appendChild(main_img);
    let table = document.createElement('table');
    table.setAttribute('class', 'table');
    let tbody = document.createElement('tbody');
    let row = document.createElement('tr');
    let th = document.createElement('th');
    th.setAttribute("id", "100");
    th.addEventListener('click', function myFunc() {
        // console.log(this.id);
        towersOfHanoi(this.id);
    });
    let img = document.createElement('img');
    img.setAttribute('src', '1.png');
    th.appendChild(img);
    row.appendChild(th);
    let th1 = document.createElement('th');
    th1.setAttribute("id", "101");
    th1.addEventListener('click', function myFunc() {
        // console.log(this.id);
        towersOfHanoi(this.id);
    });
    let img1 = document.createElement('img');
    img1.setAttribute('src', 'dummy.png');
    th1.appendChild(img1);
    row.appendChild(th1);
    let th2 = document.createElement('th');
    th2.setAttribute("id", "102");
    th2.addEventListener('click', function myFunc() {
        // console.log(this.id);
        towersOfHanoi(this.id);
    });
    let img2 = document.createElement('img');
    img2.setAttribute('src', 'dummy.png');
    th2.appendChild(img2);
    row.appendChild(th2);
    table.appendChild(row);
    let row1 = document.createElement('tr');
    let th3 = document.createElement('th');
    th3.setAttribute("id", "110");
    th3.addEventListener('click', function myFunc() {
        // console.log(this.id);
        towersOfHanoi(this.id);
    });
    let img5 = document.createElement('img');
    img5.setAttribute('src', '2.png');
    th3.appendChild(img5);
    row1.appendChild(th3);
    let th11 = document.createElement('th');
    th11.setAttribute("id", "111");
    th11.addEventListener('click', function myFunc() {
        // console.log(this.id);
        towersOfHanoi(this.id);
    });
    let img51 = document.createElement('img');
    img51.setAttribute('src', 'dummy.png');
    th11.appendChild(img51);
    row1.appendChild(th11);
    let th12 = document.createElement('th');
    th12.setAttribute("id", "112");
    th12.addEventListener('click', function myFunc() {
        // console.log(this.id);
        towersOfHanoi(this.id);
    });
    let img52 = document.createElement('img');
    img52.setAttribute('src', 'dummy.png');
    th12.appendChild(img52);
    row1.appendChild(th12);
    table.appendChild(row1);
    let row2 = document.createElement('tr');
    let th13 = document.createElement('th');
    th13.setAttribute("id", "120");
    th13.addEventListener('click', function() {
        // console.log(th13is.id);
        towersOfHanoi(this.id);
    });
    let img21 = document.createElement('img');
    img21.setAttribute('src', '3.png');
    th13.appendChild(img21);
    row2.appendChild(th13);
    let th131 = document.createElement('th');
    th131.setAttribute("id", "121");
    th131.addEventListener('click', function() {
        // console.log(th13is.id);
        towersOfHanoi(this.id);
    });
    let img211 = document.createElement('img');
    img211.setAttribute('src', 'dummy.png');
    th131.appendChild(img211);
    row2.appendChild(th131);
    let th132 = document.createElement('th');
    th132.setAttribute("id", "122");
    th132.addEventListener('click', function() {
        // console.log(th13is.id);
        towersOfHanoi(this.id);
    });
    let img212 = document.createElement('img');
    img212.setAttribute('src', 'dummy.png');
    th132.appendChild(img212);
    row2.appendChild(th132);
    table.appendChild(row2);
    main_division.appendChild(table);
    document.body.appendChild(main_division);
    var poppedElement, poppedElement_id;
    var i, j;
    var source = [
            [3, 2, 1],
            [120, 110, 100]
        ],
        auxiliary = [
            [],
            [121, 111, 101]
        ],
        destination = [
            [],
            [122, 112, 102]
        ];
    flag = 2;
    var click = 0;

    function towersOfHanoi(id) {
        if (flag == 2) { //Pop the elements from the source/auxiliary/destination and replacing Using the dummy Image  by Using Flag
            if (id == 120 || id == 110 || id == 100) {
                click++;

                poppedElement_id = id;
                len = source[0].length - 1;
                poppedElement = source[0].pop();
                document.getElementById(source[1][len]).innerHTML = "<img src='dummy.png' class='table3'>";
            }
            if (id == 121 || id == 111 || id == 101) {
                click++;
                poppedElement_id = id;
                len = auxiliary[0].length - 1;
                poppedElement = auxiliary[0].pop();
                document.getElementById(auxiliary[1][len]).innerHTML = "<img src='dummy.png' class='table1'>";
            }
            if (id == 122 || id == 112 || id == 102) {
                click++;
                poppedElement_id = id;
                len = destination[0].length - 1;
                poppedElement = destination[0].pop();
                document.getElementById(destination[1][len]).innerHTML = "<img src='dummy.png' class='table2'>";
            }
            flag -= 1;
        } else {
            //Based on the Id add  the elements source/auxiliary/destination Arrays and displays

            if (id == 120 || id == 110 || id == 100) {
                if (source[0].length == 0) { //Based on the Id add  the elements source/auxiliary/destination Arrays and displays
                    source[0].push(poppedElement);

                } else if (poppedElement < source[0][source[0].length - 1]) {
                    source[0].push(poppedElement);

                } else if (poppedElement > source[0][source[0].length - 1]) {
                    recover(poppedElement_id, poppedElement);
                    alert("Wrong move");
                }
                for (i = 0; i < source[0].length; i++) {
                    for (j = 0; j < source[0].length; j++) {
                        if (i == j) {

                            document.getElementById(source[1][i]).innerHTML = "<img src='" + source[0][i] + ".png'  class='table3'>";
                        }
                    }
                }
            }
            if (id == 121 || id == 111 || id == 101) {

                if (auxiliary[0].length == 0) {
                    auxiliary[0].push(poppedElement);

                } else if (poppedElement < auxiliary[0][auxiliary[0].length - 1]) {
                    auxiliary[0].push(poppedElement);

                } else if (poppedElement > auxiliary[0][auxiliary[0].length - 1]) {
                    recover(poppedElement_id, poppedElement);
                    alert("Wrong move");
                }
                for (i = 0; i < auxiliary[0].length; i++) {
                    for (j = 0; j < auxiliary[0].length; j++) {
                        if (i == j) {

                            document.getElementById(auxiliary[1][i]).innerHTML = "<img src='" + auxiliary[0][i] + ".png' class='table1'>";
                        }
                    }
                }
            }
            if (id == 122 || id == 112 || id == 102) {
                if (destination[0].length == 0) {
                    destination[0].push(poppedElement);

                } else if (poppedElement < destination[0][destination[0].length - 1]) {
                    destination[0].push(poppedElement);

                } else if (poppedElement > destination[0][destination[0].length - 1]) {
                    recover(poppedElement_id, poppedElement);
                    alert("Wrong move");
                }
                for (i = 0; i < destination[0].length; i++) {
                    for (j = 0; j < destination[0].length; j++) {
                        if (i == j) {
                            // 
                            document.getElementById(destination[1][i]).innerHTML = "<img src='" + destination[0][i] + ".png' class='table2'>";
                        }
                    }
                }
            }
            flag = 2;
        }
        ///If the all the elements are at destination array,then completed the game.
        (function() {
            //document.getElementById("102").innerHTML = "<img src='1.png' class='table2'>";
            if (destination[0].length == 3) {
                //                document.getElementById("102").innerHTML = "<img src='1.png' class='table2'>";



                clearTimeout();
                // alert("Completed");
                // console.log(click);
                //console.log(timer.innerHTML);
                completed(click, timer.innerHTML, timer, timeleft, 3);


                //console.log("Completed");
                //reset();
            }
        })();
    }

    function recover(poppedElement_id, poppedElement) {
        if (poppedElement_id == 120 || poppedElement_id == 110 || poppedElement_id == 100) {
            source[0].push(poppedElement);
            for (i = 0; i < source[0].length; i++) {
                for (j = 0; j < source[0].length; j++) {
                    if (i == j) {
                        document.getElementById(source[1][i]).innerHTML = "<img src='" + source[0][i] + ".png' class='table3'>";
                    }
                }
            }
        }
        if (poppedElement_id == 121 || poppedElement_id == 111 || poppedElement_id == 101) {
            auxiliary[0].push(poppedElement);
            for (i = 0; i < auxiliary[0].length; i++) {
                for (j = 0; j < auxiliary[0].length; j++) {
                    if (i == j) {
                        document.getElementById(auxiliary[1][i]).innerHTML = "<img src='" + auxiliary[0][i] + ".png' class='table1'>";
                    }
                }
            }
        }
        if (poppedElement_id == 122 || poppedElement_id == 112 || poppedElement_id == 102) {
            destination[0].push(poppedElement);
            for (i = 0; i < destination[0].length; i++) {
                for (j = 0; j < destination[0].length; j++) {
                    if (i == j) {
                        document.getElementById(destination[1][i]).innerHTML = "<img src='" + destination[0][i] + ".png' class='table2'>";
                    }
                }
            }
        }
    }

    function reset() {
        source = [
            [3, 2, 1],
            [120, 110, 100]
        ], auxiliary = [
            [],
            [121, 111, 101]
        ], destination = [
            [],
            [122, 112, 102]
        ];
        for (i = 0; i < source[0].length; i++) {
            for (j = 0; j < source[0].length; j++) {
                if (i == j) {
                    document.getElementById(source[1][i]).innerHTML = "<img src='" + source[0][i] + ".png' class='table3'>";
                }
            }
        }
        for (i = 0; i < 3; i++) {
            document.getElementById(auxiliary[1][i]).innerHTML = "<img src='dummy.png' class='table1'>";
            document.getElementById(destination[1][i]).innerHTML = "<img src='dummy.png' class='table2'>";
        }
    }


}

function Medium(timer, timeleft) {

    let main_img = document.createElement('img');
    main_img.setAttribute('src', 'background.jpg');
    main_img.setAttribute('class', 'main');
    main_division.appendChild(main_img);
    let table = document.createElement('table');
    table.setAttribute('class', 'table_med');
    let tbody = document.createElement('tbody');
    let row = document.createElement('tr');
    let th = document.createElement('th');
    th.setAttribute("id", "100");
    th.addEventListener('click', function myFunc() {
        // console.log(this.id);
        towersOfHanoi(this.id);
    });
    let img = document.createElement('img');
    img.setAttribute('src', '1.png');
    th.appendChild(img);
    row.appendChild(th);
    let th1 = document.createElement('th');
    th1.setAttribute("id", "101");
    th1.addEventListener('click', function myFunc() {
        // console.log(this.id);
        towersOfHanoi(this.id);
    });
    let img1 = document.createElement('img');
    img1.setAttribute('src', 'dummy.png');
    th1.appendChild(img1);
    row.appendChild(th1);
    let th2 = document.createElement('th');
    th2.setAttribute("id", "102");
    th2.addEventListener('click', function myFunc() {
        // console.log(this.id);
        towersOfHanoi(this.id);
    });
    let img2 = document.createElement('img');
    img2.setAttribute('src', 'dummy.png');
    th2.appendChild(img2);
    row.appendChild(th2);
    // let th4 = document.createElement('th');
    // th4.setAttribute("id", "103");
    // th4.addEventListener('click', function myFunc() {
    //     // console.log(this.id);
    //     towersOfHanoi(this.id);
    // });
    // let img_1 = document.createElement('img');
    // img_1.setAttribute('src', 'dummy.png');
    // th4.appendChild(img_1);
    // row.appendChild(th4);
    table.appendChild(row);
    let row1 = document.createElement('tr');
    let th3 = document.createElement('th');
    th3.setAttribute("id", "110");
    th3.addEventListener('click', function myFunc() {
        // console.log(this.id);
        towersOfHanoi(this.id);
    });
    let img5 = document.createElement('img');
    img5.setAttribute('src', '2.png');
    th3.appendChild(img5);
    row1.appendChild(th3);
    let th11 = document.createElement('th');
    th11.setAttribute("id", "111");
    th11.addEventListener('click', function myFunc() {
        // console.log(this.id);
        towersOfHanoi(this.id);
    });
    let img51 = document.createElement('img');
    img51.setAttribute('src', 'dummy.png');
    th11.appendChild(img51);
    row1.appendChild(th11);
    let th12 = document.createElement('th');
    th12.setAttribute("id", "112");
    th12.addEventListener('click', function myFunc() {
        // console.log(this.id);
        towersOfHanoi(this.id);
    });
    let img52 = document.createElement('img');
    img52.setAttribute('src', 'dummy.png');
    th12.appendChild(img52);
    row1.appendChild(th12);
    // let th45 = document.createElement('th');
    // th45.setAttribute("id", "113");
    // th45.addEventListener('click', function myFunc() {
    //     // console.log(this.id);
    //     towersOfHanoi(this.id);
    // });
    // let img_2 = document.createElement('img');
    // img_2.setAttribute('src', 'dummy.png');
    // th45.appendChild(img_2);
    // row1.appendChild(th45);
    table.appendChild(row1);
    let row2 = document.createElement('tr');
    let th13 = document.createElement('th');
    th13.setAttribute("id", "120");
    th13.addEventListener('click', function() {
        // console.log(th13is.id);
        towersOfHanoi(this.id);
    });
    let img21 = document.createElement('img');
    img21.setAttribute('src', '3.png');
    th13.appendChild(img21);
    row2.appendChild(th13);
    let th131 = document.createElement('th');
    th131.setAttribute("id", "121");
    th131.addEventListener('click', function() {
        // console.log(th13is.id);
        towersOfHanoi(this.id);
    });
    let img211 = document.createElement('img');
    img211.setAttribute('src', 'dummy.png');
    th131.appendChild(img211);
    row2.appendChild(th131);
    let th132 = document.createElement('th');
    th132.setAttribute("id", "122");
    th132.addEventListener('click', function() {
        // console.log(th13is.id);
        towersOfHanoi(this.id);
    });
    let img212 = document.createElement('img');
    img212.setAttribute('src', 'dummy.png');
    th132.appendChild(img212);
    row2.appendChild(th132);
    // let th46 = document.createElement('th');
    // th46.setAttribute("id", "123");
    // th46.addEventListener('click', function myFunc() {
    //     // console.log(this.id);
    //     towersOfHanoi(this.id);
    // });
    // let img_3 = document.createElement('img');
    // img_3.setAttribute('src', 'dummy.png');
    // th46.appendChild(img_2);
    // row2.appendChild(th46);
    table.appendChild(row2);
    let row3 = document.createElement('tr');
    let th134 = document.createElement('th');
    th134.setAttribute("id", "130");
    th134.addEventListener('click', function() {
        // console.log(th13is.id);
        towersOfHanoi(this.id);
    });
    let img2_1 = document.createElement('img');
    img2_1.setAttribute('src', '4.png');

    th134.appendChild(img2_1);
    row3.appendChild(th134);
    let th14 = document.createElement('th');
    th14.setAttribute("id", "131");
    th14.addEventListener('click', function() {
        // console.log(th13is.id);
        towersOfHanoi(this.id);
    });
    let img2_11 = document.createElement('img');
    img2_11.setAttribute('src', 'dummy.png');
    th14.appendChild(img2_11);
    row3.appendChild(th14);
    let th1_2 = document.createElement('th');
    th1_2.setAttribute("id", "132");
    th1_2.addEventListener('click', function() {
        // console.log(th13is.id);
        towersOfHanoi(this.id);
    });
    let img2_12 = document.createElement('img');
    img2_12.setAttribute('src', 'dummy.png');
    th1_2.appendChild(img2_12);
    row3.appendChild(th1_2);
    // let th4_6 = document.createElement('th');
    // th4_6.setAttribute("id", "133");
    // th4_6.addEventListener('click', function myFunc() {
    //     // console.log(this.id);
    //     towersOfHanoi(this.id);
    // });
    // let img_4 = document.createElement('img');
    // img_4.setAttribute('src', 'dummy.png');
    // th4_6.appendChild(img_4);
    // row3.appendChild(th4_6);
    table.appendChild(row3);
    main_division.appendChild(table);

    document.body.appendChild(main_division);
    var poppedElement, poppedElement_id;
    var i, j;
    var click = 0;
    var source = [
            [4, 3, 2, 1],
            [130, 120, 110, 100]
        ],
        auxiliary = [
            [],
            [131, 121, 111, 101]
        ],
        destination = [
            [],
            [132, 122, 112, 102]
        ];
    flag = 2;

    function towersOfHanoi(id) {
        if (flag == 2) { //Pop the elements from the source/auxiliary/destination  by Using Flag
            if (id == 130 || id == 120 || id == 110 || id == 100) {
                click++;
                poppedElement_id = id;
                len = source[0].length - 1;
                poppedElement = source[0].pop();
                document.getElementById(source[1][len]).innerHTML = "<img src='dummy.png' class='table_3'>";
            }
            if (id == 131 || id == 121 || id == 111 || id == 101) {
                click++;
                poppedElement_id = id;
                len = auxiliary[0].length - 1;
                poppedElement = auxiliary[0].pop();
                document.getElementById(auxiliary[1][len]).innerHTML = "<img src='dummy.png' class='table_1'>";
            }
            if (id == 132 || id == 122 || id == 112 || id == 102) {
                click++;
                poppedElement_id = id;
                len = destination[0].length - 1;
                poppedElement = destination[0].pop();
                document.getElementById(destination[1][len]).innerHTML = "<img src='dummy.png' class='tabel_2'>";
            }
            flag -= 1;
        } else {
            //Based on the Id add  the elements source/auxiliary/destination Arrays and displays
            if (id == 130 || id == 120 || id == 110 || id == 100) {

                if (source[0].length == 0) { //Based on the Id add  the elements source/auxiliary/destination Arrays and displays
                    source[0].push(poppedElement);
                } else if (poppedElement < source[0][source[0].length - 1]) {
                    source[0].push(poppedElement);
                } else if (poppedElement > source[0][source[0].length - 1]) {
                    recover(poppedElement_id, poppedElement);
                    alert("Wrong move");
                }
                for (i = 0; i < source[0].length; i++) {
                    for (j = 0; j < source[0].length; j++) {
                        if (i == j) {
                            document.getElementById(source[1][i]).innerHTML = "<img src='" + source[0][i] + ".png'  class='table_3'>";
                        }
                    }
                }
            }
            if (id == 131 || id == 121 || id == 111 || id == 101) {
                if (auxiliary[0].length == 0) { auxiliary[0].push(poppedElement); } else if (poppedElement < auxiliary[0][auxiliary[0].length - 1]) {
                    auxiliary[0].push(poppedElement);
                } else if (poppedElement > auxiliary[0][auxiliary[0].length - 1]) {
                    recover(poppedElement_id, poppedElement);
                    alert("Wrong move");
                }
                for (i = 0; i < auxiliary[0].length; i++) {
                    for (j = 0; j < auxiliary[0].length; j++) {
                        if (i == j) {
                            document.getElementById(auxiliary[1][i]).innerHTML = "<img src='" + auxiliary[0][i] + ".png' class='table_1'>";
                        }
                    }
                }
            }
            if (id == 132 || id == 122 || id == 112 || id == 102) {
                if (destination[0].length == 0) { destination[0].push(poppedElement); } else if (poppedElement < destination[0][destination[0].length - 1]) {
                    destination[0].push(poppedElement);
                } else if (poppedElement > destination[0][destination[0].length - 1]) {
                    recover(poppedElement_id, poppedElement);
                    alert("Wrong move");
                }
                for (i = 0; i < destination[0].length; i++) {
                    for (j = 0; j < destination[0].length; j++) {
                        if (i == j) {
                            document.getElementById(destination[1][i]).innerHTML = "<img src='" + destination[0][i] + ".png' class='table_2'>";
                        }
                    }
                }
            }
            flag = 2;
        }
        ///If the all the elements are at destination array,then completed the game.
        (function() {
            if (destination[0].length == 4) {
                //document.getElementById(destination[1][0]).innerHTML = "<img src='1.png' class='tabel_2'>";
                clearTimeout();
                // alert("Completed");
                // console.log(click);
                //console.log(timer.innerHTML);
                completed(click, timer.innerHTML, timer, timeleft, 4);
            }
        })();
    }

    function recover(poppedElement_id, poppedElement) {
        if (poppedElement_id == 120 || poppedElement_id == 110 || poppedElement_id == 100) {
            source[0].push(poppedElement);
            for (i = 0; i < source[0].length; i++) {
                for (j = 0; j < source[0].length; j++) {
                    if (i == j) {
                        document.getElementById(source[1][i]).innerHTML = "<img src='" + source[0][i] + ".png' class='table_3'>";
                    }
                }
            }
        }
        if (poppedElement_id == 121 || poppedElement_id == 111 || poppedElement_id == 101) {
            auxiliary[0].push(poppedElement);
            for (i = 0; i < auxiliary[0].length; i++) {
                for (j = 0; j < auxiliary[0].length; j++) {
                    if (i == j) {
                        document.getElementById(auxiliary[1][i]).innerHTML = "<img src='" + auxiliary[0][i] + ".png' class='table_1'>";
                    }
                }
            }
        }
        if (poppedElement_id == 122 || poppedElement_id == 112 || poppedElement_id == 102) {
            destination[0].push(poppedElement);
            for (i = 0; i < destination[0].length; i++) {
                for (j = 0; j < destination[0].length; j++) {
                    if (i == j) {
                        document.getElementById(destination[1][i]).innerHTML = "<img src='" + destination[0][i] + ".png' class='tabel_2'>";
                    }
                }
            }
        }
    }

    function reset() {
        source = [
            [3, 2, 1],
            [120, 110, 100]
        ], auxiliary = [
            [],
            [121, 111, 101]
        ], destination = [
            [],
            [122, 112, 102]
        ];
        for (i = 0; i < source[0].length; i++) {
            for (j = 0; j < source[0].length; j++) {
                if (i == j) {
                    document.getElementById(source[1][i]).innerHTML = "<img src='" + source[0][i] + ".png' class='table_3'>";
                }
            }
        }
        for (i = 0; i < 3; i++) {
            document.getElementById(auxiliary[1][i]).innerHTML = "<img src='dummy.png' class='table_1'>";
            document.getElementById(destination[1][i]).innerHTML = "<img src='dummy.png' class='table_2'>";
        }
    }
}

function Hard(timer, timeleft) {

    let main_img = document.createElement('img');
    main_img.setAttribute('src', 'background.jpg');
    main_img.setAttribute('class', 'main');
    main_division.appendChild(main_img);
    let table = document.createElement('table');
    table.setAttribute('class', 'table_hard');
    let tbody = document.createElement('tbody');
    let row = document.createElement('tr');
    let th = document.createElement('th');
    th.setAttribute("id", "100");
    th.addEventListener('click', function myFunc() {
        // console.log(this.id);
        towersOfHanoi(this.id);
    });
    let img = document.createElement('img');
    img.setAttribute('src', '1.png');
    th.appendChild(img);
    row.appendChild(th);
    let th1 = document.createElement('th');
    th1.setAttribute("id", "101");
    th1.addEventListener('click', function myFunc() {
        // console.log(this.id);
        towersOfHanoi(this.id);
    });
    let img1 = document.createElement('img');
    img1.setAttribute('src', 'dummy.png');
    th1.appendChild(img1);
    row.appendChild(th1);
    let th2 = document.createElement('th');
    th2.setAttribute("id", "102");
    th2.addEventListener('click', function myFunc() {
        // console.log(this.id);
        towersOfHanoi(this.id);
    });
    let img2 = document.createElement('img');
    img2.setAttribute('src', 'dummy.png');
    th2.appendChild(img2);
    row.appendChild(th2);
    // let th4 = document.createElement('th');
    // th4.setAttribute("id", "103");
    // th4.addEventListener('click', function myFunc() {
    //     // console.log(this.id);
    //     towersOfHanoi(this.id);
    // });
    // let img_1 = document.createElement('img');
    // img_1.setAttribute('src', 'dummy.png');
    // th4.appendChild(img_1);
    // row.appendChild(th4);
    table.appendChild(row);
    let row1 = document.createElement('tr');
    let th3 = document.createElement('th');
    th3.setAttribute("id", "110");
    th3.addEventListener('click', function myFunc() {
        // console.log(this.id);
        towersOfHanoi(this.id);
    });
    let img5 = document.createElement('img');
    img5.setAttribute('src', '2.png');
    th3.appendChild(img5);
    row1.appendChild(th3);
    let th11 = document.createElement('th');
    th11.setAttribute("id", "111");
    th11.addEventListener('click', function myFunc() {
        // console.log(this.id);
        towersOfHanoi(this.id);
    });
    let img51 = document.createElement('img');
    img51.setAttribute('src', 'dummy.png');
    th11.appendChild(img51);
    row1.appendChild(th11);
    let th12 = document.createElement('th');
    th12.setAttribute("id", "112");
    th12.addEventListener('click', function myFunc() {
        // console.log(this.id);
        towersOfHanoi(this.id);
    });
    let img52 = document.createElement('img');
    img52.setAttribute('src', 'dummy.png');
    th12.appendChild(img52);
    row1.appendChild(th12);
    // let th45 = document.createElement('th');
    // th45.setAttribute("id", "113");
    // th45.addEventListener('click', function myFunc() {
    //     // console.log(this.id);
    //     towersOfHanoi(this.id);
    // });
    // let img_2 = document.createElement('img');
    // img_2.setAttribute('src', 'dummy.png');
    // th45.appendChild(img_2);
    // row1.appendChild(th45);
    table.appendChild(row1);
    let row2 = document.createElement('tr');
    let th13 = document.createElement('th');
    th13.setAttribute("id", "120");
    th13.addEventListener('click', function() {
        // console.log(th13is.id);
        towersOfHanoi(this.id);
    });
    let img21 = document.createElement('img');
    img21.setAttribute('src', '3.png');
    th13.appendChild(img21);
    row2.appendChild(th13);
    let th131 = document.createElement('th');
    th131.setAttribute("id", "121");
    th131.addEventListener('click', function() {
        // console.log(th13is.id);
        towersOfHanoi(this.id);
    });
    let img211 = document.createElement('img');
    img211.setAttribute('src', 'dummy.png');
    th131.appendChild(img211);
    row2.appendChild(th131);
    let th132 = document.createElement('th');
    th132.setAttribute("id", "122");
    th132.addEventListener('click', function() {
        // console.log(th13is.id);
        towersOfHanoi(this.id);
    });
    let img212 = document.createElement('img');
    img212.setAttribute('src', 'dummy.png');
    th132.appendChild(img212);
    row2.appendChild(th132);
    // let th46 = document.createElement('th');
    // th46.setAttribute("id", "123");
    // th46.addEventListener('click', function myFunc() {
    //     // console.log(this.id);
    //     towersOfHanoi(this.id);
    // });
    // let img_3 = document.createElement('img');
    // img_3.setAttribute('src', 'dummy.png');
    // th46.appendChild(img_2);
    // row2.appendChild(th46);
    table.appendChild(row2);
    let row3 = document.createElement('tr');
    let th134 = document.createElement('th');
    th134.setAttribute("id", "130");
    th134.addEventListener('click', function() {
        // console.log(th13is.id);
        towersOfHanoi(this.id);
    });
    let img2_1 = document.createElement('img');
    img2_1.setAttribute('src', '4.png');

    th134.appendChild(img2_1);
    row3.appendChild(th134);
    let th14 = document.createElement('th');
    th14.setAttribute("id", "131");
    th14.addEventListener('click', function() {
        // console.log(th13is.id);
        towersOfHanoi(this.id);
    });
    let img2_11 = document.createElement('img');
    img2_11.setAttribute('src', 'dummy.png');
    th14.appendChild(img2_11);
    row3.appendChild(th14);
    let th1_2 = document.createElement('th');
    th1_2.setAttribute("id", "132");
    th1_2.addEventListener('click', function() {
        // console.log(th13is.id);
        towersOfHanoi(this.id);
    });
    let img2_12 = document.createElement('img');
    img2_12.setAttribute('src', 'dummy.png');
    th1_2.appendChild(img2_12);
    row3.appendChild(th1_2);
    // let th4_6 = document.createElement('th');
    // th4_6.setAttribute("id", "133");
    // th4_6.addEventListener('click', function myFunc() {
    //     // console.log(this.id);
    //     towersOfHanoi(this.id);
    // });
    // let img_4 = document.createElement('img');
    // img_4.setAttribute('src', 'dummy.png');
    // th4_6.appendChild(img_4);
    // row3.appendChild(th4_6);
    table.appendChild(row3);
    let row4 = document.createElement('tr');
    let th5 = document.createElement('th');
    th5.setAttribute("id", "140");
    th5.addEventListener('click', function() {
        // console.log(th13is.id);
        towersOfHanoi(this.id);
    });
    let img5_1 = document.createElement('img');
    img5_1.setAttribute('src', '5.png');
    th5.appendChild(img5_1);
    row4.appendChild(th5);
    let th13_1 = document.createElement('th');
    th13_1.setAttribute("id", "141");
    th13_1.addEventListener('click', function() {
        // console.log(th13is.id);
        towersOfHanoi(this.id);
    });
    let img5_2 = document.createElement('img');
    img5_2.setAttribute('src', 'dummy.png');
    th13_1.appendChild(img5_2);
    row4.appendChild(th13_1);
    let th13_2 = document.createElement('th');
    th13_2.setAttribute("id", "142");
    th13_2.addEventListener('click', function() {
        // console.log(th13is.id);
        towersOfHanoi(this.id);
    });
    let img5_3 = document.createElement('img');
    img5_3.setAttribute('src', 'dummy.png');
    th13_2.appendChild(img5_3);
    row4.appendChild(th13_2);
    table.appendChild(row4);
    main_division.appendChild(table);
    document.body.appendChild(main_division);

    var poppedElement, poppedElement_id;
    var i, j;
    var source = [
            [5, 4, 3, 2, 1],
            [140, 130, 120, 110, 100]
        ],
        auxiliary = [
            [],
            [141, 131, 121, 111, 101]
        ],
        destination = [
            [],
            [142, 132, 122, 112, 102]
        ];
    var click = 0;
    flag = 2;

    function towersOfHanoi(id) {
        if (flag == 2) { //Pop the elements from the source/auxiliary/destination  by Using Flag
            if (id == 140 || id == 130 || id == 120 || id == 110 || id == 100) {
                click++;
                poppedElement_id = id;
                len = source[0].length - 1;
                poppedElement = source[0].pop();
                document.getElementById(source[1][len]).innerHTML = "<img src='dummy.png' class='table_3'>";
            }
            if (id == 141 || id == 131 || id == 121 || id == 111 || id == 101) {
                click++;
                poppedElement_id = id;
                len = auxiliary[0].length - 1;
                poppedElement = auxiliary[0].pop();
                document.getElementById(auxiliary[1][len]).innerHTML = "<img src='dummy.png' class='table_1'>";
            }
            if (id == 142 || id == 132 || id == 122 || id == 112 || id == 102) {
                click++;
                poppedElement_id = id;
                len = destination[0].length - 1;
                poppedElement = destination[0].pop();
                document.getElementById(destination[1][len]).innerHTML = "<img src='dummy.png' class='tabel_2'>";
            }
            flag -= 1;
        } else {
            //Based on the Id add  the elements source/auxiliary/destination Arrays and displays
            if (id == 140 || id == 130 || id == 120 || id == 110 || id == 100) {
                if (source[0].length == 0) { //Based on the Id add  the elements source/auxiliary/destination Arrays and displays
                    source[0].push(poppedElement);
                } else if (poppedElement < source[0][source[0].length - 1]) {
                    source[0].push(poppedElement);
                } else if (poppedElement > source[0][source[0].length - 1]) {
                    recover(poppedElement_id, poppedElement);
                    alert("Wrong move");
                }
                for (i = 0; i < source[0].length; i++) {
                    for (j = 0; j < source[0].length; j++) {
                        if (i == j) {
                            document.getElementById(source[1][i]).innerHTML = "<img src='" + source[0][i] + ".png'  class='table_3'>";
                        }
                    }
                }
            }
            if (id == 141 || id == 131 || id == 121 || id == 111 || id == 101) {
                if (auxiliary[0].length == 0) { auxiliary[0].push(poppedElement); } else if (poppedElement < auxiliary[0][auxiliary[0].length - 1]) {
                    auxiliary[0].push(poppedElement);
                } else if (poppedElement > auxiliary[0][auxiliary[0].length - 1]) {
                    recover(poppedElement_id, poppedElement);
                    alert("Wrong move");
                }
                for (i = 0; i < auxiliary[0].length; i++) {
                    for (j = 0; j < auxiliary[0].length; j++) {
                        if (i == j) {
                            document.getElementById(auxiliary[1][i]).innerHTML = "<img src='" + auxiliary[0][i] + ".png' class='table_1'>";
                        }
                    }
                }
            }
            if (id == 142 || id == 132 || id == 122 || id == 112 || id == 102) {
                if (destination[0].length == 0) { destination[0].push(poppedElement); } else if (poppedElement < destination[0][destination[0].length - 1]) {
                    destination[0].push(poppedElement);
                } else if (poppedElement > destination[0][destination[0].length - 1]) {
                    recover(poppedElement_id, poppedElement);
                    alert("Wrong move");
                }
                for (i = 0; i < destination[0].length; i++) {
                    for (j = 0; j < destination[0].length; j++) {
                        if (i == j) {
                            document.getElementById(destination[1][i]).innerHTML = "<img src='" + destination[0][i] + ".png' class='table_2'>";
                        }
                    }
                }
            }
            flag = 2;
        }
        ///If the all the elements are at destination array,then completed the game.
        (function() {
            if (destination[0].length == 5) {
                //document.getElementById(destination[1][0]).innerHTML = "<img src='1.png' class='tabel_2'>";
                clearTimeout();
                // alert("Completed");
                // console.log(click);
                //console.log(timer.innerHTML);
                completed(click, timer.innerHTML, timer, timeleft, 5);
                //console.log("Completed");
                //reset();
            }
        })();
    }

    function recover(poppedElement_id, poppedElement) {
        if (poppedElement_id == 120 || poppedElement_id == 110 || poppedElement_id == 100) {
            source[0].push(poppedElement);
            for (i = 0; i < source[0].length; i++) {
                for (j = 0; j < source[0].length; j++) {
                    if (i == j) {
                        document.getElementById(source[1][i]).innerHTML = "<img src='" + source[0][i] + ".png' class='table_3'>";
                    }
                }
            }
        }
        if (poppedElement_id == 121 || poppedElement_id == 111 || poppedElement_id == 101) {
            auxiliary[0].push(poppedElement);
            for (i = 0; i < auxiliary[0].length; i++) {
                for (j = 0; j < auxiliary[0].length; j++) {
                    if (i == j) {
                        document.getElementById(auxiliary[1][i]).innerHTML = "<img src='" + auxiliary[0][i] + ".png' class='table_1'>";
                    }
                }
            }
        }
        if (poppedElement_id == 122 || poppedElement_id == 112 || poppedElement_id == 102) {
            destination[0].push(poppedElement);
            for (i = 0; i < destination[0].length; i++) {
                for (j = 0; j < destination[0].length; j++) {
                    if (i == j) {
                        document.getElementById(destination[1][i]).innerHTML = "<img src='" + destination[0][i] + ".png' class='tabel_2'>";
                    }
                }
            }
        }
    }

    function reset() {
        source = [
            [3, 2, 1],
            [120, 110, 100]
        ], auxiliary = [
            [],
            [121, 111, 101]
        ], destination = [
            [],
            [122, 112, 102]
        ];
        for (i = 0; i < source[0].length; i++) {
            for (j = 0; j < source[0].length; j++) {
                if (i == j) {
                    document.getElementById(source[1][i]).innerHTML = "<img src='" + source[0][i] + ".png' class='table_3'>";
                }
            }
        }
        for (i = 0; i < 3; i++) {
            document.getElementById(auxiliary[1][i]).innerHTML = "<img src='dummy.png' class='table_1'>";
            document.getElementById(destination[1][i]).innerHTML = "<img src='dummy.png' class='table_2'>";
        }
    }
}

function completed(click, timer_text, timer, timeleft, disks) {

    var div = document.createElement("div");
    div.className += "overlay";
    main_division.appendChild(div);
    // var fr = document.getElementById('100');
    // fr.addEventListener('click', function() {
    //     ///Dummy;
    // });
    // var fr1 = document.getElementById('110');
    // fr1.addEventListener('click', function() {
    //     ///Dummy;
    // });
    // var fr2 = document.getElementById('120');
    // fr2.addEventListener('click', function() {
    //     ///Dummy;
    // });
    timer.innerHTML = "";
    timeleft.innerHTML = "";
    console.log(click);
    var arr = timer_text.split(":");
    console.log(arr);
    var score = arr[1] * 100;
    var moves_min = Math.pow(2, disks) - 1;
    var divison = document.createElement('div');
    divison.setAttribute("class", "division");
    console.log(moves_min, click);
    if (moves_min === click && arr[1] >= 40 && arr[1] <= 59) {
        var p = document.createElement('p');
        p.innerHTML = "Congratulations!!!You completed the game in minimum number of moves and in minimum time";
        p.setAttribute('class', 'p1');
        divison.appendChild(p);
        var p1 = document.createElement('p');
        p1.innerHTML = "Your Moves:" + "  " + click + "Your Score:" + score;
        p1.setAttribute('class', 'p2');
        divison.appendChild(p1);

    } else if (moves_min + 2 === click && arr[1] >= 30 && arr[1] <= 35) {
        var p3 = document.createElement('p');
        p3.innerHTML = "Congratulations!!!You completed the game in medium number of moves";
        p3.setAttribute('class', 'p3');
        divison.appendChild(p3);
        var p4 = document.createElement('p');
        p4.innerHTML = "Your Moves:" + click + "  " + "Your Score:" + score;
        p4.setAttribute('class', 'p4');
        divison.appendChild(p4);
    } else if (moves_min == click) {
        var p5 = document.createElement('p');
        p5.innerHTML = "Congratulations!!!You completed the game in minimum number of moves";
        p5.setAttribute('class', 'p5');
        divison.appendChild(p5);
        var p6 = document.createElement('p');
        p6.innerHTML = "Your Moves:" + click + "  " + "Your Score:" + score;
        p6.setAttribute('class', 'p6');
        divison.appendChild(p6);
    } else {
        var p7 = document.createElement('p');
        p7.innerHTML = "Congratulations!!!You completed the game in maximum number of moves";
        p7.setAttribute('class', 'p7');
        divison.appendChild(p7);
        var p8 = document.createElement('p');
        p8.innerHTML = "Your Moves:" + click + "  " + "Your Score:" + score;
        p8.setAttribute('class', 'p8');
        divison.appendChild(p8);
    }


    var button = document.createElement('button');
    button.setAttribute('class', 'button');
    button.innerHTML = 'restart';
    button.addEventListener('click', function() {
        reloading();
    });
    divison.appendChild(button);
    main_division.appendChild(divison);
}

function reloading() {
    location.reload();
}