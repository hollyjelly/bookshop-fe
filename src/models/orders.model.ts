export interface Order {
    id: number;
    createdAt: string;
    address: string;
    receiver: string;
    bookTitle: string;
    totalQuantity: number;
    totalPrice: number;
}