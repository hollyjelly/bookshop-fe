import {styled} from "styled-components";
import Title from "../components/common/Title.tsx";
import BooksFilter from "../components/books/BooksFilter.tsx";
import BooksList from "../components/books/BooksList.tsx";
import BooksEmpty from "../components/books/BooksEmpty.tsx";
import Pagination from "../components/books/Pagination.tsx";
import BooksViewSwitcher from "../components/books/BooksViewSwitcher.tsx";
import {useBooks} from "../hooks/useBooks.ts";

export default function Books() {
    const {books, pagination, isEmpty} = useBooks()

    return(
        <>
            <Title size="large">도서 검색 결과</Title>
            <BookStyle>
                <div className="filter">
                    <BooksFilter/>
                    <BooksViewSwitcher/>
                </div>

                {!isEmpty && <BooksList books={books}/>}
                {isEmpty && <BooksEmpty/>}
                {!isEmpty && <Pagination pagination={pagination}/>}
            </BookStyle>
        </>
    )
}

const BookStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
  
  .filter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
  }
`;