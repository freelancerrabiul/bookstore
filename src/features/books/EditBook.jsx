import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { updateBook } from './booksSlicer'

const EditBook = () => {
    const { state } = useLocation()
    const [id, setId] = useState(state.id)
    const [name, setName] = useState(state.name)
    const [author, setAuthor] = useState(state.author)

    const dispatch = useDispatch()
    const style = {
        input: { padding: "0.2rem", margin: "0.5rem" },
        div: { textAlign: "center", alignItems: "center", alignContent: "center" },
        inputId: { width: "25%", textAlign: "center", padding: "0.5rem" }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const updatedBookInfo = {
            name, author, id
        }
        dispatch(updateBook(updatedBookInfo))
    }
    return (
        <div style={style.div}>
            <form onSubmit={handleSubmit}>
                <div>
                    <label style={{ borderBottom: "1px solid black" }} htmlFor="id">Book Id </label>
                </div>
                <div>
                    <input style={style.inputId} name="id" type="text" readOnly onChange={(e) => setId(e.target.value)} value={id} /></div>
                <div>
                    <input style={style.input} type="text" name='name' onChange={(e) => setName(e.target.value)} value={name} />
                </div>
                <div>
                    <input style={style.input} type="text" name="author" onChange={(e) => setAuthor(e.target.value)} value={author} />
                </div>
                <div>
                    <button style={style.input} type='submit'>Save Book</button>
                </div>
            </form>
        </div>
    )
}

export default EditBook