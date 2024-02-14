let emoji = document.getElementById('emoji')
let acceptBtn = document.querySelector('.accept')
let rejectBtn = document.querySelector('.reject')
let emoji1 = document.querySelector('.emoji1')
let emoji2 = document.querySelector('.emoji2')
let emoji3 = document.querySelector('.emoji3')
let Btns = document.querySelector('.btns')

function accept(){
    emoji1.classList.toggle('hide')
    emoji2.classList.toggle('show2')
    Btns.innerHTML = "I knew it.!"
    

}
function reject(){
    emoji1.classList.toggle('hide')
    emoji3.classList.toggle('show3')
    Btns.innerHTML = "Git the Gym..!"
    

}