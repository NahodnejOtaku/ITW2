window.onload = function () {
    var html = document.body;

    window.onscroll = function () {
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            html.className = "scrolled";
        } else {
            html.className = "";
        }
    }
}