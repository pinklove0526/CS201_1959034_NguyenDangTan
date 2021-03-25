document.addEventListener("DOMContentLoaded", function()
{
    getProducts();
    function getProducts()
    {
      let url = "https://fakestoreapi.com/products";
      let xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);
      xhr.onload = function()
      {
        if(this.status == 200)
        {
          let res = JSON.parse(this.responseText);
          outputProducts(res);
        }
      }
      xhr.send();
    }
    function outputProducts(products)
    {
        let productdiv = document.querySelector(".products");
        console.log(products);
        let out = "";
        let c = 0;
        products.forEach((product) =>
        {
            if (c == 10) return;
            else
            {
                out += `<div class="container">
                <div class="col-md-4 item" style="display: flex; text-align: center">
                <h3>${product.title}</h3>
                <h3>${product.price}</h3>
                <img src="${product.image}" alt="">
                </div>
                </div>`;
                c++;
            }
        });
        out += "<hr class='mb-5 mt-3'>";
        productdiv.innerHTML = out;
    }
})