import authorModel from "../../database/models/author.model.js";

const addAuthor = async (req, res) => {
  const author = await authorModel.insertMany(req.body);
  res.status(200).json({ message: "added", author });
};

const getAuthor = async (req, res) => {
  const author = await authorModel.findById(req.params.id).populate({
    path: "books",
    select: "title",
  });
  res.status(200).json(author);
};

const getAllAuthors = async (req, res) => {
  const search = req.query.search;
  let author;
  console.log(search);

  if (search) {
    author = await authorModel.find({
      $or: [
        { name: { $regex: search, $options: "i" } },
        { bio: { $regex: search, $options: "i" } },
      ],
    });

    res.status(200).json(author);
  } else {
    author = await authorModel.find().populate({
      path: "books",
      select: "title",
    });
    res.status(200).json(author);
  }
};

const updateAuthor = async (req, res) => {
  const author = await authorModel.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).json(author);
};
const deleteAuthor = async (req, res) => {
  const author = await authorModel.findByIdAndDelete(req.params.id);
  res.status(200).json(author);
};

export default {
  addAuthor,
  getAuthor,
  getAllAuthors,
  updateAuthor,
  deleteAuthor,
};
