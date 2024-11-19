{
  const ham = document.querySelector('#js-hamburger');
  const meu = document.querySelector('#clact');
  ham.addEventListener('click', function () {
    ham.classList.toggle('active');
    meu.classList.toggle('active');
  });
}

{
  const currentActive = document.querySelectorAll('#menu');
    currentActive.addEventListener('click',e => {
      e.preventDefault();
      if (currentActive.classList.contains('active') == true) {
        currentActive.classList.remove('active');
      } return;
    });
}


// name
{
  const CLASSNAME = "-visible";
  const TIMEOUT = 1500;
  const $target = $(".title");

  setInterval(() => {
    $target.addClass(CLASSNAME);
    setTimeout(() => {
      $target.removeClass(CLASSNAME);
    }, TIMEOUT);
  }, TIMEOUT * 2);
}