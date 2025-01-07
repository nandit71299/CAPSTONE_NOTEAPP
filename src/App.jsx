import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Lazy-load components
const RootLayout = lazy(() => import("./components/RootLayout"));
const Homepage = lazy(() => import("./pages/Homepage"));
const CreateNote = lazy(() => import("./components/CreateNote"));
const EditNote = lazy(() => import("./components/EditNote"));
const NoteItem = lazy(() => import("./components/NoteItem"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <RootLayout />
      </Suspense>
    ),
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Homepage />
          </Suspense>
        ),
        loader: async () => {
          // Dynamically import the loader and execute it
          const module = await import("./pages/Homepage");
          const data = await module.loader(); // Await the loader data
          return data; // Return the resolved data
        },
      },
      {
        path: "create",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <CreateNote />
          </Suspense>
        ),
        action: async (meta) => {
          // Dynamically import the action and execute it
          const module = await import("./components/NoteItem");
          return await module.action(meta); // Await the action execution
        },
      },
      {
        path: ":id",
        id: "note-details",
        loader: async (meta) => {
          // Dynamically import the loader and execute it
          const module = await import("./components/NoteItem");
          const data = await module.loader(meta); // Await the loader data
          return data; // Return the resolved data
        },
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <NoteItem />
              </Suspense>
            ),
          },
          {
            path: "edit",
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <EditNote />
              </Suspense>
            ),
            action: async (meta) => {
              // Dynamically import the action and execute it
              const module = await import("./components/NoteItem");
              return await module.action(meta); // Await the action execution
            },
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
