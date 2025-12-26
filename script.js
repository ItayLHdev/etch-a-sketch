const grid = document.querySelector("#grid");

const getRandomColor = () => {
    const letters = "ABCDEF0123456789"
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color;
};

const randomColorCheckbox = document.querySelector("#random-color-checkbox");
const darkeningEffectCheckbox = document.querySelector("#darkening-checkbox");

function makeGrid(area) {
    const divs = grid.querySelectorAll("div");
    divs.forEach((div) => {
        div.remove();
    });
    for (let i = 0; i < (area * area); i++) {
        const div = document.createElement("div");
        div.style.flexBasis = `${800/area}px`;
        grid.appendChild(div);

        let opacity = 0;
        div.addEventListener("mouseenter", () => {
            if (randomColorCheckbox.checked) {
                div.style.background = getRandomColor();
            } else {
                div.style.background = "black";
            }

            if (darkeningEffectCheckbox.checked) {
                div.style.opacity = opacity;
                opacity += 0.1;
            } else {
                div.style.opacity = 1
            }
        })
    }
}
makeGrid(16);

const gridAreaBtn = document.querySelector("#grid-area");

gridAreaBtn.addEventListener("click", () => {
    const input = Number(prompt("Enter the number of squares per side:"));
    if (input > 100 || Number.isNaN(input)) alert("please enter a number lower then 100");
    else {
        makeGrid(input);
    }
});

const clearBtn = document.querySelector("#clear");

clearBtn.addEventListener("click", () => {
    const divs = grid.querySelectorAll("div");
    divs.forEach((div) => {
        div.style.background = "white";
        div.style.opacity = 1;
    })
})