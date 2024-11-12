var instance = new vidbg(
    ".BMWbackground",
    {
        mp4: "intro.mp4", // URL or relative path to MP4 video
        // webm: "path/to/video.webm", // URL or relative path to webm video
        poster: "", // URL or relative path to fallback image
        overlay: false, // Boolean to display the overlay or not
        overlayColor: "#000", // The overlay color as a HEX
        overlayAlpha: 0.3, // The overlay alpha. Think of this as the last integer in RGBA()
    },
    {
        autoplay: true,
        controls: false,
        loop: true,
        muted: true,
        playsInline: true,
    }
);

const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-icon");
const cancelBtn = document.querySelector(".cancel-icon");

menuBtn.onclick = ()=>{
    menu.classList.add("active");
    menuBtn.classList.add("hide");
}

cancelBtn.onclick = ()=>{
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
}