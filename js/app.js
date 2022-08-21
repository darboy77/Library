$(function() {
    $("#hackButton").click(function() {
        var a = document.createElement("a");
        var ss = $(a).attr(href, "hack.html");
        $("#hackButton").append(ss);
    });
})