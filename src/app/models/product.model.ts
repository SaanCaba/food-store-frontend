export interface FoodProduct{
    id?: number,
    name: string,
    image: string | null | ArrayBuffer,
    type: string,
    description? : string
}