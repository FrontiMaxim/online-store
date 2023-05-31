import React from 'react';
import { createRoot } from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store/store';

import App from './App';

import PageBooks from './pages/PageBooks/PageBooks';
import PageCart from './pages/PageCart/PageCart';

const router = createBrowserRouter([
    {
      path: "/",
      element: <PageBooks />
    },
    {
      path: "/cart",
      element: <PageCart />,
    },
    {
      path: "/order",
      element: <div>Оформление заказа</div>,
    }
]);

const root = createRoot(document.getElementById('root')); 
root.render(
    <Provider store={store}>
        <RouterProvider router={router}>
            <App/>
        </RouterProvider>
    </Provider>
);