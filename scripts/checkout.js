// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let moviearr=JSON.parse(localStorage.getItem("movie"))||[]
let count=JSON.parse(localStorage.getItem("amount"))||[]
let wallet=document.getElementById("wallet")
wallet.innerText=count
let movie=document.getElementById("movie")
let seats=document.getElementById("number_of_seats")



Display(moviearr)
function Display(data){
movie.innerHTML=""
data.forEach(el => {
    let div=document.createElement("div")
    let title=document.createElement("h1")
    title.innerText=el.Title
    let poster=document.createElement("img")
    poster.src=el.Poster
    div.append(title,poster)
    movie.append(div)
});
}
let btn=document.getElementById("confirm")
btn.addEventListener("click",function(){
    suff(count)
})


function suff(count){
    if(Number(count)>=Number(seats.value)*100){
        alert ("Booking successful!")
        count=count-Number(seats.value)*100
        localStorage.setItem("amount",JSON.stringify(count))
        wallet.innerText=count
    }
    else{
        alert("Insufficient Balance!")
    }
    

}
