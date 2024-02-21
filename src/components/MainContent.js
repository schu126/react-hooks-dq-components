import React from "react";
import AlbumList from "./AlbumList";
import AlbumCard from "./AlbumCard";
import GenrePicker from "./GenrePicker";

function MainContent() {
  return (
  <main>
    <GenrePicker />
    <AlbumList />
    {/* <AlbumCard /> */}
  </main>
  )
}

export default MainContent;
