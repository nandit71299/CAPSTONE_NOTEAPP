import React, { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import NotesList from "../components/NotesList";
import { getAllNotes } from "../utils/apiUtil";
import CircularLoader from "../components/CircularLoader";

function Homepage() {
  const { notes } = useLoaderData();

  return (
    <div>
      <h1>Welcome to Notes</h1>

      <Suspense fallback={<CircularLoader />}>
        <Await resolve={notes}>
          {(resolvedNotes) => <NotesList notes={resolvedNotes} />}
        </Await>
      </Suspense>
    </div>
  );
}

export default Homepage;

async function loadEvents() {
  const notes = await getAllNotes();
  return notes;
}

export async function loader() {
  return { notes: await loadEvents() };
}
