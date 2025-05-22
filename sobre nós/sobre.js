document.getElementById('form-campeonato').addEventListener('submit', function(e) {
  e.preventDefault();
  const mensagem = document.getElementById('mensagem');
  mensagem.textContent = 'Campeonato cadastrado com sucesso!';
  mensagem.style.color = 'green';
  mensagem.style.fontWeight = 'bold';
  mensagem.style.animation = 'fadeIn 1s ease-in';
  this.reset();
});
