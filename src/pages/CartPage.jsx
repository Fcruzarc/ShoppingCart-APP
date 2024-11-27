import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export const CartPage = () => {

    const { listaCompras, aumentarCantidad, disminuirCantidad, eliminarCompra } = useContext(CartContext)

    const calcularTotal = () => {
        return listaCompras.reduce((total, item) => total + item.price * item.cantidad, 0).toFixed(2)
    }

    const handleImpresion = () => {
        print()
    }

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listaCompras.map(item => (
                            <tr key={item.id}>
                                <th>{item.title}</th>
                                <td>{item.price.toFixed(2)}</td>
                                <td>
                                    <button
                                        className="btn btn-outline-primary"
                                        onClick={() => disminuirCantidad(item.id)}> - </button>
                                    <button className="btn btn-primary"> {item.cantidad}</button>
                                    <button
                                        className="btn btn-outline-primary"
                                        onClick={() => aumentarCantidad(item.id)}> + </button>
                                </td>
                                <td><button
                                    type='button'
                                    className="btn btn-danger"
                                    onClick={() => eliminarCompra(item.id)}
                                >Eliminar
                                </button>
                                </td>
                            </tr>
                        ))
                    }
                      <tfoot>
                    <tr>
                        <th colSpan="3" className="text-end">Total:</th>
                        <td>${calcularTotal()}</td>
                    </tr>
                </tfoot>

                </tbody>
            </table>

            <div className='d-grid gap-2'>
                <button className="btn btn-primary"
                    onClick={handleImpresion} disabled={listaCompras<1}>COMPRAR</button>
            </div>
        </>
    )
}
