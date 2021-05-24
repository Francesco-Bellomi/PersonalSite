let i = 0;
let txt = "Benvenuto , Mi chiamo Francesco Bellomi e sono un Junior Web Developer! Scorri in basso per sapere di più su di me.";
let speed = 70;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("benvenuto").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();