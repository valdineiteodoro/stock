import { Product } from "../../shared/Table/Table.mockdata"
import{ Action } from "./Products.reducer"

export const insertNewProdut = (): Action <Product> => {
return{
    type:'INSERT_NEW_PRODUCT',
    payload:{
        _id:'123djksa',
        name:'cookie',
        price:0.35,
        stock:700
    }
}
}