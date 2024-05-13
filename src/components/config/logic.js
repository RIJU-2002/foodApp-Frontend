export const isPresentInFavorites=(favorites,resturant)=>{
    for(let item of favorites){
        if(resturant.id===item.id){
            return true
        }
    }
    return false;
}