import React from "react";
import Task from "./Task";
import { TaskListProps } from "./TaskList";

export default function Tasks({ dataParsed, onComplete, onDelete, toggle, token }:TaskListProps) {
  const filteredTasks = dataParsed.filter(
    (task) =>
      task.done === toggle &&
      (token
        ? task.taskName?.toLowerCase().includes(token.toLowerCase())
        : true)
  );

  return (
    <>
      {filteredTasks.map((task) => (
        <Task
          {...task}
          onComplete={onComplete}
          onDelete={onDelete}
        />
      ))}
    </>
  );
}
