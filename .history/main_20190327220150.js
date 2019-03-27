const btn = document.querySelector("button");
const items = document.querySelectorAll("li");
btn.addEventListener("click", () => {
for (let i = 0; i<liItems.length; i++){
items[i].style.display = "block";
}
})
