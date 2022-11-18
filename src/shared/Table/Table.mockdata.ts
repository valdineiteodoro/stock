export interface Product {
    id: number
    name: string
    price: number
    stock: number
}

const Products: Product[] = [{
    id: 1,
    name: 'cookie',
    price: 1.25,
    stock: 20,
},{
    id: 2,
    name: 'glass',
    price: 9.2,
    stock: 20,
},{
    id: 3,
    name: 'milk 1l',
    price: 1.0,
    stock: 20,
},{
    id: 4,
    name: 'detergent',
    price: 25,
    stock: 20,
}]

export default Products