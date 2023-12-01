import Product from "../models/Product";
import { validateProduct } from "../validations/productValid";

export async function addProduct(req, res) {
  try {
    let { error } = validateProduct.validate(req.body, { abortEarly: false });
    console.log(error);
    if (error) {
      let err = error.details.map((item) => {
        return item.message;
      });
      return res.status(200).json({
        status: 1,
        message: err,
      });
    }
    const data = await Product.create(req.body);

    if (!data) {
      return res.status(200).json({
        status: 1,
        message: "them that bai",
      });
    }
    return res.status(200).json({
      status: 0,
      message: "them thanh cong",
      data,
    });
  } catch (error) {
    return res.status(200).json({
      status: 1,
      message: "loi server",
    });
  }
}

export async function getProduct(req, res) {
  try {
    const data = await Product.find();

    if (!data || !data[0]) {
      return res.status(200).json({
        status: 1,
        message: "khong oc san pham",
      });
    }
    return res.status(200).json({
      status: 0,
      message: "lay thanh ocng",
      data,
    });
  } catch (error) {
    return res.status(200).json({
      status: 1,
      message: "loi server",
    });
  }
}
export async function getOneProduct(req, res) {
  try {
    const data = await Product.findById(req.params.id);

    if (!data) {
      return res.status(200).json({
        status: 1,
        message: "khong oc san pham",
      });
    }
    return res.status(200).json({
      status: 0,
      message: "lay thanh ocng",
      data,
    });
  } catch (error) {
    return res.status(200).json({
      status: 1,
      message: "loi server",
    });
  }
}

export async function deleteProduct(req, res) {
  try {
    const data = await Product.findByIdAndDelete(req.params.id);

    if (!data) {
      return res.status(200).json({
        status: 1,
        message: "xoa htat bat",
      });
    }
    return res.status(200).json({
      status: 0,
      message: "xoa thanh ocng",
    });
  } catch (error) {
    return res.status(200).json({
      status: 1,
      message: "loi server",
    });
  }
}

export async function updateProduct(req, res) {
  try {
    let { error } = validateProduct.validate(req.body, { abortEarly: false });
    console.log(error);
    if (error) {
      let err = error.details.map((item) => {
        return item.message;
      });
      return res.status(200).json({
        status: 1,
        message: err,
      });
    }
    const data = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!data) {
      return res.status(200).json({
        status: 1,
        message: "update htat bat",
      });
    }
    return res.status(200).json({
      status: 0,
      message: "update thanh ocng",
      data,
    });
  } catch (error) {
    return res.status(200).json({
      status: 1,
      message: "loi server",
    });
  }
}
