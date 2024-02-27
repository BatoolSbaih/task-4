async function showDetails() {
   try {
      const urlParams = new URLSearchParams(window.location.search);
      const id = urlParams.get('product_id');
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      const product = response.data;
      console.log(product);
   
      let result = 
      `
      <h2> ${product.title}</h2>
      <p> <span> Description : </span> ${product.description}</p>
      <p><span> Price : </span>  ${product.price} $</p>
      <p><span> Discount Percentage : </span>${product.discountPercentage}</p>
      <p><span> Rating : </span>${product.rating}</p>
      <p><span> Stock : </span> ${product.stock}</p>
      <p><span> Brand : </span> ${product.brand}</p>
      <p><span> Category :  </span>${product.category}</p>
      `;
      
      document.querySelector(".product").innerHTML = result;
   } catch (error) {
       console.error("Error fetching product details:", error);
   }
}
showDetails();
