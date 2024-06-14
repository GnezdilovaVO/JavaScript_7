"use strict";
// Задание 1
// Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.

// Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

// Реализуйте геттер allBooks, который возвращает текущий список книг.

// Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.

// Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.

class Library {
  #books = [];
  constructor(books = []) {
    if (this.#books.length !== new Set(books).size) {
      throw new Error("Books aren`t unique");
    }
    this.#books = [...books];
  }
  get allBooks() {
    return this.#books;
  }
  addBook(title) {
    if (this.#books.includes(title)) {
      throw new Error("There is such a book");
    }
    this.#books.push(title);
  }
  removeBook(title) {
    if (!this.#books.includes(title)) {
      throw new Error("There is no book");
    }
  }
  hasBook(title) {
    return this.#books.includes(title);
  }
}

class Book {
  title;
  author;
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

const library = new Library();

const book1 = new Book("Harry Potter", "J.K.Rowling");
const book2 = new Book("The Cuckoo’s Calling", "J.K.Rowling");
const book3 = new Book("Lethal White", "J.K.Rowling");
const book4 = new Book("Lethal White", "J.K.Rowling");
const book5 = ["Book5", "J.K.Rowling"];

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
// library.addBook(book4);
library.addBook(book5);

console.log(library.hasBook("Harry Potter"));
console.log(library.hasBook("Book5"));

// library.removeBook("Harry Potter");
console.log(library.allBooks);

// Задание 2
// Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

// Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.

// Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.

// При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.

function addReview() {
  const inputEl = document.getElementById("input").value;
  if (inputEl.lenght < 50 || inputEl.lenght > 500) {
    throw new Error("Отзыв должен содержать от 50 до 500 символов.");
  }

  const conteinerEl = document.getElementById("container");
  const newReview = document.createElement("div");
  newReview.textContent = inputEl;
  conteinerEl.appendChild(newReview);
}
// addReview();
