import { useContext, useState } from "react"
import { BookContext } from "../contexts/BookContext"
import { ThemeContext } from "../contexts/ThemeContext"


const BookList = () => {
    const { themeStyles } = useContext(ThemeContext)
    const books = useContext(BookContext)

    return (
        <div className="book-list" style={themeStyles}>
            <h2>Lista de Libros</h2>
            {/* <ul>
            {books.map(book => <li key={book.id}>{book.title}</li>)}
            </ul> */}

            {/* <ul>
            {books.map(book => <li key={book.id}>{book.title} - {book.author}</li>)}
            </ul> */}
            <table class="table">
            <thead class="table table-striped">
                <tr>
                <th scope="col">#</th>
                <th scope="col">Libro</th>
                <th scope="col">Autor</th>
                </tr>
            </thead>
            <tbody>
            {books.map(book =>
                <tr>
                <th scope="row" key={book.id}>{book.id}</th>
                <td>{book.title}</td>
                <td>{book.author}</td>
                </tr>
            )}
            </tbody>
            </table>
        </div>
    )
}

export default BookList