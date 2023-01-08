// Store the wallet amount to your local storage with key "amount"
let count=JSON.parse(localStorage.getItem("amount"))||[]
let wallet=document.getElementById("wallet")
let inwall=document.getElementById("amount")
wallet.innerText=count

function addwall(){
   
   count=Number(count)+Number(inwall.value)
   wallet.innerText=count
 localStorage.setItem("amount",JSON.stringify(count))
   console.log(lswallet)   
}