// Cria um elemento <object> para carregar o arquivo footer.html
const object = document.createElement('object');
object.setAttribute('type', 'text/html');
object.setAttribute('data', 'footer.html');

// Adiciona o elemento <object> ao final do corpo do documento HTML
document.body.appendChild(object);
