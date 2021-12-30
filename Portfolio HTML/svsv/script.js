
var bouton = document.getElementById("btn-search");
bouton.addEventListener("click",function(){
    var input = document.getElementById("add-ean");
    var EAN = input.value;


let getProduct = () => {
    return new Promise((resolve, reject) => {
    axios.get(`https://world.openfoodfacts.org/api/v0/product/${EAN}.json`).then(datas => {
        let tbody = document.getElementById("card-body");
        let product = datas.data.product;
        var completeCard = `
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${product.image_url}" alt="Card image cap">

            <div class="card-body" >
                <h5 class="card-title">Nom du produit : ${product.product_name_fr}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>

            <ul class="list-group list-group-flush">
                <li class="list-group-item">Nutriscore : ${product.nutriscore_grade}</li>
                <li class="list-group-item">EAN du produit : ${product.id}</li>
                <li class="list-group-item">Marque du produit : ${product.brands}</li>
            </ul>

            <div class="card-body">
                <button id="btn-suppr" type = "button">Supprimer</button>
                

            </div>
        </div>`;
        
        tbody.innerHTML = completeCard;

        var boutonSup = document.getElementById("btn-suppr");
        boutonSup.addEventListener("click",function(){
            location.reload();
        });


        
        
    })
    resolve(product);
    });
};


getProduct();

});


