import data from './productdata.json' assert {type:'json'}
const dataArr = data
const store = document.getElementById('store')
const button = document.getElementById('showproducts')
const productCard = document.createElement('div')
function showStore () {
 
    store.appendChild(productCard)
}

dataArr.forEach(item => {
    let newDiv = document.createElement('div')
    let newDivImg = document.createElement('img')
     newDiv.innerText = `${item.title} ${item.price}`
     newDivImg.setAttribute ("src", `${item.image}`)
     newDiv.appendChild(newDivImg)
    store.appendChild(newDiv)
})

console.log(dataArr)


button.addEventListener('click', showStore)