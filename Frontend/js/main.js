// Productos de ejemplo
const productosOferta = [
    { nombre: "Vestido Floral", precio: 29.99, precioAnterior: 59.99, img: "https://picsum.photos/id/20/300/400", oferta: true },
    { nombre: "Blusa Elegante", precio: 19.99, precioAnterior: 39.99, img: "https://picsum.photos/id/21/300/400", oferta: true },
    { nombre: "Zapatos Casual", precio: 34.99, precioAnterior: 69.99, img: "https://picsum.photos/id/22/300/400", oferta: true },
    { nombre: "Bolso de Mano", precio: 24.99, precioAnterior: 49.99, img: "https://picsum.photos/id/23/300/400", oferta: true }
];

function renderProductos() {
    const contenedor = document.getElementById("productos");
    if (!contenedor) return;
    
    contenedor.innerHTML = productosOferta.map(prod => `
        <div class="card">
            ${prod.oferta ? '<div class="flash-tag">🔥 OFERTA</div>' : ''}
            <img src="${prod.img}" alt="${prod.nombre}">
            <h3>${prod.nombre}</h3>
            <p><span>$${prod.precioAnterior.toFixed(2)}</span> $${prod.precio.toFixed(2)}</p>
        </div>
    `).join('');
}

// Dark mode
function initDarkMode() {
    const btn = document.getElementById("darkModeToggle");
    const moonIcon = document.querySelector(".moon-icon");
    const sunIcon = document.querySelector(".sun-icon");
    
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        if (moonIcon && sunIcon) {
            moonIcon.style.display = "none";
            sunIcon.style.display = "block";
        }
    }
    
    if (btn) {
        btn.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            const isDark = document.body.classList.contains("dark-mode");
            
            if (isDark) {
                localStorage.setItem("darkMode", "enabled");
                if (moonIcon && sunIcon) {
                    moonIcon.style.display = "none";
                    sunIcon.style.display = "block";
                }
            } else {
                localStorage.setItem("darkMode", "disabled");
                if (moonIcon && sunIcon) {
                    moonIcon.style.display = "block";
                    sunIcon.style.display = "none";
                }
            }
        });
    }
}

// Inicializar
document.addEventListener("DOMContentLoaded", () => {
    renderProductos();
    initDarkMode();
});