const notesCtrl = {};

const Note = require('../models/Note');

notesCtrl.renderNoteForm = (req, res) => {
    res.render('notes/new-note');
}

notesCtrl.createNewNote = async (req, res) => {
    const {title, description} = req.body;
    const newNote = new Note({title, description});
    await newNote.save();
    res.redirect('/notes');
}

notesCtrl.renderNotes = async (req, res) => {
    const notes = await Note.find().lean();
    res.render('notes/all-notes', { notes });
}

notesCtrl.renderEditForm = (req, res) => {
    res.send('render edit notes');
}

notesCtrl.updateNote = (req, res) => {
    res.send('update notes');
}

notesCtrl.deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.redirect('/notes');
}

module.exports = notesCtrl;