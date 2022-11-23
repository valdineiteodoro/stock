import { Product } from "../shared/Table/Table.mockdata"
import http from "../util/http"

export const getAllProducts = () =>
 http
 .get<Product[]>("http://localhost:3024/products")
 .then(res => res.data) 


 