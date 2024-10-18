const modelViewer = document.querySelector('model-viewer');

modelViewer.addEventListener('load', () => {
    modelViewer.style.visibility = 'visible';
});
modelViewer.style.visibility = 'hidden';  // Oculta el modelo hasta que esté completamente cargado
