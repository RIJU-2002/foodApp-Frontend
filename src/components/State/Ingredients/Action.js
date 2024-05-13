import { type } from '@testing-library/user-event/dist/type';
import {API_URL,api} from '../../config/api';
import { CREATE_INGREDIENT_CATEGORY_SUCCESS, GET_INGREDIENTS, GET_INGREDIENT_CATEGORY_SUCCESS, UPDATE_STOCK } from './actionType';

export const getIngredientsOfResturant=({id,jwt})=>{
    return async (dispatch)=>{
        try {
            const response=await api.get(
                `/api/admin/ingredients/resturant/${id}`,{
                    headers:{
                        Authorization:`Bearer ${jwt}`,
                    },
                }
            );
            console.log("get all ingredients ",response.data);
            dispatch({type:GET_INGREDIENTS,payload:response.data});
        } catch (error) {
            console.log("error",error);
        }
    };
};

export const createIngredient=({data,jwt})=>{
    return async (dispatch)=>{
        try {
            const response=await api.post(`/api/admin/ingredients`,data,{
                headers:{
                    Authorization:`Bearer ${jwt}`,
                },
            });
            console.log("create ingredients ",response.data);
            dispatch({type:CREATE_INGREDIENT_CATEGORY_SUCCESS,payload:response.data});
        } catch (error) {
            console.log("error ",error);
        }
    };
};

export const createIngredientCategory=({data,jwt})=>{
    console.log("data ",data,'jwt',jwt);
    return async(dispatch)=>{
        try{
            const response=await api.post(`/api/admin/ingredients/category`,data,{
                headers:{
                    Authorization:`Bearer ${jwt}`
                },
            });
            console.log("create ingredients category",response.data);
            dispatch({type:CREATE_INGREDIENT_CATEGORY_SUCCESS,payload:response.data});
        }catch(error){
            console.log("error",error);
        }
    };
};

export const getIngredientsCategory=({id,jwt})=>{
    return async (dispatch)=>{
        try {
            const response=await api.get(`/api/admin/ingredients/resturant/${id}/category`,{
                headers:{
                    Authorization:`Bearer ${jwt}`,
                },
            });
            console.log("get ingredients category",response.data);
            dispatch({type:GET_INGREDIENT_CATEGORY_SUCCESS,payload:response.data});
        } catch (error) {
            console.log("error",error);
        }
    };
};

export const updateStockOfIngredient=({id,jwt})=>{
    return async (dispatch)=>{
        try {
            const {data}=await api.put(`/api/admin/ingredients/${id}/stock`,{},{
                headers:{
                    Authorization:`Bearer ${jwt}`,
                },
            });
            dispatch({type:UPDATE_STOCK,payload:data});
            console.log("update ingredients stock ",data);
        } catch (error) {
            console.log("error ",error);
        }
    }
}