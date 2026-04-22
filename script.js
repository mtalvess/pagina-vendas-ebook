
// efeito simples de botão (opcional)
document.querySelectorAll('.btn').forEach(btn => {
btn.addEventListener('click', () => {
btn.innerText = "Redirecionando...";
});
});
