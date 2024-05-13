import { act } from 'react';
import * as actionTypes from './actionType'

const initialState={
    resturants:[],
    usersResturant:null,
    resturant:null,
    loading:false,
    error:null,
    events:[],
    resturantEvents:[],
    categories:[]
};

const resturantReducer=(state=initialState,action)=>{
    switch (action.type){
        case actionTypes.CREATE_RESTURANT_REQUEST:
        case actionTypes.GET_ALL_RESTURANT_REQUEST:
        case actionTypes.DELETE_RESTURANT_REQUEST:
        case actionTypes.UPDATE_RESTURANT_REQUEST:
        case actionTypes.GET_RESTURANT_BY_ID_REQUEST:
        case actionTypes.CREATE_CATEGORY_REQUEST:
        case actionTypes.GET_RESTURANTS_CATEGORY_REQUEST:
            return{
                ...state,
                loading:true,
                error:null,
            };
        
        case actionTypes.CREATE_RESTURANT_SUCCESS:
            return{
                ...state,
                loading:false,
                usersResturant:action.payload
            };
        case actionTypes.GET_ALL_RESTURANT_SUCCESS:
            return{
                ...state,
                loading:false,
                resturants:action.payload,
            };
        case actionTypes.GET_RESTURANT_BY_ID_SUCCESS:
            return{
                ...state,
                loading:false,
                resturant:action.payload,
                // resturant:action.payload
            };
        case actionTypes.GET_RESTURANT_BY_USER_ID_SUCCESS:
        case actionTypes.UPDATE_RESTURANT_STATUS_SUCCESS:
        case actionTypes.UPDATE_RESTURANT_SUCCESS:
            return{
                ...state,
                loading:false,
                usersResturant:action.payload,
            };
        case actionTypes.DELETE_RESTURANT_SUCCESS:
            return{
                ...state,
                error:null,
                loading:false,
                resturants:state.resturant.filter(
                    (item)=>item.id !== action.payload
                ),
                usersResturant:state.usersResturant.filter(
                    (item)=>item.id !==action.payload
                ),
            };
        case actionTypes.CREATE_EVENTS_SUCCESS:
            return{
                ...state,
                loading:false,
                events:[...state.events,action.payload],
                resturantEvents:[...state.resturantEvents,action.payload],
            };
        case actionTypes.GET_ALL_EVENTS_SUCCESS:
            return{
                ...state,
                loading:false,
                events:action.payload,
            };
        case actionTypes.DELETE_EVENTS_SUCCESS:
            return{
                ...state,
                loading:false,
                events:state.events.filter((item)=>item.id !== action.payload),
                resturantEvents:state.resturantEvents.filter(
                    (item)=>item.id !== action.payload
                ),
            };
        case actionTypes.CREATE_CATEGORY_SUCCESS:
            return{
                ...state,
                loading:false,
                categories:[...state.categories,action.payload],
            };
        case actionTypes.GET_RESTURANTS_CATEGORY_SUCCESS:
            return{
                ...state,
                loading:false,
                categories:action.payload,
            };
        case actionTypes.CREATE_RESTURANT_FALIURE:
        case actionTypes.GET_ALL_RESTURANT_FALIURE:
        case actionTypes.DELETE_RESTURANT_FALIURE:
        case actionTypes.UPDATE_RESTURANT_FALIURE:
        case actionTypes.GET_RESTURANT_BY_ID_FALIURE:
        case actionTypes.CREATE_EVENTS_FALIURE:
        case actionTypes.CREATE_CATEGORY_FALIURE:
        case actionTypes.GET_RESTURANTS_CATEGORY_FALIURE:
            return{
                ...state,
                loading:false,
                error:action.payload,
            };
        default:
            return state;
    }
};
export default resturantReducer;