import React, { useState, useEffect } from "react";
import { Checkbox } from "@progress/kendo-react-inputs";
import styles from "./tasklist.module.scss";

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

const tasks: Task[] = [
  { id: "AB123", title: "Write article introduction", completed: false },
  { id: "AB1234", title: "Implement task list view", completed: false },
  { id: "AB1235", title: "Add checkbox functionality", completed: false },
];

export default function TaskList() {
  const [taskList, setTaskList] = useState<Task[]>(tasks);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // Perhaps we can add the useEffect hook right here.

  function onCompletionChange(event: any, taskId: string) {
    setTaskList((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: event.value } : task
      )
    );
  }

  return (
    <ul className={styles.taskList}>
      {taskList.map((task) => (
        <li key={task.id}>
          <Checkbox
            label={task.title}
            labelClassName={task.completed ? styles.completedItem : ""}
            checked={task.completed}
            onChange={(event) => onCompletionChange(event, task.id)}
          />
        </li>
      ))}
    </ul>
  );
}
