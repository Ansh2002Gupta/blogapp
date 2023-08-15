import db from "../db.js";
import jwt from "jsonwebtoken";

export const getPosts = (req, res) => {
  const QUERY = req.query.category ? "SELECT * FROM posts WHERE `category` = ?" : "SELECT * FROM posts";

  db.query(QUERY, [req.query.category], (err, data) => {
    if (err) return res.status(500).send(err);
    else return res.status(200).json(data);
  });
};

export const getPost = (req, res) => {
  const QUERY = "SELECT `firstname`, `lastname`, `username`, `profession`, p.img AS postImg, u.img AS userImg, `title`, `description`, p.date AS postDate, u.date AS userDate FROM users AS u JOIN posts as p ON u.id=p.userid WHERE p.id=?";

  db.query(QUERY, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);
    else return res.status(200).json(data);
  });
};

export const addPost = (req, res) => {
  res.json("Msg from controller_posts {addPost}");
};

export const deletePost = (req, res) => {
  //check if the user is authenticated to delete the post or not.
  const access_token = req.header("auth-token");
  console.log(access_token);
  if (!access_token) return res.status(401).json("You are not an authenticated user!");

  //jwt verification process
  jwt.verify(access_token, "jwtkey", (err, data) => {
    if (err) return res.status(403).json("You are not authorized to do so!");

    const postId = req.params.id;
    const QUERY = "DELETE FROM posts WHERE `id` = ?";
    db.query(QUERY, [postId], (err, data) => {
      if (err) return res.status(500).json(err);

      res.status(200).json("Post deleted successfully!");
    });
  });
  //execute the query for deletion of the post.
};

export const updatePost = (req, res) => {
  res.json("Msg from controller_posts {updatePost}");
};
