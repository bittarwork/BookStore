import http from "../http-common";

class booksDataServices {
  // get all books
  getAll() {
    return http.get("/book");
  }
  // get book by id
  get(id) {
    return http.get(`/book/${id}`);
  }
// create a new book 
  create(data) {
    return http.post("/book", data);
  }
//   update a book 
  update(id, data) {
    return http.put(`/book/${id}`, data);
  }
// delete a book by id 
  delete(id) {
    return http.delete(`/book/${id}`);
  }

// find a book by id : 
  findByTitle(title) {
    return http.get(`/book?title=${title}`);
  }
}

export default new booksDataServices();
