import "./App.css";
import AddBook from "./components/AddBook/AddBook";
import BookList from "./components/BookList/BookList";

function App() {
    return (
        <div>
            <BookList></BookList>
            <AddBook></AddBook>
        </div>
    );
}

export default App;
