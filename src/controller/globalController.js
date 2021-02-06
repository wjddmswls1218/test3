import Post from "../models/Post";
import PostType from "../models/PostType";
import dotenv from "dotenv";
dotenv.config();

const homeCotroller = (req, res) => {
  console.log("I'm home Controller");
  res.render("screens/contact");
};

const contactController = (req, res) => {
  res.render("screens/contact");
};

const javascriptController = (req, res) => {
  try {
      const dataResult = await Post.find().populate({
          path: "PostType",
          model: PostType,
      });

      if (process.env.NODE_ENV === "development") {
          console.log("dev mode ~");
      }
  } catch (e) {
    console.log(e);
    res.render("screens/home");
  }
};

const boardwriteController = async (req, res) => {
   console.log("I'm BOARDWRITE PAGE");
};

export const globalController = {
    homeCotroller,
    contactController,
    javascriptController,
    boardwriteController,
}