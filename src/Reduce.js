import { useReducer } from "react";
import Add from "./ReducerPractice/Add";
import List from "./ReducerPractice/List";

export default function Reduce() {
  const [task, dispatch] = useReducer(tasksReducer, initialTasks);

  function handleAdd(text) {
    dispatch({
      type: "added",
      id: next++,
      text: text,
    });
  }

  function handleChange(task) {
    dispatch({
      type: "changed",
      task: task,
    });
  }

  function handleDelete(taskId) {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  }

  return (
    <>
      <h2>add tags</h2>
      <Add onAddTask={handleAdd} />
      <List
        task={task}
        onChangeTask={handleChange}
        onDeleteTask={handleDelete}
      />
    </>
  );
}

function tasksReducer(task, action) {
  switch (action.type) {
    case "added": {
      return [
        ...task,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "changed": {
      return task.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return task.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

let next = 3;
const initialTasks = [
  { id: 0, text: "Visit Kafka Museum" },
  { id: 1, text: "Watch a puppet show" },
  { id: 2, text: "Lennon Wall pic" },
];
