import styled from "@emotion/styled";

import Note from "./Note";
import React, { useContext } from "react";
import { GlobalContext } from "../context/global";

const Container = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: 1fr 1fr;
`;

function NoteList() {
  const { notes } = useContext(GlobalContext);

  return (
    <Container>
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </Container>
  );
}

export default NoteList;
