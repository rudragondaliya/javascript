let root = document.getElementById("root");

async function fetchdata() {
    
    try
    {
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json();
        root.innerHTML = "";

    data.forEach((product)=>{
        const col = document.createElement("div");
        col.classList.add("col-md-3")

        col.innerHTML = 
        `
        <div class="card" style="width: 18rem;">
            <img src="${product.image}" class="card-img-top" alt="..." style = "height:200px" "width:250px">
            <div class="card-body">
              <h5 class="card-title"><small>${product.title}</h5>
              <p class="card-text"></p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>  

        `;
        root.append(col);
    })
        console.log(data);
    }
    catch(error){
        console.log(error)
    }
}



fetchdata()