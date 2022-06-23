const express = require("express");
const wikiRouter = express.Router();
const { Page } = require("../models");
const { addPage } = require("../views");



wikiRouter.post('/', async (req, res, next) => {

  // STUDENT ASSIGNMENT:
  // add definitions for `title` and `content`

  try {
    const page = await Page.create({
      title: 'hi',
      content: "hi"
    });

    // make sure we only redirect *after* our save is complete! Don't forget to `await` the previous step. `create` returns a Promise.
    res.redirect('/');
  } catch (error) { next(error) }
});



wikiRouter.get('/', (req, res) => {
    res.send(addPage())
})



wikiRouter.get('/add', (req, res) => {
    res.send(addPage())
})

module.exports = wikiRouter;