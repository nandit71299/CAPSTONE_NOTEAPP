import React from "react";
import NoteForm from "./NoteForm";
import { useRouteLoaderData } from "react-router-dom";
import { updateNote } from "../utils/apiUtil";

function EditNote() {
  const note = useRouteLoaderData("note-details"); // Access the loader data

  if (!note) {
    return <p>Loading...</p>; // Display loading if the data is not yet available
  }

  return (
    <div>
      <NoteForm method="patch" note={note} />
    </div>
  );
}

export default EditNote;
