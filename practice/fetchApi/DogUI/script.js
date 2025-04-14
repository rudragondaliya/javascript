// let breeds = document.getElementById("breeds");
// let dogImg = document.getElementById("dogImg");

// fetch("https://dog.ceo/api/breeds/list/all")
//     .then((res)=> res.json()
//     )
//     .then((data)=>{
//         let breedList = Object.keys(data.message);
//         breedList.forEach((breed)=>{
//             let option = document.createElement("option")
//             option.value = breed;
//             option.innerText = breed;

//             breeds.append(option);
//         })

//     })
//     .catch((error)=>{
//         console.log(error);
//     })

// const displayIImg = ()=>{
//     let breedSelect = breeds.value;
//     fetch("https://dog.ceo/api/breeds/image/random")
//          .then((res)=>{
//             return res.json()
//          })
//          .then((data)=>{
//             dogImg.src = data.message
//             dogImg.alt = breedSelect;
//          })
//          .catch((error)=>{
//             console.log(error);
//          })

//         }


let breeds = document.getElementById("breeds");
let dogImg = document.getElementById("dogImg");

fetch("https://dog.ceo/api/breeds/list/all")
    .then((res =>{
        return res.json();
    }))
    .then((data)=>{
        let breedList = Object.keys(data.message);
        breedList.forEach((breed)=>{
            let option = document.createElement("option");
            option.value = breed;
            option.innerText = breed;

            breeds.append(option);
        })
    })

const display = ()=>{
    let breedSelect = breeds.value;
    fetch("https://dog.ceo/api/breeds/image/random")
     .then((res)=>{
        return res.json();
     })
     .then((data)=>{
        dogImg.src = data.message;
        dogImg.alt = breedSelect;
     })
     .catch((error)=>{
        console.log(error)
     })
}