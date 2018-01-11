//增加样式
function addClass(kls, dom) {
    let klsReg = new RegExp(kls, 'ig');
    if (dom.length) {
        for (let i = 0; i < dom.length; i++) {
            let node = dom[i];
            let klses = node.className;
            if (!klsReg.test(klses)) {
                node.className = klses + ' ' + kls
            }
        }
    }else {
        let klses = dom.className;
        if (!klsReg.test(klses)) {
            dom.className = klses + ' ' + kls;
        }
        }
}

// 删除class
function removeClass(kls, dom) {
    let klsReg = new RegExp(kls, 'ig');
    if (dom.length) {
        for (let i = 0; i < dom.length; i++) {
            let node = dom[i];
            let klses = node.className;
            if (klsReg.test(klses)) {
                node.className = node.className.replace(kls, '')
            }
        }
    } else {
        let klses = dom.className;
        if (klsReg.test(klses)) {
            dom.className = dom.className.replace(kls, '')
        }
    }
}

function getStyle(obj, arr) {
    if (obj.currentStyle) {//所有的ie
        return obj.currentStyle[arr];
    } else if(window.getComputedStyle){//ie9+ chrome fireFox
        return document.defaultView.getComputedStyle(obj, null)[arr];
    }
    return null;
}