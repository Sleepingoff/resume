"use strict";
const TAB = document.querySelectorAll("article h2");
const DIV = document.querySelectorAll('article div.wrap');
const INTRO = document.querySelector("section#intro");
const introHeight = INTRO === null || INTRO === void 0 ? void 0 : INTRO.clientHeight;
TAB.forEach((tab, index) => {
    const div = tab.closest('div');
    const Btn = tab.querySelector('button');
    Btn === null || Btn === void 0 ? void 0 : Btn.addEventListener('click', () => {
        var _a, _b;
        DIV.forEach((elem) => {
            elem !== div ? elem.classList.add('off-siblings') : elem.classList.remove('off-siblings');
        });
        const height = (introHeight !== null && introHeight !== void 0 ? introHeight : 0) + ((_b = (_a = tab.nextElementSibling) === null || _a === void 0 ? void 0 : _a.clientHeight) !== null && _b !== void 0 ? _b : 0);
        INTRO === null || INTRO === void 0 ? void 0 : INTRO.setAttribute("style", `height: ${height}px`);
    });
});
