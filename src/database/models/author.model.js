import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  bio: {
    type: String,
    required: true,
  },

  birth: {
    type: Date,
  },
  books: {
    type: [mongoose.Types.ObjectId],
    ref: "Book",
  },
});

const authorModel = mongoose.model("Author", authorSchema);

export default authorModel;
