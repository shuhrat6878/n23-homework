const author_URL = "https://6849a33445f4c0f5ee724f2c.mockapi.io/author";
const book_URL = "https://6849a33445f4c0f5ee724f2c.mockapi.io/book";

class Book {
  
  getBooks = async () => {
    const res = await fetch(book_URL);
    const data = await res.json();
    return data;
  };

  
  addBook = async (book) => {
    await fetch(book_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    });

    console.log(await this.getBooks());
  };

 
  update = async (id, book) => {
    try {
      const res = await fetch(`${book_URL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(book),
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  
  remove = async (id) => {
    try {
      await fetch(`${book_URL}/${id}`, {
        method: "DELETE",
      });
      console.log("Deleted successfully");
    } catch (error) {
      console.log(error);
    }
  };
}

class Author {
  constructor(name, password) {
    this.name = name;
    this.password = password;
  }

  
  createUser = async () => {
    try {
      const res = await fetch(author_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: this.name,
          password: this.password,
          books: [], 
        }),
      });

      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  async getBooks(authorId) {
    const res = await fetch(`${author_URL}/${authorId}`);
    const data = await res.json();
    return data.books || [];
  }

  
  async addBook(bookId, authorId) {
    const books = await book.getBooks();
    const bookItem = books.find((b) => b.id == bookId);

    if (!bookItem) {
      console.log("Kitob topilmadi!");
      return;
    }

    const authorBooks = await this.getBooks(authorId);

    await fetch(`${author_URL}/${authorId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ books: [...authorBooks, bookId] }),
    });

    console.log(`kitobni id-si ${bookId} muallif ni id-siga ${authorId} ga qoshildi`);
  }
}

const book = new Book();

// book.addBook({ title: "Otkan kunlar", description: "Abdulla Qodiriy" });
// book.addBook({ title: "Yulduzli tunlar", description: "Pirimqul Qodirov" });
// book.addBook({ title: "Sariq devni minib", description: "Xudoyberdi To‘xtaboyev" });

const ali = new Author("Ali", "454545");
// ali.createUser();


ali.addBook(1, 1).then(() => console.log("tayyorlandi"));











// const Url = 'https://jsonplaceholder.typicode.com/users'

// async function getUsers() {
//     try {
//         const res = await fetch(Url)
//         const data = await res.json();
//         return data;
//     } catch (error) {
//         console.log('eror users',error)
//     }

// }
// // getUsers().then(console.log)

// async function getIdUsers(id) {
//     try {
//         const res = await fetch(`${Url}/${id}`)
//         const data = await res.json();
//         return data;
//     } catch (error) {
//         console.log('ereor id ',error);

//     }

// }
// getIdUsers(4).then(console.log)

// const controller = new AbortController();

// async function getData() {
//     try {
//         const data = await fetch('https://httpstat.us/200?sleep=6000', {
//             signal: controller.signal
//         })
//         console.log(data)
//     } catch (error) {
//         console.log('hatolik wuyerda cqadi--=---',error)
//     }

// }
// getData();

// setTimeout(() => {
//     controller.abort()
// }, 3000);
