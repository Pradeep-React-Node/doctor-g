import Loadable from 'app/components/Loadable';
import { lazy } from 'react';


const ProductList = Loadable(lazy(() => import('./productlist/ProductList')));
const AddProducts = Loadable(lazy(() => import('./addproducts/AddProducts')));
const ProductDetails = Loadable(lazy(() => import('./product-details/ProductDetails')));
const EditProduct = Loadable(lazy(() => import('./edit-product/EditProduct')));

const productRoutes = [
  { path: '/products/productlist', element: <ProductList /> },
  { path: '/products/add-products', element: <AddProducts /> },
  { path: '/products/product-details', element: <ProductDetails /> },
  { path: '/products/edit-product', element: <EditProduct /> },
];

export default productRoutes;