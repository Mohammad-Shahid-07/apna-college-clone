import { Schema, model, models } from "mongoose";

const ReviewsSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  about: {
    type: String,
    required: [true, "Email is required"],
  },
  company: {
    type: String,
  },
  pacage: {
    type: String,
  },
});

const Reviews = models.Reviews || model("Reviews", ReviewsSchema);

export default Reviews;
