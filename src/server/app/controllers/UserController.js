const express = require('express');
const router = express.Router();
const UserModel = require('../models/User');

router.get('/', async (request, response) => {
  let users = {};

  try {
    users = await UserModel.find({});
  } catch (error) {}

  response.status(200).json({
    users
  });
});

router.post('/', async (request, response) => {
  let user = await UserModel.findOne({ email: request.body.email });

  if(user) {
    response.status(409).json({
      error: 'E-mail already exists.'
    });

    return;
  }

  try {
    user = await new UserModel({
      ... request.body
    }).save();

    response.status(201).json(user);
  } catch (error) {
    response.status(422).json({
      error: 'Your not sending all data for create user.'
    });
  }
});

router.delete('/:id', async (request, response) => {
  let user = await UserModel.findById(request.params.id)

  if(!user) {
    response.status(404).json({
      error: 'User not found.'
    });

    return;
  }

  try {
    user.remove();
    response.status(204).json(user);
  } catch (error) {
    response.status(400).json(error);
  }
});

module.exports = router;
