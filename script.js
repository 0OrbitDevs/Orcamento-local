// =======================================================
// Orçamentos Local — script.js (Nova Versão Modernizada)
// =======================================================

const toastContainer = document.getElementById('toast-container');

function showToast(message) {
  // Criar o elemento toast
  const toast = document.createElement('div');
  toast.className = 'toast';
  
  // Adicionar ícone de check e mensagem
  toast.innerHTML = `
    <span style="color: #10b981; font-weight: bold;">✓</span>
    <span>${message}</span>
  `;
  
  toastContainer.appendChild(toast);
  
  // Forçar o reflow para permitir animação de transição
  toast.offsetHeight;
  
  // Mostrar o toast
  toast.classList.add('show');
  
  // Configurar remoção automática
  setTimeout(() => {
    toast.classList.remove('show');
    // Esperar a animação de fade/slide acabar antes de remover do DOM
    toast.addEventListener('transitionend', () => {
      toast.remove();
    });
  }, 4000);
}

// Event Listeners para os botões de download
document.getElementById('btn-windows').addEventListener('click', () => {
  showToast('Iniciando redirecionamento para o instalador Windows...');
});

document.getElementById('btn-android').addEventListener('click', () => {
  showToast('Iniciando redirecionamento para o pacote Android...');
});
