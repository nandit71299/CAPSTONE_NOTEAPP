import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Homepage, { loader as homePageNotesLoader } from "./pages/Homepage";
import CreateNote from "./components/CreateNote";
import EditNote from "./components/EditNote";
import NoteItem, {
  loader as noteItemLoader,
  action as manipulateNoteAction,
} from "./components/NoteItem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "", element: <Homepage />, loader: homePageNotesLoader },
      {
        path: "create",
        element: <CreateNote />,
        action: manipulateNoteAction,
      },
      {
        path: ":id",
        id: "note-details",
        loader: noteItemLoader, // This loader is shared by both NoteItem and EditNote
        children: [
          {
            index: true, // This makes the NoteItem component load by default for the `:id` route
            element: <NoteItem />,
          },
          {
            path: "edit",
            element: <EditNote />,
            action: manipulateNoteAction,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
