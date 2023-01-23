import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import ErrorPage from '../pages/ErrorPage'
import Footer from '../pages/Footer'

import Navbar from '../layout/Navbar'
import AddBook from '../features/books/AddBook'
import BooksView from '../features/books/booksView'
import EditBook from '../features/books/EditBook'

const Index = () => {
    return (
        <BrowserRouter>
            <header>
                <Navbar />
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/add_book" element={<AddBook />} />
                    <Route path="/show_books" element={<BooksView />} />
                    <Route path="/edit_book" element={<EditBook />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </main>
            <footer>
                <Footer />
            </footer>
        </BrowserRouter>
    )
}

export default Index