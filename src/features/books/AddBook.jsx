import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addBook } from './booksSlicer'



const AddBook = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [bookName, setBookName] = useState('')
    const [authorName, setAuthorName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        const book = {
            id: crypto.randomUUID(),
            name: bookName,
            author: authorName,
        }
        
        dispatch(addBook(book))
        navigate('/show_books')
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input required type="text" placeholder='Book Name' value={bookName} onChange={(e) => setBookName(e.target.value)} />
            </div>
            <div>
                <input required type="text" placeholder='Book Author' value={authorName} onChange={(e) => setAuthorName(e.target.value)} />
            </div>
            <div>
                <button> Add book </button>
            </div>
        </form>
    )
}

export default AddBook