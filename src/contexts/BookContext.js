import { createContext, useState } from "react";

export const BookContext = createContext()

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: 'Harry Potter', id: 1},
        {title: 'El Principito', id: 2},
        {title: 'Cuentos Para Monstruos', id: 3},
        {title: 'Código Da Vinci', id: 4},
    ])

    return (
        <BookContext.Provider value={books}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider