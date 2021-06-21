let right = document.querySelector(".banner .right"),
    left = document.querySelector(".banner .left"),
    bollets = document.querySelectorAll(".banner .bollets span");

function changebanner(datanew) {
    let data = document.querySelector(".banner .bollets span.active").getAttribute("data-change");
    document.querySelector(`.banner .parent .${data}`).style.opacity = "0";
    setTimeout(function() {
        document.querySelector(`.banner .parent .${datanew}`).classList.remove("hidden");
        document.querySelector(`.banner .parent .${data}`).classList.add("hidden");
    },500)
    setTimeout(function () {
        document.querySelector(`.banner .parent .${datanew}`).style.opacity = "1"
    },0)
}

function changebollets(that) {
    document.querySelector(".banner .bollets span.active").classList.remove("active");
    that.classList.add("active");
}

for(i = 0; i < bollets.length; i++) {
    bollets[i].onclick = function () {
        let data = this.getAttribute("data-change");
        changebanner(data);
        changebollets(this);
    }
}

right.onclick = function () {
    let data  = document.querySelector(".banner .bollets span.active").getAttribute("data-change");
    int = parseInt(data.slice(2,3)) + 1;
    int == 4 ? int = 1 : int = int;
    datanew = "b-" + int;
    changebanner(datanew);
    changebollets(bollets[int - 1]);
}

left.onclick = function () {
    let data  = document.querySelector(".banner .bollets span.active").getAttribute("data-change"),
    int = parseInt(data.slice(2,3)) - 1;
    int == 0 ? int = 3 : int = int;
    datanew = "b-" + int;
    changebanner(datanew);
    changebollets(bollets[int - 1]);
}