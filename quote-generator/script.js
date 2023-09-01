const quote = document.getElementById("quote");
const author = document.getElementById("author");
const btn =document.getElementById("newQuote");
const api_url ="https://api.quotable.io/random";

async function getQuote(url){
    const resp = await fetch(url);
    const respData = await resp.json();
    quote.innerHTML = respData.content;
    author.innerHTML=respData.author;
}
getQuote(api_url);
btn.addEventListener('click',()=>{
    getQuote(api_url);
});