window.onload = function () {
    var html = document.body;

    window.onscroll = function () {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            html.className = "scrolled";
        } else {
            html.className = "";
        }
    }
}