import { useState } from "react";
import Part from "./Part";
const Content = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
      <p>{total}</p>
    </div>
  );
};
export default Content;
