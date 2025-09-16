import { useState } from "react";

const booksData = [
  { id: 1, title: "1984", author: "George Orwell" },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
  { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
];
function Library() {
  const [books, setBooks] = useState(booksData);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newbook = {
      id: Date.now(),
      title,
      author,
    };
    setBooks([...books, newbook]);
    setTitle("");
    setAuthor("");
  };
  const handleDelete = (bookId) => {
    const filteredBooks = books.filter((b) => b.id !== bookId);
    setBooks(filteredBooks);
  };

  const filteredBooks = books.filter((book) =>{
    return (
      book.title.toLowerCase().trim().includes(searchText.toLowerCase().trim())
      ||
      book.author.toLowerCase().trim().includes(searchText.toLowerCase().trim())
    )
  })


  return (
    <div>
      <h1>Library Management</h1>
      <div className="header">
        <input 
          type="text"
          placeholder="Search by title or author"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <div className="add-book">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="New book title"
              required
            />
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="New book author"
              required
            />
            <button>Add Book</button>
          </form>
        </div>
      </div>
      <div className="container">
        <ul>
          {filteredBooks.map((book) => {
            return (
              <li key={book.id}>
                {book.title} by {book.author}
                <button onClick={() => handleDelete(book.id)}>Delete</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Library;
