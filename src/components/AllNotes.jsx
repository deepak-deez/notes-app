import React from "react";
import Note from "./Note";

const AllNotes = () => {
  return (
    <div className="grid h-100 grid-cols-2 sm:grid-cols-4 md:grid-cols-6 p-4 gap-4 overflow-y-scroll">
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
    </div>
  );
};

export default AllNotes;
