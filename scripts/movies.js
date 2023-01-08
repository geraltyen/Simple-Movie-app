// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let count=JSON.parse(localStorage.getItem("amount"))||[]
let wallet=document.getElementById("wallet")
wallet.innerText=count
let movies=document.getElementById("movies")

let moviearr=JSON.parse(localStorage.getItem("movie"))||[]



async function main(){
    try{
        let search=document.getElementById("search").value
        let res= await fetch(`https://www.omdbapi.com/?apikey=cb0421d1&s=${search}`)
        let data= await res.json()
        console.log(data)
        Display(data.Search)
    }
    catch(err){
        console.log("error")
    }
}

function Display(data){
movies.innerHTML=""
data.forEach((el)=>{
    let div=document.createElement("div")
    let img=document.createElement("img")
    img.src=el.Poster
    let title=document.createElement("h3")
    title.innerText=el.Title
    let book=document.createElement("button")
    book.innerText="Book Now"
    book.class="book_now"
    book.addEventListener("click",function(){
        moviearr=[]
        moviearr.push(el)
        localStorage.setItem("movie",JSON.stringify(moviearr))
        window.location.href="checkout.html"
    })
    div.append(img,title,book)
    movies.append(div)
})
}