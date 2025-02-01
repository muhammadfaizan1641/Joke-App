const url = "https://hindi-jokes-api.onrender.com/jokes/?api_key=30b91d4fb235db4f03b4979a0db3";
const container = document.getElementById("container");
const btn1 = document.getElementById("btn1");
const text = document.getElementById("text");
const loading = document.querySelector(".loading");

const getJokes = async()=>{
    text.innerText ="";
    loading.style.display="block";
    let response =  await fetch(url);
    let data =  await response.json();
    loading.style.display="none";
    text.innerText= data.jokeContent;
}

btn1.addEventListener("click",getJokes)