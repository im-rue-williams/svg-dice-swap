
// Set Paths for each dice facing
const pip1 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
pip1.setAttribute('cx', '8');
pip1.setAttribute('cy', '8');
pip1.setAttribute('r', '1.5');

const pip2path = 'M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z';
const pip3path = 'M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-4-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z';
const pip4path = 'M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z';
const pip5path = 'M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm4-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z';
const pip6path = 'M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-8 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z';

// Returns an svg object of the dice shell
function createDice() {     
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const shell = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    svg.setAttribute('width', '100');
    svg.setAttribute('height', '100');
    svg.setAttribute('fill', 'currentColor');
    svg.setAttribute('viewBox', '0 0 16 16');
    shell.setAttribute('d', 'M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z')
    svg.appendChild(shell);
    return svg;
}

// Adds provided path to provided svg element
function renderPips(svg, path) {
        const pip = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        pip.setAttribute('d', path);
        svg.appendChild(pip);
}
    
// takes a string value and an element id and returns the corresponding svg to the given id
function renderDice(value, id) {
    const svg = createDice();
    switch (value) {
        case '1':
            svg.appendChild(pip1);
            svg.setAttribute('fill','red')
            break;
        case '2':
            renderPips(svg, pip2path);
            break;
        case '3':
            renderPips(svg, pip3path);
            break;
        case '4':
            renderPips(svg, pip4path);
            break;
        case '5':
            renderPips(svg, pip5path);
            break;
        case '6':
            renderPips(svg, pip6path);
            svg.setAttribute('fill','green')
            break;
        default:
            console.log("Case value failed, default response" + " " + value);
    }
    document.getElementById(id).innerHTML ='';  
    document.getElementById(id).appendChild(svg);  
}

//random number generator 1-6
function randomRoll() {
    renderDice(Math.ceil(Math.random()*6).toString(), 'dice-shell-1')
}