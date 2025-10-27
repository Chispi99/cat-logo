async function loadProducts() {

    var data= await fetch('data.json');
    var products = await data.json();
    var container = document.getElementById('productos');
    container.innerHTML = '';

    //Accedemos a cada uno de los elementos de products
    products.forEach(product => {
        //Crear un div por cada producto
        var element = document.createElement('h3');
        //Le asignamos la clase producto
        element.className = 'productos';
        //Le ponemos el contenido HTML
        element.innerHTML = product.name;
        //Hacemos que el nuevo div esté dentro del contenedor
        container.appendChild(element);

        var element2 = document.createElement('p');
         element2.classPrice = 'productos';
        element2.innerHTML = product.price;
        container.appendChild(element2);

    });
        
    


}
loadProducts();