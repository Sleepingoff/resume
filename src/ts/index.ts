const TAB:NodeListOf<Element> = document.querySelectorAll("article h2");
const DIV:NodeListOf<Element> = document.querySelectorAll('article div.wrap');
const INTRO:Element | null = document.querySelector("section#intro");
const introHeight = INTRO?.clientHeight;

TAB.forEach((tab:Element, index:number)=>{
    const div:HTMLDivElement | null = tab.closest('div');
    const Btn:HTMLButtonElement | null = tab.querySelector('button');
    
    Btn?.addEventListener('click', ()=>{
        DIV.forEach((elem:Element)=>{
            elem !== div ? elem.classList.add('off-siblings') : elem.classList.remove('off-siblings');
        })
        const height = (introHeight ?? 0) + (tab.nextElementSibling?.clientHeight ?? 0)
        INTRO?.setAttribute("style", `height: ${height}px`);
    })
})



