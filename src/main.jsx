import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// ROUTER
import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';
// PAGES
import HomePage from './pages/HomePage.jsx';
import SingleProductPage from './pages/SingleProductPage.jsx';
import CartPage from './pages/CartPage.jsx';
// redux & store
import { Provider } from 'react-redux';
import store from './store/store.js';

// Clerk & KEY
import { ClerkProvider } from '@clerk/clerk-react';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
	throw new Error('Missing Publishable Key');
}

const router = createBrowserRouter([
	// APP ROUTER
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <HomePage />,
			},
			{
				path: '/singleProduct/:id',
				element: <SingleProductPage />,
			},
			{
				path: '/cart',
				element: <CartPage />
			}
		],
	},
	// Dashboard Router
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<ClerkProvider
				publishableKey={PUBLISHABLE_KEY}
				afterSignOutUrl='/'>
				<RouterProvider router={router} />
			</ClerkProvider>
		</Provider>
	</React.StrictMode>
);
