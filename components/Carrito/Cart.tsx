// Carrito/Cart.tsx

import { useContextCarrito } from '@/Context/ProviderProducto';
import React from 'react';
import Card from '../Productos/Card';
import EliminarCarrito from '../Botones/EliminarCarrito';

export default function Cart() {
    const { productoCarrito, calculateTotal } = useContextCarrito();

    return (
        <div className="container">
            <div className="row">
                {productoCarrito.map((item) => (
                    <div className="col-md-4" key={item.IdProducto}>
                        <Card {...item} />
                        <EliminarCarrito {...item} />
                    </div>
                ))}
            </div>
            <div className="total">
                <h5>Total del carrito: ${calculateTotal().toFixed(2)}</h5>
            </div>
        </div>
    );
}
