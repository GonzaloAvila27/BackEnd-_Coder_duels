export interface ProductsType{
    id:string|undefined,
    timestamp: string|undefined,
    name: string|undefined,
    desc:string|undefined,
    code: number|undefined,
    image: string|undefined,
    price: number|undefined,
    stock:number|undefined
}

export interface CartType{
    id:string,
    timestap:string,
    productos:[ProductsType]
}