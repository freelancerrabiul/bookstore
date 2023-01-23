import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteBook, showBooks } from './booksSlicer'

const BooksView = () => {
  const dispatch = useDispatch()
  const books = useSelector((state) => state.books.books)

  const handleDelete = (id) => {
    dispatch(deleteBook(id))
  }


  return (
    <div className='booksView'>
      <table>
        <thead>
          <tr>
            <th> No </th>
            <th> BookName </th>
            <th> Book Author</th>
            <th> Action</th>
          </tr>
        </thead>
        <tbody>

          {books && books.map((book, index) => {
            const { id, name, author } = book
            return (
              <tr key={id}>
                <td> {index + 1} </td>
                <td> {name} </td>
                <td> {author} </td>
                <td className='actionTable'>
                  <Link to={'/edit_book'} state={{ id, name, author }}><button>Edit</button></Link>
                  <button onClick={() => handleDelete(id)}>Delete</button>
                </td>
              </tr>
            )
          })}

        </tbody>

      </table>
    </div>
  )
}

export default BooksView