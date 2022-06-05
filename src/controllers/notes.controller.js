const notesCtrl = {};

const Note = require('../models/Note');

notesCtrl.renderNoteForm = (req, res) => {
    res.render('notes/new-note');
}

notesCtrl.createNewNote = async (req, res) => {
    const {title, description} = req.body;
    const newNote = new Note({title, description});
    newNote.user = req.user.id;
    await newNote.save();
    req.flash('success_msg', 'Note Added Successfully');
    res.redirect('/notes');
}

notesCtrl.renderNotes = async (req, res) => {
    const notes = await Note.find({user: req.user.id}).lean().sort({createdAt: 'desc'});
    res.render('notes/all-notes', { notes });
}

notesCtrl.renderEditForm = async (req, res) => {
    const note = await Note.findById(req.params.id).lean();
    if (note.user != req.user.id){
        req.flash('error_msg','Not Authorized');
        return res.redirect('/notes');
    }
    res.render('notes/edit-note', { note });
}

notesCtrl.updateNote = async (req, res) => {
    const { title, description } = req.body;
    await Note.findByIdAndUpdate(req.params.id, { title, description });
    req.flash('success_msg', 'Note Updated Successfully');
    res.redirect("/notes");
}

notesCtrl.deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Note Deleted Successfully');
    res.redirect('/notes');
}

notesCtrl.archivedNote = async (req, res) => {
    await Note.findByIdAndUpdate(req.params.id, {archive:1});
    req.flash('success_msg', 'Note Archived Successfully');
    res.redirect("/notes");
}

notesCtrl.renderAchivedNote = async (req, res) => {
    const notes = await Note.find({user: req.user.id, archive: 1}).lean().sort({createdAt: 'desc'});
    res.render('notes/archived-notes', { notes });
}

notesCtrl.unarchivedNote = async (req, res) => {
    await Note.findByIdAndUpdate(req.params.id, {archive:null});
    req.flash('success_msg', 'Note Archived Successfully');
    res.redirect("/notes");
}

notesCtrl.renderUnachivedNote = async (req, res) => {
    const notes = await Note.find({user: req.user.id, archive: null}).lean().sort({createdAt: 'desc'});
    res.render('notes/unarchived-notes', { notes });
}

module.exports = notesCtrl;