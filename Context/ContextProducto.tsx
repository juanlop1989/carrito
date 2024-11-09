

'use client'

import { Producto } from "@/Modelos/Producto";
import { createContext } from "react";

export interface ContextProductoType {
    productos: Producto[];
    setProductos: (producto: Producto[]) => void;
    productoCarrito: Producto[];
    setProductoCarrito: (producto: Producto[]) => void;
    addToCart: (item: Producto) => void;
    removeFromCart: (producId: number) => void;
    calculateTotal: () => number;
}

export const ContextProducto = createContext<ContextProductoType>({
    productos: [],
    setProductos: () => {},
    productoCarrito: [],
    setProductoCarrito: () => {},
    addToCart: () => {},
    removeFromCart: () => {},
    calculateTotal: () => 0
});
