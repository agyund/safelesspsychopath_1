$(document).ready(function () {
    $(".m1").on("mousedown", function () {
        $("html").css("background-color", "black")
        $(".title").css("fill", "red")
        $(".hover1").css("display", "block")
        $(".m1").css("display", "none")

    })
    $(".hover1").on("mouseup", function () {
        $("html").css("background-color", "white")
        $(".title").css("fill", "black")
        $(".m1").css("display", "block")
        $(".hover1").css("display", "none")
    })

    $(".w1").on("mousedown", function () {
        $("html").css("background-color", "black")
        $(".title").css("fill", "red")
        $(".hover2").css("display", "block")
        $(".w1").css("display", "none")

    })
    $(".hover2").on("mouseup", function () {
        $("html").css("background-color", "white")
        $(".title").css("fill", "black")
        $(".w1").css("display", "block")
        $(".hover2").css("display", "none")
    })
})