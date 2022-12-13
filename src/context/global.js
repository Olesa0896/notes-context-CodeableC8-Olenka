import React, { useState } from "react";
import { useLocalStorage } from "../hooks";

const GlobalContext = React.createContext();

function GlobalProvider(props) {
  const [user, setuser] = useState("");
  const [notes, setNotes] = useLocalStorage("notes", []);
  const [content, setContent] = useState("");

  const value = {
    user,
    notes,
    content,
    setuser,
    setContent,
    onLogin: (user) => setuser(user),
    onCreate: (content) => {
      const newNote = { id: Date.now(), author: user, body: content };
      setNotes([...notes, newNote]);
    },
    onDelete: (id) => setNotes(notes.filter((note) => note.id !== id)),
    onLogout: () => setuser("")
  };

  return <GlobalContext.Provider value={value} {...props} />;
}

export { GlobalProvider, GlobalContext };
