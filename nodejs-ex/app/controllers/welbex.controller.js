// const { Sequelize } = require("../models")
const db = require("../models")
const Sequelize = require('sequelize')
const Welbex = db.welbex
// const Op = db.Sequelize.Op
const Op = Sequelize.Op
exports.create = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({
          message: "Content can not be empty!"
        })
        return
      }
      const welbex = {
        title: req.body.title,
        quantity: req.body.quantity,
        distance: req.body.distance 
      }
      Welbex.create(welbex)
        .then(data => {
          res.send(data)
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the welbex."
          })
        })
}

exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

  Welbex.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};
exports.findAllWithEqual = (req,res) =>{
  const value = req.query.v
  const col = req.query.c
  Welbex.findAll({ 
    where:{[col]:value}
  }).then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      })
    })
}
exports.findAllWithInclude = (req,res) =>{
  const value = req.query.v
  const col = req.query.c
  var condition = col ? { [col]: { [Op.like]: `%${value}%` } } : null
  Welbex.findAll({ 
    where:condition
  }).then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      })
    })
}
exports.findAllWithMore = (req,res) =>{
  const value = req.query.v
  const col = req.query.c
  Welbex.findAll({ 
    where:{[col]:{
      [Op.gt]:value
    }}
  }).then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      })
    })
}
exports.findAllWithLess = (req,res) =>{
  const value = req.query.v
  const col = req.query.c
  Welbex.findAll({ 
    where:{[col]:{
      [Op.lte]:value
    }}
  }).then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      })
    })
}
