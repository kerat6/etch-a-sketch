
for (let i = 0; i < (16 * 16); i++) {
    const container = document.querySelector("#container");
    const div = document.createElement("div");
    div.setAttribute("class", "block")
    div.style.display = "flex";
    div.style.height = `${700 / 16}px`;
    div.style.width = `${1000 / 16}px`;
    div.style.flexGrow = 1;
    div.style.alignItems = "center";
    div.style.backgroundColor = "white";
    // container.style.border = "solid black";
    // div.style.border = "solid black";
    // div.style.borderWidth = '1px';
    container.appendChild(div)


}

const blocks = document.querySelectorAll('.block')

function getRandomColor() {
    return '#' + Math.random().toString(16).substring(2, 8);
}

blocks.forEach((block) => {
    block.addEventListener('mouseenter', () => {
        if (block.style.backgroundColor == "white") {
            block.style.backgroundColor = getRandomColor();
            block.style.opacity = 0.1;
            block.attributes.draggable = false;
        } else if (block.style.opacity !== 1) {
            let currentOpacity = Number(block.style.opacity);
            block.style.opacity = (currentOpacity + 0.1);
        }
    });
});

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const buttonClick = button.id;
        if (buttonClick == 'reset') {
            const blocks = document.querySelectorAll('.block')
            blocks.forEach(block => {
                block.style.backgroundColor = "white";
                block.style.opacity = 1;

            });
        }
        else if (buttonClick == 'newGrid') {
            let gridSize = Number(prompt("How many squares would you like per side?", '16'))
            while (gridSize >= 101 || isNaN(gridSize) || gridSize < 1) {
                gridSize = Number(prompt("Please keep the number between 1-100.")
                )
            }
            container.innerHTML = ''
            for (let i = 0; i < (gridSize * gridSize); i++) {
                const container = document.querySelector("#container");
                const div = document.createElement("div");
                div.setAttribute("class", "block")
                div.style.display = "flex";
                div.style.flexGrow = '1';
                div.style.height = `${700 / gridSize}px`;
                div.style.width = `${1000 / gridSize}px`;
                div.style.alignItems = "center";
                div.style.backgroundColor = "white";
                // div.style.border = "solid black";
                // div.style.borderWidth = '0px';
                container.appendChild(div);

            }
            const blocks = document.querySelectorAll('.block')
            blocks.forEach((block) => {
                block.addEventListener('mouseenter', () => {
                    if (block.style.backgroundColor == "white") {
                        block.style.backgroundColor = getRandomColor();
                        block.style.opacity = 0.1;
                        block.attributes.draggable = false;
                    } else if (block.style.opacity !== 1) {
                        let currentOpacity = Number(block.style.opacity);
                        block.style.opacity = (currentOpacity + 0.1);
                    }
                });
            });
        }
    });
});



// reset all tiles
// blocks.forEach((block) => {
//     block.style.backgroundColor = "white"
// })