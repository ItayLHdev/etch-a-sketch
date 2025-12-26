const grid = document.querySelector(".grid");
const gridAreaBtn = document.querySelector("#grid-area");

function makeGrid(area) {
    const divs = grid.querySelectorAll("div")
    divs.forEach((div) => {
        div.remove()
    })
    for (let i = 0; i < (area * area); i++) {
        const div = document.createElement("div");
        div.style.flexBasis = `${800/area}px`;
        grid.appendChild(div);
        div.addEventListener("mouseenter", () => {
            div.style.background = "blue";
        });
    }
}
makeGrid(16)

function replaceGrid(input) {
    makeGrid(input)
}

gridAreaBtn.addEventListener("click", () => {
    const input = parseInt(prompt("Enter the number of squares per side:"));
    if (input > 100) alert("please enter a number lower then 100");
    else {
        replaceGrid(input);
    }
});