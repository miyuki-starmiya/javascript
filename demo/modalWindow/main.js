
'use strict';

let open = document.getElementById('open');
let close = document.getElementById('close');
let modal = document.getElementById('modal');
let mask = document.getElementById('mask');

open.addEventListener('click', () => {
    modal.classList.remove('hidden');
    mask.classList.remove('hidden');
})

close.addEventListener('click', () => {
    modal.classList.add('hidden');
    mask.classList.add('hidden');
})


