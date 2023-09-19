import React, {useState} from "react";
import { nanoid } from "nanoid";
import Split from "react-split";
import Editor from "./components/Editor";
import Sidebar from "./components/Sidebar";

export default function App (){
  const [notes, setNotes] = useState([])
  const [currentNoteId, setCurrentNoteId] = useState(
    (notes[0] && notes[0].id) || "" 
  )
  return(
    <main>
      {
        notes.length > 0 ?
        <Split
          sizes={[30, 70]}
          direction="horizontal"
          className="split"
        >
          <Sidebar 
            notes={notes}
            currentNote={findCurrentNote()}
            setCurrentNoteId={setCurrentNoteId}
            newNote={{createNewNote}}
          />
          {
            currentNoteId &&
            notes.length > 0 &&
            <Editor 
              currentNote={findCurrentNote()}
              updateNote={updateNote}
            />
          }
        </Split>
        :
         <div className="no-notes">
          <h1>You have no notes</h1>
          <button
            className="first-note"
            onClick={createNewNote}
          >
            Create one now
          </button>
         </div>
      }
    </main>
  )
}