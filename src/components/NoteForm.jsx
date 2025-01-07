import React from "react";
import { Form } from "react-router-dom";
import styles from "./NoteForm.module.css";

const NoteForm = ({ method, note }) => {
  return (
    <div className={styles.formContainer}>
      <Form method={method}>
        <h2>{method === "patch" ? "Edit Note" : "Create a Note"}</h2>
        <div className={styles.formGroup}>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="Enter note title"
            required
            defaultValue={method === "patch" && note ? note.title : ""}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            name="content"
            placeholder="Enter note content"
            required
            defaultValue={method === "patch" && note ? note.content : ""}
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          {method === "patch" ? "Update Note" : "Create Note"}
        </button>
      </Form>
    </div>
  );
};

export default NoteForm;
