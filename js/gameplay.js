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



let url = 'https://api.atlasacademy.io/export/JP/nice_servant_lore_lang_en.json'

fetch(url)
 .then(res=>res.json())
 .then(data=>{

   class Servant{
      constructor(name,originalName,className,gender,maxAttack,hpMax,lvMax){
         this.name = name,
         this.originalName = originalName,
         this.className = className,
         this.gender = gender,
         this.maxAttack = maxAttack,
         this.hpMax = hpMax,
         this.lvMax = lvMax
      }
   }

   class Servant1{
      constructor(id,cost,cards,noblePhantasm,starAbsorb,starGen,instantDeathChance){
         this.id = id,
         this.cost = cost,
         this.cards = cards,
         this.noblePhantasm = noblePhantasm,
         this.starAbsorb = starAbsorb,
         this.starGen = starGen,
         this.instantDeathChance = instantDeathChance
      }
   }

   // 82,196,310
   let illyaArcher = new Servant(data[82].name,data[82].originalName,data[82].className,data[82].gender,data[82].atkMax,data[82].hpMax,data[82].lvMax)
   let illyaArcher2 = new Servant1 (data[82].id,data[82].cost,data[82].cards,data[82].noblePhantasms[0].name,data[82].starAbsorb,data[82].starGen,data[82].instantDeathChance)

   let illyaCaster = new Servant(data[196].name,data[196].originalName,data[196].className,data[196].gender,data[196].atkMax,data[196].hpMax,data[196].lvMax)
   let illyaCaster2 = new Servant1 (data[196].id,data[196].cost,data[196].cards,data[196].noblePhantasms[0].name,data[196].starAbsorb,data[196].starGen,data[196].instantDeathChance)

   let sitonai = new Servant(data[310].name,data[310].originalName,data[310].className,data[310].gender,data[310].atkMax,data[310].hpMax,data[310].lvMax)
   let sitonai2 = new Servant1(data[310].id,data[310].cost,data[310].cards,data[310].noblePhantasms[0].name,data[310].starAbsorb,data[310].starGen,data[310].instantDeathChance)
   
function addSpace(title){
   return title.split('').map((ele,i)=>{
      if(ele===ele.toUpperCase() && i !== 0){
         return ' ' + ele
      }else{
         return ele
      }
  }).join('')
}

   for(let keys in illyaCaster){
      let list = document.createElement('li')

      let title = keys[0].toUpperCase()+keys.slice(1,keys.length)

      if(typeof illyaCaster[keys] !== 'string'){
         list.innerText = `${addSpace(title)} : ${illyaCaster[keys]}`
         document.querySelector('#container1').appendChild(list)
      }

      if(typeof illyaCaster[keys] === 'string'){
         list.innerText = `${addSpace(title)} : ` + illyaCaster[keys].split(' ').map(keys=>{
            return keys[0].toUpperCase()+keys.slice(1,keys.length)}).join(' ')

         document.querySelector('#container1').appendChild(list)
      }
   }

   for(let keys in illyaCaster2){
      let list = document.createElement('li')

      let title = keys[0].toUpperCase()+keys.slice(1,keys.length)

      if(typeof illyaCaster2[keys] !== 'string'){
         list.innerText = `${addSpace(title)} : ${illyaCaster2[keys]}`
         document.querySelector('#container2').appendChild(list)
      }

      if(typeof illyaCaster2[keys] === 'string'){
         list.innerText = `${addSpace(title)} : ` + illyaCaster2[keys].split(' ').map(keys=>{
            return keys[0].toUpperCase()+keys.slice(1,keys.length)}).join(' ')

         document.querySelector('#container2').appendChild(list)
      }

      if(keys === 'cards'){
         let cards  = illyaCaster2['cards'].map(keys=>{return keys[0].toUpperCase() + keys.slice(1,keys.length)}).join(' ')
         list.innerText = `${title} : ${cards}`
          document.querySelector('#container2').appendChild(list)
       }
   }




   for(let keys in sitonai){
      let list = document.createElement('li')

      let title = keys[0].toUpperCase()+keys.slice(1,keys.length)

      if(typeof sitonai[keys] !== 'string'){
         list.innerText = `${addSpace(title)} : ${sitonai[keys]}`
         document.querySelector('#container3').appendChild(list)
      }

      if(typeof sitonai[keys] === 'string'){
         list.innerText = `${addSpace(title)} : ` + sitonai[keys].split(' ').map(keys=>{
            return keys[0].toUpperCase()+keys.slice(1,keys.length)}).join(' ')

         document.querySelector('#container3').appendChild(list)
      }
   }

   for(let keys in sitonai2){
      let list = document.createElement('li')

      let title = keys[0].toUpperCase()+keys.slice(1,keys.length)

      if(typeof sitonai2[keys] !== 'string'){
         list.innerText = `${addSpace(title)} : ${sitonai2[keys]}`
         document.querySelector('#container4').appendChild(list)
      }

      if(typeof sitonai2[keys] === 'string'){
         list.innerText = `${addSpace(title)} : ` + sitonai2[keys].split(' ').map(keys=>{
            return keys[0].toUpperCase()+keys.slice(1,keys.length)}).join(' ')

         document.querySelector('#container4').appendChild(list)
      }

      if(keys === 'cards'){
         let cards  = sitonai2['cards'].map(keys=>{return keys[0].toUpperCase() + keys.slice(1,keys.length)}).join(' ')
         list.innerText = `${title} : ${cards}`
          document.querySelector('#container4').appendChild(list)
       }
   }


                     
   for(let keys in illyaArcher){
      let list = document.createElement('li')

      let title = keys[0].toUpperCase()+keys.slice(1,keys.length)

      if(typeof illyaArcher[keys] !== 'string'){
         list.innerText = `${addSpace(title)} : ${illyaArcher[keys]}`
         document.querySelector('#container5').appendChild(list)
      }

      if(typeof illyaArcher[keys] === 'string'){
         list.innerText = `${addSpace(title)} : ` + illyaArcher[keys].split(' ').map(keys=>{
            return keys[0].toUpperCase()+keys.slice(1,keys.length)}).join(' ')

         document.querySelector('#container5').appendChild(list)
      }

   }
   
   for(let keys in illyaArcher2){
      let list = document.createElement('li')

      let title = keys[0].toUpperCase()+keys.slice(1,keys.length)

      if(typeof illyaArcher2[keys] !== 'string'){
         list.innerText = `${addSpace(title)} : ${illyaArcher2[keys]}`
         document.querySelector('#container6').appendChild(list)
      }

      if(typeof illyaArcher2[keys] === 'string'){
         list.innerText = `${addSpace(title)} : ` + illyaArcher2[keys].split(' ').map(keys=>{
            return keys[0].toUpperCase()+keys.slice(1,keys.length)}).join(' ')

         document.querySelector('#container6').appendChild(list)
      }

      if(keys === 'cards'){
         let cards  = illyaArcher2['cards'].map(keys=>{return keys[0].toUpperCase() + keys.slice(1,keys.length)}).join(' ')
         list.innerText = `${title} : ${cards}`
          document.querySelector('#container6').appendChild(list)
       }
   }

 })