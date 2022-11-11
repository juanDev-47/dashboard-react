export interface ItemDto {
  id: string;
  name: string;
  description: string;
  qty: number;
  price: number;
}

export interface ItemFilterDto {
  id?: string;
  name?: string;
  description?: string;
  qty?: number;
  price?: number;
}