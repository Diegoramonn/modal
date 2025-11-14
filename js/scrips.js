const openMODALbutton = document.querySelector("#open-modal");
const closeMODALbutton = document.querySelector("#close-modal");
const modal = document. querySelector("#modal");
const fade = document.querySelector("#fade");

const togglemodal = () => {
    [modal,fade].forEach((el) => el.classList.toggle("hide"));
    
};

[openMODALbutton, closeMODALbutton, fade].forEach((el) => {
    el.addEventListener("click", () => togglemodal()); 
});
