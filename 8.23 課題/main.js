//詳細ボタン

{
  const btn3 = document.getElementById('btn3');
  const mask = document.getElementById('mask');
  const modal = document.getElementById('modal');

  btn3.addEventListener('click', () => {
    mask.classList.remove('hidden');
    modal.classList.remove('hidden');
  });

  mask.addEventListener('click', () => {
    mask.classList.add('hidden');
    modal.classList.add('hidden');
  });
}




//問い合わせ

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