// Botonos/EliminarCarrito.tsx

import { useContextCarrito } from '@/Context/ProviderProducto';
import { Producto } from '@/Modelos/Producto';
import React from 'react';

export default function EliminarCarrito(item: Producto) {
    const { removeFromCart } = useContextCarrito();

    return (
        <div>
            <a href="#" className="btn btn-danger" onClick={() => removeFromCart(item.IdProducto)}>Eliminar del carrito</a>
        </div>
    );
}
