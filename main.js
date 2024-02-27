async function productss(){

    try {
        const response = await axios.get("https://dummyjson.com/products");
        const products = response.data.products;
        console.log(products);

        const market = document.querySelector(".market");
        const result=products.map( function(ele){
            return `
            <div class="Properties1">
                    <h2>${ele.title}</h2>
                    <br>
                   <img src="${ele.thumbnail}"/>
                   <br>
                   <a href="details.html?product_id=${ele.id}">details</a>
                  </div>
            `;
            }).join('');
            
    document.querySelector(".market").innerHTML=result;
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}


document.querySelector(".market").classList.add('Properties');
productss();

