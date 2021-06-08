let i = 0;
let txt = `Mi chiamo Francesco Bellomi e sono un Junior Web Developer! Scorri in basso per sapere di più su di me.`;
let speed = 70;

setTimeout(() => {
    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("benvenuto").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    typeWriter();
}, 4000);

let project = [1, 2, 3, 4, 5];

for (let i = 0; i < project.length; i++) {
    $("#b" + project[i]).click(function() {
        $("#p" + project[i]).toggleClass("col-sm-4");
        $(this).toggleClass("fa-search-plus").toggleClass("fa-search-minus");
    });
}

$(".work").addClass("tx-black")

$('html, body').css({
    overflow: "hidden",
    height: "100%"
});

$(window).on("load", function() {
    $(".loader-wrapper").fadeOut(1500);
    $('html, body').css({
        overflow: "auto",
        height: "auto"
    });
})