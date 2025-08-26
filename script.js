// Function to toggle the mobile menu
function toggleMenu() {
    const menu = document.getElementById("sidebar-menu");
    menu.classList.toggle("show");
}

const workItems = document.querySelectorAll(".work-item");
const previewBox = document.querySelector(".preview-box");
const previewImg = previewBox.querySelector("img");

workItems.forEach(item => {

  item.addEventListener("mousemove", (e) => {
    const preview = item.getAttribute("data-preview");
    previewImg.src = preview;
    previewBox.style.display = "block";
    previewBox.style.top = (e.clientY + 20) + "px";
    previewBox.style.left = (e.clientX + 20) + "px";

  });

  item.addEventListener("mouseleave", () => {
    previewBox.style.display = "none";
  });
});