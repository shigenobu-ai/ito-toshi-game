(() => {
  const IMAGE = './assets/03A2A4E5-6EA6-4AAC-B0A4-3FC42A26A16E.png?v=20260826-char1';
  const poses = {
    normal:   { x: 0,      y: 20.8, label: '通常' },
    rotate:   { x: 33.333, y: 20.8, label: '回転' },
    chain1:   { x: 66.666, y: 20.8, label: '1連鎖' },
    chain2:   { x: 0,      y: 41.2, label: '2連鎖' },
    chain3:   { x: 33.333, y: 41.2, label: '3連鎖' },
    chain4:   { x: 66.666, y: 41.2, label: '4連鎖以上' },
    wait:     { x: 0,      y: 61.3, label: '待機' },
    gameover: { x: 33.333, y: 61.3, label: 'ゲームオーバー' },
    clear:    { x: 66.666, y: 61.3, label: 'クリア / 終了' }
  };

  function mount(el) {
    if (!el) throw new Error('Poyona mount element not found');
    el.classList.add('poyona-character');
    el.innerHTML = '<div class="poyona-crop"><img class="poyona-sheet" alt="ポヨナ"></div>';
    const img = el.querySelector('.poyona-sheet');
    img.src = IMAGE;
    let current = 'normal';

    function show(name) {
      const p = poses[name] || poses.normal;
      current = name in poses ? name : 'normal';
      img.style.transform = `translate(${-p.x}%, ${-p.y}%)`;
      el.dataset.pose = current;
      el.setAttribute('aria-label', `ポヨナ ${p.label}`);
      return current;
    }

    function react(name) {
      show(name);
      el.classList.remove('poyona-pop');
      void el.offsetWidth;
      el.classList.add('poyona-pop');
      setTimeout(() => el.classList.remove('poyona-pop'), 520);
    }

    show('normal');
    return { show, react, get pose(){ return current; }, poses };
  }

  window.PoyonaCharacter = { mount, poses, image: IMAGE };
})();