import { useContext, useState } from "react"
import { BookContext } from "../contexts/BookContext"
import { ThemeContext } from "../contexts/ThemeContext"


const BookList = () => {
    const { themeStyles } = useContext(ThemeContext)
    const books = useContext(BookContext)

    return (
        <div className="book-list" style={themeStyles}>
            <h2>Lista de Libros</h2>
            <ul>
            {books.map(book => <li key={book.id}>{book.title}</li>)}
            </ul>
        </div>
    )
}

export default BookList