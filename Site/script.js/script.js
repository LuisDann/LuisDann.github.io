const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const cpf = document.getElementById('cpf').value.trim();
  const telefone = document.getElementById('telefone').value.trim();
  const dataNascimento = document.getElementById('data-nascimento').value;

  if (!nome || !cpf || !telefone || !dataNascimento) {
    alert('Por favor, preencha todos os campos obrigatórios.');
    return;
  }

  const data = { nome, cpf, telefone, dataNascimento };

  fetch('http://localhost:3000/salvar-dados', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then(response => {
      if (response.ok) {
        alert('Dados enviados com sucesso!');
        form.reset();
      } else {
        alert('Erro ao enviar os dados.');
      }
    })
    .catch(error => {
      console.error('Erro:', error);
      alert('Erro ao enviar os dados.');
    });
});
