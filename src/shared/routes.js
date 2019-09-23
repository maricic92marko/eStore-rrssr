import React from 'react';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import OrderPage from './pages/OrderPage';
import CheckOutPage from './pages/CheckoutPage'
import Alerts from './pages/AlertPage'
import ProductDetailsPage from './pages/ProductDetailsPage'
import ProductListPage from './pages/ProductListPage'
import InfoContactPage from './pages/InfoContactPage'


const routes = [

    {
        path: '/',
        exact: true,
        component: HomePage,
    },
    {
        path: '/cart',
        exact: true,
        component: CartPage,
    },
    {
        path: '/orders',
        exact: true,
        component: OrderPage,
    },
    {
        path: '/checkout',
        exact: true,
        component: CheckOutPage,
    },
    {
        path: '/alerts:uuid?:email?',
        exact: true,
        component: Alerts,
    },
    {
        path: '/productlist:id?',
        component: ProductListPage,
    },
    {
        path: '/productdetails:id?',
        component: ProductDetailsPage
    },
    {
        path: '/infocontact',
        exact: true,
        component: InfoContactPage,
    }
    
]

export default routes