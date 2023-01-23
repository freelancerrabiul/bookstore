import { createSlice } from "@reduxjs/toolkit";


const initialBooks = {
    books: [

        {
            id: crypto.randomUUID(),
            name: 'Amazon',
            author: 'Anisul islam'
        },
        {
            id: crypto.randomUUID(),
            name: 'Nile',
            author: 'Jeb bejos'
        },
        {
            id: crypto.randomUUID(),
            name: 'Tigrus',
            author: 'Elon mask'

        }
    ]
}
export const booksSlicer = createSlice({
    name: "books",
    initialState: initialBooks,
    reducers: {

        addBook: (state, action) => {
            state.books.push(action.payload)
        },
        deleteBook: (state, action) => {
            const id = action.payload
            state.books = state.books.filter((book) => book.id !== id)
        },
        updateBook: (state, action) => {
            const { id, name, author } = action.payload
            const bookExist = state.books.filter((book) => book.id === id)
            if (bookExist) {
                bookExist[0].id = id;
                bookExist[0].name = name;
                bookExist[0].author = author;
            }

        },
    }
})

export const { showBooks, addBook, deleteBook, updateBook } = booksSlicer.actions

export default booksSlicer.reducer