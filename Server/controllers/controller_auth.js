import db from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
  // check whether password and confirm password are matching.
  if (req.body.password !== req.body.cpassword) return res.status(500).json("Password and confirm passwords are different!!");

  //check existing user.
  var QUERY = "SELECT * FROM users WHERE username = ? OR email = ?";

  db.query(QUERY, [req.body.username, req.body.email], (err, data) => {
    if (err) return res.status(500).json(err);

    if (data.length > 0) return res.status(500).json("This user already exists!!");

    const salt = bcrypt.genSaltSync(process.env.SECRET_BCRYPT_SALT_CODE);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    QUERY = "INSERT INTO users(`firstname`, `lastname`, `username`, `email`, `profession`, `img`, `password`) VALUES (?)";
    var values = [req.body.firstname, req.body.lastname, req.body.username, req.body.email, req.body.profession, req.body.img, hashedPassword];

    db.query(QUERY, [values], (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json({ success: "User registered into the database!!" });
    });
  });
};

export const login = (req, res) => {
  var QUERY = "SELECT * FROM users WHERE username = ?";

  db.query(QUERY, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);

    if (data.length === 0) return res.status(404).json("User doesn't exists!!");

    const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password);

    if (!isPasswordCorrect) return res.status(401).json("Wrong username or password!");

    const token = jwt.sign({ userid: data[0].id }, "jwtkey");

    const { password, ...userPart } = data[0];

    res.status(200).json({ token, userPart });
  });
};

export const logout = (req, res) => {
  //TODO: Try to remove cookie which was earlier set.
  res.status(200).json("User has been logged out successfully!!");
};
