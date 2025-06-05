export interface CardObject {
    id: number,
    title: string,
    description: string | "",
    image: string,
    link: string,
    items: Item[],
}

export interface Item {
    id: number,
    name: string,
    image: string,
}