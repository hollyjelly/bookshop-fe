import {httpClient} from "./http.ts";
import type {Book} from "../models/book.model.ts";
import type {Pagination} from "../models/pagination.model.ts";

interface FetchBooksParams {
    category_id?: number;
    news?: boolean;
    currentPage?: number;
    limit: number;
}

interface FetchBooksResponse {
    books: Book[];
    pagination: Pagination;
}

export const fetchBooks = async (params: FetchBooksParams) => {
    try {
        const response = await httpClient.get<FetchBooksResponse>("/books", {
            params: params
        })

        return response.data;
    }
    catch (error) {
        return {
            books: [],
            pagination: {
                totalCount: 0,
                currentPage: 1,
            }
        }
    }
}