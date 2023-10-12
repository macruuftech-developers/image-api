// let url = "https://jsonplaceholder.typicode.com/photos"
// fetch(url)
// .then(response => response.json())
//       .then(json => console.log(json))

let url = "https://jsonplaceholder.typicode.com/photos";
let t = document.querySelector(".t");

const Api = async () => {
  let Api = await fetch(url);
  let data = await Api.json();
  let html = "";

  data.map((Element) => {
    html += `<div class="t">
            <img src="${Element.url}" alt="">
            <p id="h">${Element.title}</p>
        </div>
        </div>`;
  });

  t.innerHTML = html;
};

Api();
