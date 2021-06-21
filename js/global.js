let icon = document.getElementById("icon-menu"),
    ul = document.getElementById("ul"),
    logo = document.getElementById("logo");

icon.onclick = function () {
    if(ul.classList.contains("show")) {
        ul.style.opacity = "0";
        setTimeout(function () {
            ul.classList.remove("show")
        },500)
    }else{
        ul.classList.add("show")
        setTimeout(function () {
            ul.style.opacity = "1";
        },0)
    }
}

logo.onclick = function () {
    window.open("index.html","-self")
}