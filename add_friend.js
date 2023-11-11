var fstatus = document.querySelector("h5");
var btns = document.querySelector("#add");
var verify = 0;

btns.addEventListener("click", function () {
    if (verify == 0) {
        fstatus.innerText = "Friends";
        fstatus.style.color = "purple";
        btns.innerHTML = "Remove friend";
        btns.style.backgroundColor = "red";
        verify = 1;
    } else {
        confirm("Are you sure you wanna remove friend ?");
        fstatus.innerText = "Stranger";
        fstatus.style.color = "red";
        btns.innerHTML = "Add friend"
        btns.style.backgroundColor = "blue";
        verify = 0;
    }
})