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