// let url = "https://jsonplaceholder.typicode.com/photos"
// fetch(url)
// .then(response => response.json())
//       .then(json => console.log(json))

let url = "https://jsonplaceholder.typicode.com/photos"
let t = document.querySelector(".h")
const Api = async()=>{
      let Api = await fetch(url)
      let data = await Api.json()
      let html = "";
      
      data.map((Element) => {
            html+= ` <div class="t">
            <img src="${Element.albumId}" alt="">
            <p id="h">lorem</p>
        </div>
        </div>`

      })
      
      
      t.innerHTML = html;

}


Api()