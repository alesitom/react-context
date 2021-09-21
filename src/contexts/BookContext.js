import { createContext, useState } from "react";

export const BookContext = createContext()

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: 'Harry Potter', id: 1, author:'JK Rowling'},
        {title: 'El Principito', id: 2, author:'Antoine de Saint-Exupéry'},
        {title: 'Cuentos Para Monstruos', id: 3, author:'Santiago González Pedraza'},
        {title: 'Código Da Vinci', id: 4, author:'Dan Brown'},
    ])

    return (
        <BookContext.Provider value={books}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider