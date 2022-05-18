// https://breakingbadapi.com/api/characters/6
// Display the name, image and status of the character returned.

const url = "https://breakingbadapi.com/api/characters/6";
const details = document.querySelector(".details");

async function getData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    details.innerHTML = ` <div class="details>
                                  <h2 class="name">${data[0].name} </h2>
                                  <img class="image" src="${data[0].img}" alt="an image">
                                  <h3 class="status"> ${data[0].status}
                                  </div>"`;
  } catch (error) {
    console.log(error);
  }
}

getData();

// const url = "https://breakingbadapi.com/api/characters/6";

// const detailContainer = document.querySelector(".details");

// // we need an async function as we are using await
// async function fetchCharacter() {
//   try {
//     const response = await fetch(url);
//     const result = await response.json();
//     // the endpoint is an array with one result, so we need to access the first item in the array
//     const details = result[0];
//     // pass the details to the function that will create the HTML
//     createHtml(details);
//   } catch (error) {
//     console.log(error);
//     detailContainer.innerHTML = error;
//   }
// }

// // call the function
// fetchCharacter();

// function createHtml(details) {
//   detailContainer.innerHTML = `<h1 class="name">${details.name}</h1>
//                                 <div class="image" style="background-image: url('${details.img}')"></div>
//                                 <div class="status">Status: <b>${details.status}</b></div>`;
//}
