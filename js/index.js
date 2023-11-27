// Seleciona todos os elementos de imagem dentro de elementos com a classe "img-container"
const images = document.querySelectorAll(".img-container img");

// Cria um novo IntersectionObserver
const observer = new IntersectionObserver((entries, observer) => {
  // Para cada entrada no observador de interseção
  entries.forEach((entry) => {
    // Verifica se a entrada está atualmente interseccionando com a janela de visualização
    if (!entry.isIntersecting) return;

    // Se a entrada estiver interseccionando, atualiza o atributo src da imagem
    const image = entry.target;
    image.src = image.src.replace("&w=10&", "&w=1000&");

    // Deixa de observar a imagem para evitar atualizações desnecessárias
    observer.unobserve(image);
  });
}, {});

// Observa cada elemento de imagem no NodeList 'images'
images.forEach((img) => {
  observer.observe(img);
});

