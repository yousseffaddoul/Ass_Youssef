import * as service from "../services/product.service.js";


export function getProducts(req, res, next) {
  try {
    res.json(service.getProducts());
  } catch(error) {
    next(error);
  }
  console.log("SIGN SECRET:", process.env.JWT_SECRET);
}


export function getProduct(req,res,next){

  try {

    const product =
      service.getProductById(req.params.id);

    if(!product){
      return res.status(404).json({
        message:"Product not found"
      });
    }

    res.json(product);

  } catch(error){
    next(error);
  }

}


export function createProduct(req,res,next){

  try {

    const product =
      service.createProduct(req.body);

    res.status(201).json(product);

  } catch(error){
    next(error);
  }

}


export function updateProduct(req,res,next){

  try {

    const product =
      service.updateProduct(
        req.params.id,
        req.body
      );

    res.json(product);

  } catch(error){
    next(error);
  }

}


export function getStatus(req,res,next){

  try {

    res.json(
      service.getProductStatus(req.params.id)
    );

  } catch(error){
    next(error);
  }

}