

'use client'
import { Producto } from '@/Modelos/Producto';
import React, { ReactNode, useContext, useState } from 'react';
import { ContextProducto } from './ContextProducto';

interface VistaComponete {
    children: ReactNode;
}

export default function ProviderProducto({ children }: VistaComponete) {

    const [productos, setProductos] = useState<Producto[]>([]);
    const [productoCarrito, setProductoCarrito] = useState<Producto[]>([]);

   
    const addToCart = (item: Producto) => {
        setProductoCarrito([...productoCarrito, item]);
    };

  
    const removeFromCart = (producId: number) => {
        setProductoCarrito(productoCarrito.filter(producto => producto.IdProducto !== producId));
    };

    
    const calculateTotal = () => {
        return productoCarrito.reduce((acc, item) => acc + parseFloat(item.PrecioProducto) + parseFloat(item.IsvProducto), 0);
    };

    return (
        <ContextProducto.Provider value={{ productos, setProductos, productoCarrito, setProductoCarrito, addToCart, removeFromCart, calculateTotal }}>
            {children}
        </ContextProducto.Provider>
    );
}

export function useContextCarrito() {
    return useContext(ContextProducto);
}
