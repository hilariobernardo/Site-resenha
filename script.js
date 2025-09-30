function abrirModal() {
            document.getElementById('modalOverlay').classList.add('active');
        }

        // Função para fechar o modal
        function fecharModal() {
            document.getElementById('modalOverlay').classList.remove('active');
        }

        // Fechar ao clicar fora do modal
        document.getElementById('modalOverlay').addEventListener('click', function(e) {
            if (e.target === this) {
                fecharModal();
            }
        });

        // Função para adicionar review usando innerHTML
        function adicionarReview(event) {
            event.preventDefault();
            
            const titulo = document.getElementById('titulo').value;
            const comentario = document.getElementById('comentario').value;
            
            // Pegando a lista de reviews
            const reviewsList = document.getElementById('reviewsList');
            
            // Criando o HTML do novo review
            const novoReview = `
                <div class="review-card">
                    <h3 class="review-title">${titulo}</h3>
                    <p class="review-text">${comentario}</p>
                </div>
            `;
            
            // MELHOR FORMA com innerHTML: usar += para adicionar sem apagar o anterior
            reviewsList.innerHTML = novoReview + reviewsList.innerHTML;
            
            // Limpar os campos
            document.getElementById('titulo').value = '';
            document.getElementById('comentario').value = '';
            
            // Fechar o modal
            fecharModal();
        }