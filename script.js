async function loadProducts() {
    try {
        const response = await fetch('data.json');
        const products = await response.json();
        
        const container = document.getElementById('productos');
        container.innerHTML = ''; 
        
        products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product';
            
            const img = document.createElement('img');
            img.className = 'product-img';
            img.src = product.photo;
            img.alt = product.name;

            const title = document.createElement('div');
            title.className = 'product-title';
            title.textContent = product.name;
            
            const price = document.createElement('p');
            price.className = 'price';
            price.textContent = '$' + product.price.toFixed(2);
            card.appendChild(img);
            card.appendChild(title);
            card.appendChild(price); 
            card.addEventListener('click', () => openModal(product));
            container.appendChild(card);
        });
        
        setupModal();
        document.getElementById('year').textContent = new Date().getFullYear();
        
    } catch (error) {
        console.error('Error al cargar los productos:', error);
        alert('No se pudieron cargar los productos. Verifica que el archivo data.json existe.');
    }
}

function setupModal() {
    const modal = document.getElementById('product-modal');
    const closeButton = modal.querySelector('.modal-close');
    
    closeButton.addEventListener('click', closeModal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

function openModal(product) {
    const modal = document.getElementById('product-modal');
    
    modal.querySelector('.modal-img').src = product.photo;
    modal.querySelector('.modal-img').alt = product.name;
    modal.querySelector('.modal-title').textContent = product.name;
    modal.querySelector('.modal-price').textContent = '$' + product.price.toFixed(2);
    modal.querySelector('.modal-desc').textContent = product.description || 'Sin descripción disponible';

    modal.classList.add('show');
}

function closeModal() {
    const modal = document.getElementById('product-modal');
    modal.classList.remove('show');
}
loadProducts();