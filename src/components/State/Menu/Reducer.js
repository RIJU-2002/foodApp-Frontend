import { act } from 'react';
import * as actionTypes from './actionType';

const initialState={
    menuItems:[],
    loading:false,
    error:null,
    allMenuItems:[],
    search:[],
    message:null
};

const menuItemReducer =(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.CREATE_MENU_ITEM_REQUEST:
        case actionTypes.GET_MENU_ITEM_BY_RESTURANT_ID_REQUEST:
        case actionTypes.DELETE_MENU_ITEM_REQUEST:
        case actionTypes.SEARCH_MENU_ITEM_REQUEST:
        case actionTypes.UPDATE_MENU_ITEM_AVAILABILITY_REQUEST:
        case actionTypes.GET_ALL_MENU_ITEM_REQUEST:
            return{
               ...state,
               loading:true,
               error:null,
               message:null,
            };
        case actionTypes.CREATE_MENU_ITEM_SUCCESS:
            return{
                ...state,
                loading:false,
                menuItems:[...state.menuItems,action.payload],
                message:"Food Created Successfully"
            }
        case actionTypes.GET_ALL_MENU_ITEM_SUCCESS:
            return{
                ...state,
                loading:false,
                allMenuItems:action.payload,
                message:"All food retrieved"
            }
        case actionTypes.GET_MENU_ITEM_BY_RESTURANT_ID_SUCCESS:
            return{
                ...state,
                loading:false,
                menuItems:action.payload,
                message:"Success in retrieving menu"
            };
        case actionTypes.DELETE_MENU_ITEM_SUCCESS:
            return{
                ...state,
                loading:false,
                menuItems:state.menuItems.filter(
                    (menuItem)=>menuItem.id !== action.payload
                ),
                message:"Success in delete menu"
            };
        case actionTypes.UPDATE_MENU_ITEM_AVAILABILITY_SUCCESS:
            console.log("update items id ",action.payload.id)
            return{
                ...state,
                loading:false,
                menuItems:state.menuItems.map(
                    (menuItem)=>menuItem.id === action.payload.id?action.payload:menuItem
                ),
            };
        case actionTypes.SEARCH_MENU_ITEM_SUCCESS:
            return{
                ...state,
                loading:false,
                search:action.payload
            };
        case actionTypes.CREATE_MENU_ITEM_FAILURE:
        case actionTypes.GET_MENU_ITEM_BY_RESTURANT_ID_FAILURE:
        case actionTypes.DELETE_MENU_ITEM_FAILURE:
        case actionTypes.SEARCH_MENU_ITEM_FAILURE:
        case actionTypes.UPDATE_MENU_ITEM_AVAILABILITY_FAILURE:
        case actionTypes.GET_ALL_MENU_ITEM_FALIURE:
            return{
                ...state,
                loading:false,
                error:action.payload,
                message:null
            };
        default:
            return state;
    }
};

export default menuItemReducer;