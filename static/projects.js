addEventListener("DOMContentLoaded",() => {
    let all = document.querySelector(".all");
    let workinner1 = document.querySelector(".work-inner1");
    let workinner2 = document.querySelector(".work-inner2");
    let workinner3 = document.querySelector(".work-inner3");
    all.addEventListener('click',() => {
        workinner1.style.display = "flex";
        workinner2.style.display = "flex";
        workinner3.style.display = "flex";
    });
    document.querySelector(".uiux").addEventListener('click',() => {
        console.log("1");
        workinner1.style.display = "flex";
        workinner2.style.display = "none";
        workinner3.style.display = "none";
    });
    document.querySelector(".app").addEventListener('click',() => {
        console.log("2");
        workinner1.style.display = "none";
        workinner2.style.display = "flex";
        workinner3.style.display = "none";
    });
    document.querySelector(".web").addEventListener('click',() => {
        console.log("3");
        workinner1.style.display = "none";
        workinner2.style.display = "none";
        workinner3.style.display = "flex";
    });
});