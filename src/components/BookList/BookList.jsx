import React from 'react';
import { useGlobalContext } from "../../context";
import Loading from "../Loader/Loader";
import coverImg from "../../components/assets/cover-not-found.jpg";
import "./BookList.css"
import Book from "../../components/BookList/Book";


//https://covers.openlibrary.org/b/id/240727-S.jpg

const BookList = () => {
  const {books, loading, resultTitle} = useGlobalContext();
  const booksWithCovers = books.map((singleBook) => {
    return {
      ...singleBook,
      id: (singleBook.id).replace("/works/", ""),
      cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg
    }
  });

  console.log(booksWithCovers);

  if (loading) return <Loading />;
  return (
    <>
    <section className="booklist">
      <div className="container">
        <div className="section-title">
          <h2>{resultTitle}</h2>
        </div>
        <div className='booklist-content grid'>
          {
            booksWithCovers.slice(0, 30).map((item, index) => {
              return (
                <Book key = {index} {...item} />
              )
            })
          }
        </div>
      </div>
    </section>
    </>
  )
}

export default BookList