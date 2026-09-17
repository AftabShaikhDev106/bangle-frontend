import React from 'react';
import AppRoutes from './routes/AppRoutes';
import { WishlistProvider } from './context/WishlistContext';
import WishlistDrawer from './components/wishlist/WishlistDrawer';

function App() {
  return (
    <WishlistProvider>
      <AppRoutes />
      <WishlistDrawer />
    </WishlistProvider>
  );
}

export default App;
