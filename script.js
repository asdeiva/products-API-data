// Add the API URL
const url = "https://dummyjson.com/products";
// To fetch data from an API using .then

  fetch(url,{
    method: "GET"
  })
  .then((response) => response.json())
  .then((data) => {
    console.log(data.products)
    let myData= data.products
    // to apend data to html document = function
    fetchProduct(myData)
  })
  .catch((error) => console.log(error));


  function fetchProduct(data) {
    var products = document.getElementById("productList");
    for (var i = 0; i < data.length; i++) {
      var product = `<div class="products-display-productlist-product">
                    <div class="">
                        <img src="${data[i].thumbnail}" alt="productImage">
                    </div>
                    <div class="product-details">
                        <div class="product-tittle-brand product-text">
                            <div class="product-tittle">
                                Tittle: ${data[i].title}
                            </div>
                            <div class="product-brand">
                                Brand: ${data[i].brand}
                            </div>
                        </div>
                        <div class="product-price product-text">
                            Price: $${data[i].price}
                        </div>
                        <div class="product-rating product-text">
                            Rating: ${data[i].rating}
                        </div>
                        <div class="product-stock product-text">
                            Stock: ${data[i].stock}
                        </div>
                    </div>`;  
      products.innerHTML += product;
    }
  
  }
  