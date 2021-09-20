import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import BookContextProvider from "./contexts/BookContext";
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <div>
          <Navbar />
          <div>
            <BookContextProvider>
              <BookList />
            </BookContextProvider>
            <ThemeToggle />
          </div>
        </div>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
