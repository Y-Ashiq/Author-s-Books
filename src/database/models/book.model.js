import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },

  author: {
    type: String,
    required: true,
  },
  publishDate: {
    type: Date,
    default: new Date(),
  },
});

const bookModel = mongoose.model("Book", bookSchema);

export default bookModel;
