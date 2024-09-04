//your JS code here. If required.
const circle = document.querySelectorAll(".circle");

const pre = document.getElementById("prev");
const next = document.getElementById("next");
let count = 2;
next.addEventListener("click", (e) => {
    count++;
    if (count > circle.length) {
        count = circle.length;

    }

    updateIt();
});
pre.addEventListener("click", (e) => {
    count--;

    if (count < 0) {
        count = 0;

    }
    updateIt();
});
function updateIt() {
    let temp = count;
    let n = 0;
    while (temp > 0) {

        circle[n++].classList.add("active");
        temp--;
    }
    while (n < circle.length) {
        circle[n++].classList.remove("active");
    }
}
if (count === 1) {
    pre.disabled = true;
} else if (count === circle.length) {
    next.disabled = true;
} else {
    pre.disabled = false;
    next.disabled = false;
}

