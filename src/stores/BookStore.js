import { observable } from 'mobx';

class BookStore {
  @observable books = [];

  constructor() {
    this.books = [];
  }

  getBooksFromName(name) {
    this.books = 0;
  }
}

export default BookStore;
