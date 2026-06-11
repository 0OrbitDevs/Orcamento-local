// ===========================
// Orçamentos Local — script.js
// ===========================

const note = document.getElementById('download-note');

function showNote(text) {
  note.textContent = text;
  note.style.opacity = '1';
  clearTimeout(note._timeout);
  note._timeout = setTimeout(() => {
    note.style.opacity = '0';
    setTimeout(() => { note.textContent = ''; }, 400);
  }, 4000);
}

document.getElementById('btn-windows').addEventListener('click', () => {
  showNote('Redirecionando para o Google Drive...');
});

document.getElementById('btn-android').addEventListener('click', () => {
  showNote('Redirecionando para o Google Drive...');
});
