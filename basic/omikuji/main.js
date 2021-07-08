
let omikuji = ['大吉', '中吉', '小吉', '吉', '凶', '大凶'];
let num = Math.floor(Math.random() * omikuji.length);

let source = document.querySelector('input');
source.addEventListener('click', () => {
    num = Math.floor(Math.random() * omikuji.length);
    source.value = omikuji[num];
});


