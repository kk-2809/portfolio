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
// {
//   const CLASSNAME = "-visible";
//   const TIMEOUT = 1500;
//   const $target = $(".title");

//   setInterval(() => {
//     $target.addClass(CLASSNAME);
//     setTimeout(() => {
//       $target.removeClass(CLASSNAME);
//     }, TIMEOUT);
//   }, TIMEOUT * 2);
// }




//graph
{
  function callback(entrys, obs) {
    entrys.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }
      entry.target.classList.add("app");
      obs.unobserve(entry.target);
    });
  };
    const options = {
      threshold: 0.2,
    };
    const observer = new IntersectionObserver(callback, options);
    const targets = document.querySelectorAll(".graph");

    targets.forEach(target =>{
      observer.observe(target);
    });
}


//scroll
{
const pagetopBtn = document.querySelector('.to-pagetop');

toScrollTop = () => {
  window.scroll({
    top: 0,
    behavior: "smooth"
  });
}

const scrollEvents = () => {
  if (window.scrollY > 100) {
    pagetopBtn.classList.add('is-shown');
  } else if (window.scrollY < 100) {
    pagetopBtn.classList.remove('is-shown');
  }
}

pagetopBtn.addEventListener('click', toScrollTop);
window.addEventListener('scroll', scrollEvents);
}