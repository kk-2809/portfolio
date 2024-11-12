{
  const ham = document.querySelector('#js-hamburger');
  const meu = document.querySelector('#clact');
  ham.addEventListener('click', function () {
    ham.classList.toggle('active');
    meu.classList.toggle('active');
  });
}