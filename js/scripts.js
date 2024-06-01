// Fun��o para exibir a se��o desejada sem rolagem suave
function showSection(sectionId) {
    // Oculta todas as se��es
    const sections = document.querySelectorAll('.container');
    sections.forEach(section => {
        section.classList.add('hidden');
    });

    // Exibe a se��o desejada
    const sectionToShow = document.getElementById(sectionId);
    sectionToShow.classList.remove('hidden');
}

// Fun��o para pesquisar itens na lista de comandos do Git ou de favoritos
function searchItems(type) {
    const query = document.getElementById(type + 'Search').value.toLowerCase();
    const items = document.querySelectorAll('#' + type + 'List li');
    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(query) ? '' : 'none';
    });
}

// Fun��o para carregar os comandos Git
function loadGitCommands() {
    fetch('data/git_commands.json')
        .then(response => response.json())
        .then(commands => {
            const gitList = document.getElementById('gitList');
            commands.forEach(command => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `${command.description}<span class="example">${command.example}</span>`;
                gitList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Erro ao carregar comandos Git:', error));
}

// Fun��o para adicionar um favorito
function addFavorite() {
    const name = document.getElementById('newFavName').value;
    const url = document.getElementById('newFavURL').value;
    if (name && url) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a href="${url}" target="_blank">${name}</a> <span onclick="removeItem(this)">[Remover]</span>`;
        document.getElementById('favList').appendChild(listItem);
        document.getElementById('newFavName').value = '';
        document.getElementById('newFavURL').value = '';
    }
}

// Fun��o para remover um item da lista de favoritos
function removeItem(element) {
    element.parentElement.remove();
}

// Inicializar na se��o Home e carregar comandos Git
document.addEventListener("DOMContentLoaded", function () {
    showSection('home');
    loadGitCommands();

    // Adicionando ouvinte de evento para a tecla Enter no campo de busca do Git
    const gitSearchInput = document.getElementById('gitSearch');
    gitSearchInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            gitSearchInput.value = ''; // Limpar o valor do campo de busca
        }
    });
});
