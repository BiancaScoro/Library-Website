import React from 'react';
import Header from '../../components/Header/Header';
import { Outlet } from "react-router-dom";
import SearchForm from "../../components/SearchForm/SearchForm";
import BookList from '../../components/BookList/BookList';

const Home = () => {
  return (
    <main>
        <Header />
        <SearchForm />
        <Outlet />
        <BookList />
    </main>
  )
}

export default Home