const express = require('express')
const uuid = require('uuid/v4')
const { isWebUri } = require('valid-url')
const logger = require('../logger')
const store = require('../store')

const notefulRouter = express.Router()
const bodyParser = express.json()

notefulRouter
  .route('/notes')
  .get((req, res) => {
    res.json(store.notes)
  })
  .post(bodyParser, (req, res) => {
    for (const field of ['title', 'content', ]) {
      if (!req.body[field]) {
        logger.error(`${field} is required`)
        return res.status(400).send(`'${field}' is required`)
      }
    }
    const { title, content} = req.body


    const note = { id: uuid(), title, content }

    store.notes.push(note)

    logger.info(`note with id ${note.id} created`)
    res
      .status(201)
      .location(`http://localhost:8000/notes/${note.id}`)
      .json(note)
  })

notesRouter
  .route('/notes/notes_id')
  .get((req, res) => {
    const { notes_id } = req.params

    const notes = store.notes.find(c => c.id == notes_id)

    if (!notes) {
      logger.error(`note with id ${notes_id} not found.`)
      return res
        .status(404)
        .send('notes Not Found')
    }

    res.json(notes)
  })
  .delete((req, res) => {
    const { notes_id } = req.params

  })

module.exports = notessRouter