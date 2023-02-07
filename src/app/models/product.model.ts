export interface FoodProduct{
    id?: number | string,
    _id?:string,
    name: string,
    image: string | null | ArrayBuffer,
    type: string,
    description? : string
}