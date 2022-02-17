'use strict';
var dbConn = require('./../../config/db.config');

//Book object create
var Book = function (book) {
  this.Book_ID = book.Book_ID;
  this.Title = book.Title;
  this.Author = book.Author;
  this.Comments = book.Comments;
};

Book.create = function (newEmp, result) {
  dbConn.query("INSERT INTO Books set ?", newEmp, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }
    else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

Book.findById = function (id, result) {
  dbConn.query("Select * from Books where id = ? ", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }
    else {
      result(null, res);
    }
  });
};

Book.findAll = function (result) {
  dbConn.query("Select * from Books", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    }
    else {
      console.log('Books : ', res);
      result(null, res);
    }
  });
};

Book.update = function (id, Book, result) {
  dbConn.query("UPDATE Books SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?", [Book.first_name, Book.last_name, Book.email, Book.phone, Book.organization, Book.designation, Book.salary, id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Book.delete = function (id, result) {
  dbConn.query("DELETE FROM Books WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    }
    else {
      result(null, res);
    }
  });
};

module.exports = Book;