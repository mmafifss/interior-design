import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    index: true,
    required: true,
    auto: true,
  },
  title: {
    type: String,
    required: true,
  },
  excerpt: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  readingTime: {
    type: Number,
    required: false,
  },
  coverImage: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const BlogModel = mongoose.models.blog || mongoose.model("blog", Schema);

export default BlogModel;
