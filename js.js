const container = document.getElementById('container');
const gridSize = document.getElementById('gridSize');



function gridArea(){
    
    let userInput = prompt("How many squares a side?")

    for (let i = 0; i < (userInput*userInput); i++)
    {
        const div = document.createElement('div');
        container.appendChild(div);
    }

    container.style.gridTemplateColumns = `repeat(${userInput}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${userInput}, 1fr)`;
}








gridSize.onclick = gridArea;
