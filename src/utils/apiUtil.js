import data from "../../data.js";

export const getAllNotes = async () => {
  const response = data.notes;

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(response);
    }, 2000);
  });
};

export const getNoteById = async (noteId) => {
  const response = data.notes.find((note) => note.id === parseInt(noteId));
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(response);
    }, 2000);
  });
};

export const addNote = async (note) => {
  data.notes.push({ id: data.notes.length, ...note });
  const response = data.notes;

  return response;
};

export const updateNote = async (note) => {
  const index = data.notes.findIndex((n) => n.id === note.id);
  if (index !== -1) {
    data.notes[index] = note;
  }
  const response = data.notes;
  return response;
};

export const deleteNote = async (noteId) => {
  const index = data.notes.findIndex((n) => n.id === parseInt(noteId));
  if (index !== -1) {
    data.notes.splice(index, 1);
  }
  const response = data.notes;
  return response;
};
