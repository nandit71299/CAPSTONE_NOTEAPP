import React from "react";
import { redirect, useNavigate, useRouteLoaderData } from "react-router-dom";
import { addNote, getNoteById, updateNote } from "../utils/apiUtil";
import styles from "./NoteItem.module.css";

function NoteItem() {
  const note = useRouteLoaderData("note-details");
  const navigate = useNavigate();

  if (!note) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{note.title}</h1>
      <p>{note.content}</p>
      <button onClick={() => navigate("edit")}>Edit Note</button>
    </div>
  );
}

export default NoteItem;

export async function loader({ params }) {
  try {
    const note = await getNoteById(params.id);
    return note;
  } catch (error) {
    return null;
  }
}

export async function action({ request, params }) {
  const method = request.method;

  const formData = await request.formData();

  let response = null;

  if (method === "PATCH") {
    const noteObj = {
      title: formData.get("title"),
      content: formData.get("content"),
      id: Number(params.id),
    };
    response = await updateNote(noteObj);
  } else {
    const noteObj = {
      title: formData.get("title"),
      content: formData.get("content"),
    };
    response = await addNote(noteObj);
  }

  return redirect("/");
}
