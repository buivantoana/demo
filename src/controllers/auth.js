import User from "../models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { validateSignin, validateSignup } from "../validations/userValid";

export async function signin(req, res) {
  try {
    let { error } = validateSignin.validate(req.body, { abortEarly: false });
    if (error) {
      let err = error.details.map((item) => item.message);
      return res.status(200).json({
        status: 0,
        message: err,
      });
    }
    let checkEmail = await User.find({ email: req.body.email });

    if (checkEmail[0]) {
      return res.status(200).json({
        status: 1,
        message: "email da ton tai",
      });
    }
    let hashpassword = await bcrypt.hash(req.body.password, 10);
    if (!hashpassword) {
      return res.status(200).json({
        status: 1,
        message: "ma hoa that bai",
      });
    }
    let data = await User.create({
      username: req.body.username,
      password: hashpassword,
      email: req.body.email,
    });
    if (!data) {
      return res.status(200).json({
        status: 1,
        message: "them that bai",
      });
    }

    return res.status(200).json({
      status: 0,
      message: "thanh ocng",
      data,
    });
  } catch (error) {
    return res.status(200).json({
      status: 1,
      message: "loi server",
    });
  }
}

export async function signup(req, res) {
  try {
    let { error } = validateSignup.validate(req.body, { abortEarly: false });
    if (error) {
      let err = error.details.map((item) => item.message);
      return res.status(200).json({
        status: 0,
        message: err,
      });
    }
    let checkEmail = await User.find({ email: req.body.email });

    if (!checkEmail[0]) {
      return res.status(200).json({
        status: 1,
        message: "email khong ton tai",
      });
    }
    let hashpassword = await bcrypt.compare(
      req.body.password,
      checkEmail[0].password
    );
    if (!hashpassword) {
      return res.status(200).json({
        status: 1,
        message: "mat khau sai",
      });
    }
    let token = jwt.sign({ id: checkEmail[0]._id }, "token");
    return res.status(200).json({
      status: 0,
      message: "dang nhap thanh ocng",
      token,
    });
  } catch (error) {
    return res.status(200).json({
      status: 1,
      message: "loi server",
    });
  }
}
