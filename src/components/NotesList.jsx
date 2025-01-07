import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NotesList.module.css";

function NotesList({ notes }) {
  const navigate = useNavigate();

  return (
    <div className={styles.mainContainer}>
      {notes.map((note) => (
        <div
          key={note.id}
          className={styles.noteCard}
          onClick={() => navigate(`${note.id}`)}
        >
          <h2>{note.title}</h2>
          <p>{note.content}</p>
        </div>
      ))}
    </div>
  );
}

export default NotesList;
