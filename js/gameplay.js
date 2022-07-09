const thumbText = document.querySelectorAll('.video')


Array.from(thumbText).forEach((element)=>{
    element.addEventListener('mouseenter', showPlay)
})

Array.from(thumbText).forEach((element)=>{
    element.addEventListener('mouseleave', hidePlay)
})

function showPlay(){
this.parentNode.childNodes[1].style.display = 'flex'
}

function hidePlay(){
this.parentNode.childNodes[1].style.display = 'none'
}
