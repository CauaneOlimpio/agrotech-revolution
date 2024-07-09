document.addEventListener('DOMContentLoaded', () => {
    const farm = document.getElementById('farm');
    const plantButton = document.getElementById('plant');
    const waterButton = document.getElementById('water');
    const harvestButton = document.getElementById('harvest');

    let action = null;

    // Create farm tiles
    for (let i = 0; i < 100; i++) {
        const tile = document.createElement('div');
        tile.classList.add('tile');
        tile.addEventListener('click', () => handleTileClick(tile));
        farm.appendChild(tile);
    }

    plantButton.addEventListener('click', () => action = 'plant');
    waterButton.addEventListener('click', () => action = 'water');
    harvestButton.addEventListener('click', () => action = 'harvest');

    function handleTileClick(tile) {
        if (action === 'plant') {
            tile.classList.add('planted');
            tile.classList.remove('watered');
        } else if (action === 'water') {
            if (tile.classList.contains('planted')) {
                tile.classList.add('watered');
            }
        } else if (action === 'harvest') {
            if (tile.classList.contains('watered')) {
                tile.classList.remove('planted', 'watered');
            }
        }
    }
});
