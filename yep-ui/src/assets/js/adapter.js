(function (win, doc) {
  const docEl = doc.documentElement;

  function setRemUnit() {
    const docWidth = docEl.clientWidth;
    const rem = docWidth / 10;
    docEl.style.fontSize = `${rem}px`;
  }

  win.addEventListener('resize', () => {
    setRemUnit();
  }, false);
  win.addEventListener('pageshow', (e) => {
    if (e.persisted) {
      setRemUnit();
    }
  }, false);

  setRemUnit();

  if (win.devicePixelRatio && win.devicePixelRatio >= 2) {
    const testEl = doc.createElement('div');
    const fakeBody = doc.createElement('body');
    testEl.style.border = '0.5px solid transparent';
    fakeBody.appendChild(testEl);
    docEl.appendChild(fakeBody);
    if (testEl.offsetHeight === 1) {
      docEl.classList.add('hairlines');
    }
    docEl.removeChild(fakeBody);
  }
}(window, document));
