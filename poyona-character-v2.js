(() => {
  const BASE = './assets/poyona-actions-v2/';
  const poses = {
    normal:   { file:'normal.jpg',   label:'通常' },
    rotate:   { file:'rotate.jpg',   label:'回転' },
    chain1:   { file:'chain1.jpg',   label:'1連鎖' },
    chain2:   { file:'chain2.jpg',   label:'2連鎖' },
    chain3:   { file:'chain3.jpg',   label:'3連鎖' },
    chain4:   { file:'chain4.jpg',   label:'4連鎖以上' },
    wait:     { file:'wait.jpg',     label:'待機' },
    gameover: { file:'gameover.jpg', label:'ゲームオーバー' },
    clear:    { file:'clear.jpg',    label:'クリア / 終了' }
  };
  function mount(el){
    if(!el) throw new Error('Poyona mount element not found');
    el.innerHTML='<img class="poyona-action-img" alt="ポヨナ">';
    const img=el.querySelector('img');
    let current='normal';
    function show(name){
      const p=poses[name]||poses.normal;
      current=poses[name]?name:'normal';
      img.src=BASE+p.file+'?v=20260826-char2';
      img.alt='ポヨナ '+p.label;
      el.dataset.pose=current;
      return current;
    }
    function react(name){
      show(name);
      el.classList.remove('poyona-pop');
      void el.offsetWidth;
      el.classList.add('poyona-pop');
      setTimeout(()=>el.classList.remove('poyona-pop'),520);
    }
    show('normal');
    return {show,react,get pose(){return current;},poses};
  }
  window.PoyonaCharacterV2={mount,poses};
})();