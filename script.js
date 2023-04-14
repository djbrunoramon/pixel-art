// Crie uma variável para armazenar a cor selecionada
let selectedColor = null;

// Selecione os elementos HTML necessários
const colorPalette = document.querySelector('.color-palette');
const pixelGrid = document.querySelector('.pixel-grid');
const gridSizeInput = document.querySelector('#grid-size');
const randomizeColorsButton = document.getElementById('randomize-colors');

// Adicione um listener de eventos para a paleta de cores
colorPalette.addEventListener('click', (event) => {
    // Verifique se o elemento clicado é uma cor
    if (event.target.classList.contains('color')) {
        // Atualize a cor selecionada
        selectedColor = event.target.style.backgroundColor;
    }
});

// Adicione um listener de eventos para a grade de pixels
pixelGrid.addEventListener('click', (event) => {
    // Verifique se o elemento clicado é um pixel
    if (event.target.classList.contains('pixel')) {
        // Preencha o pixel com a cor selecionada
        event.target.style.backgroundColor = selectedColor;
    }
});

// Adicione um listener de eventos para o input do tamanho da matriz
gridSizeInput.addEventListener('change', () => {
    // Atualize a grade de pixels com o novo tamanho
    const gridSize = parseInt(gridSizeInput.value);
    pixelGrid.innerHTML = '';
    pixelGrid.style.gridTemplateColumns = `repeat(${ gridSize }, 40px)`;
    pixelGrid.style.gridTemplateRows = `repeat(${ gridSize }, 40px)`;
    for (let i = 0; i < gridSize * gridSize; i++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixelGrid.appendChild(pixel);
    }
});

// Crie uma função para gerar cores aleatórias
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Adicione as cores aleatórias na paleta de cores
for (let i = 0; i < 4; i++) {
    const color = getRandomColor();
    const colorDiv = document.createElement('div');
    colorDiv.classList.add('color');
    colorDiv.style.backgroundColor = color;
    colorPalette.appendChild(colorDiv);
}

// Inicialize a grade de pixels com o tamanho padrão
gridSizeInput.dispatchEvent(new Event('change'));

randomizeColorsButton.addEventListener('click', () => {
  const colorDivs = document.querySelectorAll('.color-palette .color');
  colorDivs.forEach(colorDiv => {
    const color = getRandomColor();
    colorDiv.style.backgroundColor = color;
  });
});

const clearGridButton = document.getElementById('clear-grid');

clearGridButton.addEventListener('click', () => {
  const pixelDivs = document.querySelectorAll('.pixel-grid .pixel');
  pixelDivs.forEach(pixelDiv => {
    pixelDiv.style.backgroundColor = '#ffffff'; // definindo como branco, mas você pode alterar para outra cor
  });
});
