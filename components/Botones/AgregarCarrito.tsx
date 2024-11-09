// Botonos/AgregarCarrito.tsx

import { useContextCarrito } from '@/Context/ProviderProducto';
import { Producto } from '@/Modelos/Producto';
import React from 'react';

export default function AgregarCarrito(item: Producto) {
    const { addToCart } = useContextCarrito();

    return (
        <div>
            <a href="#" className="btn btn-primary" onClick={() => addToCart(item)}>Agregar al carrito</a>
        </div>
    );
}
