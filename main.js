{
  const ham = document.querySelector('#js-hamburger');
  const meu = document.querySelector('#clact');
  ham.addEventListener('click', function () {
    ham.classList.toggle('active');
    meu.classList.toggle('active');
  });
}

{
  const ham = document.querySelector('#js-hamburger');
  const Ul = document.getElementById('clact');
  const currentActive = document.querySelectorAll('#menu');
  currentActive.forEach(entry => {
    entry.addEventListener('click', () => {
      if (Ul.classList.contains('active') == true) {
        Ul.classList.remove('active');
        ham.classList.remove('active');
      } return;
    });
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


// graph
{
  const objects = document.querySelectorAll('.scroll-in');
  const cb = function (entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('displayed');
        observer.unobserve(entry.target);
      };
    });
  }

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0
  }

  const io = new IntersectionObserver(cb, options);
  objects.forEach(object => {
    io.observe(object);
  });
}