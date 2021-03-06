const sketchContainer = document.querySelector('#sketchContainer');
const sizeButton = document.querySelector('#numSide');
const resetButton = document.querySelector('#reset');



function gridCreate(numSide){
  
    sketchContainer.style.display = 'grid';
    sketchContainer.style.gridTemplateColumns = `repeat(${numSide}, 1fr)`;
    sketchContainer.style.gridTemplateRows = `repeat(${numSide}, 1fr)`;
    sketchContainer.style.border = '4px brown solid';

    let pixels = numSide*numSide
    
    divCreate(pixels);
}


function divCreate(numNew){
    for (let i = 0; i < numNew; i++) {
        
        const pixelDiv = document.createElement('div');
        pixelDiv.id = 'pixel'+i;
        pixelDiv.classList.add('pixel');

       
        sketchContainer.appendChild(pixelDiv);

    }
};

function newGrid(){

    let num = prompt("How man pixels per side?", 6);
    gridCreate(num);
}

function gameStart(){
    gridCreate(16);
    
    sizeButton.addEventListener('click', (e) =>{
        reset();
        num = prompt('How many pixels per side?', 16);
        gridCreate(num);
        hoverChange();
    });

    resetButton.addEventListener('click', (e)=>{
        resetColor();
        hoverChange();
    })

    
    hoverChange();
};

function reset(){
    
    while (sketchContainer.hasChildNodes()){
        sketchContainer.removeChild(sketchContainer.firstChild);
    };
};

function resetColor(){
    let pixel = document.querySelectorAll('.pixel');
    pixel.forEach((e)=>{
        e.style.background = 'white';
    })
    
}
function hoverChange(){
    let hoverPix = document.querySelectorAll('.pixel');
    hoverPix.forEach((e) => {
        
        e.addEventListener('mouseover', () => {
            paintColor = document.querySelector('#colorSelector').value;
            if(paintColor == 'black'){
                e.style.background = 'black';
            }
            else if (paintColor =='rainbow'){
                let randoColor = Math.floor(Math.random()*16777215).toString(16);
                let color = '#'+randoColor
                e.style.background = color;
            }
            else if(paintColor == 'red') {
                e.style.background = 'red';
            }
            else if (paintColor == 'yellow') {
                e.style.background = 'yellow';
            }   
            else if (paintColor == 'blue') {
                e.style.background = 'blue';
            }
            else{
               
            };
            
            
        });

    })
}


gameStart();








