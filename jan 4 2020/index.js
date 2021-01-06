const crisisResponse = []
const force = document.querySelector('#force');
const num = document.querySelector('#num')
const select = document.querySelector('select')
const imgSrc = {
    "Physical Force": 'punch.png',
    "Electrical Weapon": 'taser.png',
    "OC Spray": 'pepper.png',
    "Restraining Mesh Blanket": 'mesh.png',
    "Impact Weapon": 'baton.png'


}


select.addEventListener('change', ()=>{
    force.innerHTML=""
    const FORCETYPE = select.value;
    const URL = `https://data.cityofnewyork.us/resource/f4tj-796d.json?basisforencounter=PERSON%20IN%20CRISIS&forcetype=${FORCETYPE}`
    fetch(URL)
    .then(response => {
        return response.json()
    })
    .then(data =>{
    data.sort((a, b) => a-b)
        data.forEach(item =>{

        const div = document.createElement('div')
          const img = document.createElement('img')
          const text = document.createElement('p')
          text.innerText = item.yearmonthshort
          img.src= imgSrc[select.value]
          img.alt = item.yearmonthshort
          div.appendChild(img)
          div.appendChild(text)
          force.appendChild(div)
          
        })
        num.innerText = data.length
    });
})

    
   

   