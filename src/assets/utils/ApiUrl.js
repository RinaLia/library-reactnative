const local = 'http://180.248.47.168:5000/';
export default {
  getAllBook: local + 'books?{param}',
  postBook: local + 'books',
  patchBook: local + 'books/{id}',
  deleteBook: local + 'books/{id}',
  getAllAuthor: local + 'books/author',
  postAuthor: local + 'books/author',
  patchAuthor: local + 'books/author/{id}',
  deleteAuthor: local + 'books/author/{id}',
  getAllGenre: local + 'books/genres?{param}',
  postGenre: local + 'books/genres',
  patchGenre: local + 'books/genres/{id}',
  deleteGenre: local + 'books/genres/{id}',
  getTransaction: local + 'books/transactions',
  getUser: local + 'books/auth/users?{param}',
};
