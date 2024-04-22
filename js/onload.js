window.onload = function () {
    var blessing = document.getElementById('forgiveness');
    var textArea = document.getElementById('confession_area');
    var form = document.getElementById('confession_form');
    var html = document.body;

    window.onscroll = function () {
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            html.className = "scrolled";
        } else {
            html.className = "";
        }
    }
    
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        showPopup();
    });

    function showPopup() {
        blessing.className = "popup";
        textArea.value = '';
        setTimeout(() => { blessing.className = "none"; }, 4000);
    }
}