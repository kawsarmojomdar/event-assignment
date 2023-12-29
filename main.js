function displayDate() {
    document.getElementById("date").innerHTML = Date()
}


function uppercaseFunc1() {
    let x = document.getElementById("case1")
    x.value = x.value.toUpperCase()
}
function uppercaseFunc2() {
    let x = document.getElementById("case2")
    x.value = x.value.toUpperCase()
}
function mouseoverFunc(obj) {
    obj.style.background = "yellow"
}
function mousedownFunc(obj) {
    obj.style.background = "red"
}
function onmouseleaveFunc(obj) {
    obj.style.background = "green"
}
let mybtn = document.getElementById("mybtn")
mybtn.addEventListener("click", displayClock)
function displayClock() {
    document.getElementById("clock").innerHTML = Date()
}
let mybtn1 = document.getElementById("mybtn1")
mybtn1.addEventListener("click", hideClock)
function hideClock() {
    document.getElementById("clock").innerHTML = ""
}

document.getElementById("myp1").addEventListener("click", alertFunc1, false)

function alertFunc1() {
    alert("This is p (myp1) element clicked")
}
document.getElementById("myp2").addEventListener("click", alertFunc2, true)

function alertFunc2() {
    alert("This is p (myp2) element clicked")
}
document.getElementById("mydiv1").addEventListener("click", alertFunc3, false)

function alertFunc3() {
    alert("This is orange div (mydiv1) element clicked")
}
document.getElementById("mydiv2").addEventListener("click", alertFunc4, true)

function alertFunc4() {
    alert("This is orange div (mydiv2) element clicked")
}