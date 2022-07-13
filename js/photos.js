

document.querySelector('#menu').addEventListener('click',showSection)

function showSection(){
    document.querySelector('#ruby').classList.add('hidden')
    document.querySelector('#navBar').classList.remove('hidden')
}

document.querySelector('#close').addEventListener('click',hideSection)

function hideSection(){
    document.querySelector('#ruby').classList.remove('hidden')
    document.querySelector('#navBar').classList.add('hidden')
}


document.querySelector('#ruby').addEventListener('click',showNav)

function showNav(){
   document.querySelector('#scroll').classList.remove('hidden')
   document.querySelector('#ruby').classList.add('hidden')

}

document.querySelector('#claws').addEventListener('click',closeNav)

function closeNav(){
    document.querySelector('#scroll').classList.add('hidden')
    document.querySelector('#ruby').classList.remove('hidden')

 }

 document.querySelector('#ruby').addEventListener('mouseenter',hoverIn)

 function hoverIn(){
    document.querySelector('.ruby').src = '/home/Nav Hover.png'
 }

 document.querySelector('#ruby').addEventListener('mouseleave',hoverOut)

 function hoverOut(){
    document.querySelector('.ruby').src = '/home/Nav Icon.png'
 }