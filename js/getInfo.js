//URL DE API
const API = "https://pokeapi.co/api/v2/pokemon/ditto";

//Obtener Resultado de API
const getData = (api) => {
  return fetch(api)
    .then((response) => response.json())
    .then((json) => {
      llenarDatos(json);
      console.log(json);
    })
    .catch((error) => {
      console.log("Error", error);
    })
}

//los personajes en mi pagina el data el json
const llenarDatos = (data) => {

  let html = "";


    html += '<div class="col">';
    html += '<div class="card" style="width: 15rem;">';
    html += `<img src="${data.sprites.other.dream_world.front_default}" alt="Foto del personaje"> `;
    html += '<div class="card-body">';
    html += `<h5 class="card-title">${data.name}</h5>`;
    html += `<p class="card-text">${data.abilities[0].ability.name}</p>`;
    html += `<p class="card-text"><b>Height: </b>${data.height}</p>`
    html += '</div>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    
 

  document.getElementById("datosPersonajes").innerHTML = html

}


//EjecutargetData
getData(API);


