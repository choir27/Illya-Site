document.querySelector('#menu').addEventListener('click',showNav)

function showNav(){
   document.querySelector('.scroll').classList.remove('hidden')
   document.querySelector('.menu').classList.add('hidden')
   document.querySelector('#menu').classList.add('hidden')
}

document.querySelector('#close').addEventListener('click',closeNav)

function closeNav(){
    document.querySelector('.scroll').classList.add('hidden')
    document.querySelector('.menu').classList.remove('hidden')
    document.querySelector('#menu').classList.remove('hidden')
 }


 document.querySelector('#leftArrow').addEventListener('click',goLeft)
 document.querySelector('#rightArrow').addEventListener('click',goRight)
 let currentIndex = 1
 function goLeft(){
    if(currentIndex!==1 && currentIndex!==13){
        document.querySelector(`.section${currentIndex}`).classList.add('hidden')
        currentIndex++
        document.querySelector(`.section${currentIndex}`).classList.remove('hidden')
}else if(currentIndex===13){
    document.querySelector(`.section${currentIndex}`).classList.add('hidden')
    currentIndex = 1
    currentIndex++
    document.querySelector(`.section${currentIndex}`).classList.remove('hidden')
}

 }

 function goRight(){
    if(currentIndex!==1 && currentIndex!==13){
        document.querySelector(`.section${currentIndex}`).classList.add('hidden')
        currentIndex--
        document.querySelector(`.section${currentIndex}`).classList.remove('hidden')
    }else if(currentIndex===1){
        document.querySelector(`.section${currentIndex}`).classList.add('hidden')
        currentIndex = 13
        currentIndex--
        document.querySelector(`.section${currentIndex}`).classList.remove('hidden')
    }
 }


 document.querySelector('.left').addEventListener('click',left)
 document.querySelector('.right').addEventListener('click',right)
 let index = 1

 function left(){
if(index!==5){
    document.querySelector(`.vid${index}`).classList.add('hidden')
    document.querySelector(`.img${index}`).classList.add('hidden')
    index++
    document.querySelector(`.vid${index}`).classList.remove('hidden')
    document.querySelector(`.img${index}`).classList.remove('hidden')
}else if(index===5){
    document.querySelector(`.vid${index}`).classList.add('hidden')
    document.querySelector(`.img${index}`).classList.add('hidden')
    index = 1
    document.querySelector(`.vid${index}`).classList.remove('hidden')
    document.querySelector(`.img${index}`).classList.remove('hidden')
}
 }

 function right(){
if(index!==1){
    document.querySelector(`.vid${index}`).classList.add('hidden')
    document.querySelector(`.img${index}`).classList.add('hidden')
    index--
    document.querySelector(`.vid${index}`).classList.remove('hidden')
    document.querySelector(`.img${index}`).classList.remove('hidden')
}else if(index===1){
    document.querySelector(`.vid${index}`).classList.add('hidden')
    document.querySelector(`.img${index}`).classList.add('hidden')
    index = 5
    document.querySelector(`.vid${index}`).classList.remove('hidden')
    document.querySelector(`.img${index}`).classList.remove('hidden')
}
 }