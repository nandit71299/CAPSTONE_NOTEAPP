import React from "react";
import NoteForm from "./NoteForm";

function CreateNote() {
  return (
    <div>
      <NoteForm method={"POST"} />
    </div>
  );
}

export default CreateNote;
