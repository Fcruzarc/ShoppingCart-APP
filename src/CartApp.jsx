import React from 'react'
import NavBar from './components/NavBar'
import { Navigate, Route, Routes } from 'react-router-dom'
import { PurchasePage } from './pages/PurchasePage'
import { CartPage } from './pages/CartPage'
import { ProductosProvider } from './context/ProductosProvider'
import { CartProvider } from './context/CartProvider'




export const CartApp = () => {
    return (
        <ProductosProvider>
            <CartProvider>
                <NavBar></NavBar>
                <div className='container'>
                    <Routes>
                        <Route path='/' element={<PurchasePage></PurchasePage>}></Route>
                        <Route path='/carrito' element={<CartPage></CartPage>}></Route>
                        <Route path='/*' element={<Navigate to='/' />}></Route>
                    </Routes>
                </div>
            </CartProvider>
        </ProductosProvider>
    )
}
