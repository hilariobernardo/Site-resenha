function abrirModal() {
    document.getElementById('modalOverlay').classList.add('active');
}

function fecharModal() {
    document.getElementById('modalOverlay').classList.remove('active');
}


document.getElementById('modalOverlay').addEventListener('click', function (e) {
    if (e.target === this) {
        fecharModal();
    }
});

function adicionarReview(event) {
    event.preventDefault();

    const titulo = document.getElementById('titulo').value;
    const comentario = document.getElementById('comentario').value;

    const reviewsList = document.getElementById('reviewsList');

    const novoReview = `
                <div class="review-card">
                    <h3 class="review-title">${titulo}</h3>
                    <p class="review-text">${comentario}</p>
                </div>
            `;

    reviewsList.innerHTML = novoReview + reviewsList.innerHTML;

    document.getElementById('titulo').value = '';
    document.getElementById('comentario').value = '';

    fecharModal();
}