export interface Product {
    _id: string
    name: string
    price: number
    stock: number
    createdAt?:string
    updatedAt?:string
}

const Products: Product[] = [{
    _id: '1',
    name: 'cookie',
    price: 1.25,
    stock: 20,
},{
    _id: '2',
    name: 'glass',
    price: 9.2,
    stock: 20,
},{
    _id: '3',
    name: 'milk 1l',
    price: 1.0,
    stock: 20,
},{
    _id: '4',
    name: 'detergent',
    price: 25,
    stock: 20,
}]

export default Products