const { Router } = require('express')
const router = Router()

const {
    renderNoteForm,
    createNewNote,
    renderNotes,
    renderEditForm,
    updateNote,
    deleteNote,
    archivedNote,
    renderAchivedNote,
    unarchivedNote,
    renderUnachivedNote
} = require('../controllers/notes.controller');

const {isAuthenticated} = require('../helpers/auth');

// New note
router.get('/notes/add', isAuthenticated, renderNoteForm);

router.post('/notes/new-note', isAuthenticated, createNewNote);

// Get All Note
router.get('/notes', isAuthenticated, renderNotes);

// Edit Note
router.get('/notes/edit/:id', isAuthenticated, renderEditForm);

router.put('/notes/edit/:id', isAuthenticated, updateNote);

// Archive notes
router.get('/notes/archive/:id', isAuthenticated, archivedNote);
router.get('/notes/archived', isAuthenticated, renderAchivedNote);


// Unrchive notes
router.get('/notes/unarchive/:id', isAuthenticated, unarchivedNote);
router.get('/notes/unarchived', isAuthenticated, renderUnachivedNote);


// Delete notes
router.delete('/notes/delete/:id', isAuthenticated, deleteNote);

module.exports = router;