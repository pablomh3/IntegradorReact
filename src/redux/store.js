import { combineReducers, configureStore } from "@reduxjs/toolkit";
import CategoriesReducer from "./Categories/CategoriesSlice";
import ProductsReducer from "./Products/ProductsSlice";
import cartReducer from './Cart/CartSlice';
import userReducer from './User/userSlice'
import ordersReducer from './Orders/OrdersSlice'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import persistStore from "redux-persist/es/persistStore";

const reducers = combineReducers({
    categories: CategoriesReducer,
    productos: ProductsReducer,
    cart: cartReducer,
    user: userReducer,
    orders: ordersReducer,
});

const persistConfig ={
    key: 'root',
    storage,
    whitelist: ['cart', 'user']
};

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false })
});

export const persistor = persistStore(store);