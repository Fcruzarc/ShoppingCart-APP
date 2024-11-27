import React, { useContext } from 'react'
import { Card } from '../components/Card'
import { ProductosContext } from '../context/ProductosContext'
import { CartContext } from '../context/CartContext'


export const PurchasePage = () => {

    const { productos } = useContext(ProductosContext)
    const { agregarCompra, eliminarCompra } = useContext(CartContext)

    const handleAgregar = (compra) => {
        if (!compra || !compra.id) return; // Validar que el producto sea válido
        agregarCompra(compra)

    }
    const handleQuitar = (id) => {
        if (!id) return; // Validar que el ID sea válido
        eliminarCompra(id)
    }
    
    if (!productos || productos.length === 0) {
        return <p>No hay productos disponibles</p>;
    }

    return (
        <>
            <h1>Compras: </h1>
            <hr />

            {productos.map(producto => (
                <Card
                    key={producto.id}
                    imagen={producto.image}
                    titulo={producto.title}
                    descripcion={producto.description}
                    precio={producto.price}
                    handleAgregar={() => handleAgregar(producto)}
                    handleQuitar={() => handleQuitar(producto.id)}
                >

                </Card>
            ))}

        </>
    )
}
