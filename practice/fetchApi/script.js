let img = document.getElementById("img");

const changeImg = ()=>{
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(res=>res.json())
    .then(data => img.src = data.message)
    .catch(error=> console.error('Error:',error.message));
}

changeImg();

setInterval (()=>{
    changeImg();
},)
    
