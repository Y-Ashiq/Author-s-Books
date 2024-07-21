import bookModel from "../../database/models/book.model.js";

const addBook = async (req, res) => {
  const author = await bookModel.insertMany(req.body);
  res.status(200).json({ message: "added", author });
};

const getBook = async (req, res) => {
  const book = await bookModel.findById(req.params.id);
  res.status(200).json(book);
};

const getAllBooks = async (req, res) => {
  const search = req.query.search;
  let book;

  if (search) {
    book = await find({
      $or: [
        {
          title: { $regex: search, $options: "i" },
          author: { $regex: search, $options: "i" },
        },
      ],
    });
  } else {
    book = await bookModel.find();
    res.status(200).json(book);
  }
};
const updateBook = async (req, res) => {
  const book = await bookModel.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).json(book);
};
const deleteBook = async (req, res) => {
  const book = await bookModel.findByIdAndDelete(req.params.id);
  res.status(200).json(book);
};

export default { addBook, getBook, getAllBooks, updateBook, deleteBook };
