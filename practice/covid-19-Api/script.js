const url = "https://covid-19-statistics.p.rapidapi.com/reports/total";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "752b502536msh66fbbea6f71a107p1fb9c5jsn4943ec10f13e",
    "X-RapidAPI-Host": "covid-19-statistics.p.rapidapi.com",
  },
};


function fetchData(){

  fetch(url, options)
  .then(response => {

    console.log(response);
    return response.json()
  
  })
  .then(data => {
    display(data.data);
  })
  .catch(error => console.error(error))

}

fetchData()

function display(data){

  let totalConfirmed = document.getElementById("totalConfirmed");
  let totalActive = document.getElementById("totalActive");
  let totalDeaths = document.getElementById("totalDeaths");

  totalConfirmed.textContent = data.confirmed
  totalActive.textContent = data.active
  totalDeaths.textContent = data.deaths

}
