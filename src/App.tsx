import React from "react";
// Step 5: Remove the un-necessary import statements
//         Import our TaskList component.
import TaskList from "./components/tasks/TaskList";
import "./App.scss";

function App() {
  // Step 6: Removing the un-necessary coding.
  return (
    <div className="container m-8">
      {/* Step 7: Importing our TaskList component */}
      <TaskList />
    </div>
  );
}

export default App;
