const grid = document.querySelector("#grid");
const gridAreaBtn = document.querySelector("#grid-area");
const clearBtn = document.querySelector("#clear");

function makeGrid(area) {
    const divs = grid.querySelectorAll("div");
    divs.forEach((div) => {
        div.remove();
    });
    for (let i = 0; i < (area * area); i++) {
        const div = document.createElement("div");
        div.style.flexBasis = `${800/area}px`;
        grid.appendChild(div);
        div.addEventListener("mouseenter", () => {
            div.style.background = "blue";
        });
    }
}
makeGrid(16);

gridAreaBtn.addEventListener("click", () => {
    const input = Number(prompt("Enter the number of squares per side:"));
    if (input > 100 || Number.isNaN(input)) alert("please enter a number lower then 100");
    else {
        makeGrid(input);
    }
});

clearBtn.addEventListener("click", () => {
    const divs = grid.querySelectorAll("div");
    divs.forEach((div) => {
        div.style.background = "white";
    })
})