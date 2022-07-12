document.querySelector('#menu').addEventListener('click',showNav)

function showNav(){
   document.querySelector('.scroll').classList.remove('hidden')
   document.querySelector('#menu').classList.add('hidden')
}

document.querySelector('#close').addEventListener('click',closeNav)

function closeNav(){
    document.querySelector('.scroll').classList.add('hidden')
    document.querySelector('#menu').classList.remove('hidden')
 }


//  document.querySelector('#bars').addEventListener('click',showNav)
//  document.querySelector('#claws').addEventListener('click',closeNav)
