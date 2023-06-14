const inputEl = document.getElementsByTagName("input")
const buttonEl = document.getElementsByTagName("button")
const oneEl = document.getElementById("one")
const twoEl = document.getElementById("two")
const threeEl = document.getElementById("three")



const getValue=()=>{
    const num = inputEl[0].value
   console.log(num) 
   
    const feet = Math.floor(num * 3.28084)
    const meters = Math.floor(num /3.82)
     
    const gallons = Math.floor(num * 0.264172)
    const liters = Math.floor(num /0.2641)

    const pounds = Math.floor(num/0.45359237)
    const kilos = Math.floor(num * 0.4539237) 
    console.log(feet)
    console.log(meters)
    console.log(liters)
    console.log(kilos)
    console.log(pounds)


    oneEl.textContent =`${num} meters =${feet} feet | ${num} feet = ${meters} meters`
    twoEl.textContent =`${num} liters =${gallons} gallons | ${num} gallons = ${liters} liters`
    threeEl.textContent =`${num} Kilos =${pounds} pounds | ${num} pounds = ${kilos} Kilos`

}



