import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { authReducer } from "./Authentication/Reducer";
import { thunk } from "redux-thunk";
import resturantReducer from "./Resturant/Reducer";
import menuItemReducer from "./Menu/Reducer";
import cartReducer from "./Cart/Reducer";
import { orderReducer } from "./Order/Reducer";
import resturantOrderReducer from "./Resturant Order/Reducer";
import { ingredientReducer } from "./Ingredients/Reducer";

const rooteReducer=combineReducers({
    auth:authReducer,
    resturant:resturantReducer,
    menu:menuItemReducer,
    cart:cartReducer,
    order:orderReducer,
    resturantOrder:resturantOrderReducer,
    ingredients:ingredientReducer
});

export const store=legacy_createStore(rooteReducer,applyMiddleware(thunk));