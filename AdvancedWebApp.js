/* 
   Filename: AdvancedWebApp.js
   Content: An advanced web application that allows users to create and manage tasks, deadlines and tags.
*/

// Task Class
class Task {
  constructor(title, description, deadline, priority, tags) {
    this.title = title;
    this.description = description;
    this.deadline = deadline;
    this.priority = priority;
    this.tags = tags;
  }

  toString() {
    return `${this.title}\nDescription: ${this.description}\nDeadline: ${this.deadline}\nPriority: ${this.priority}\nTags: ${this.tags}\n`;
  }
}

// Task Manager Class
class TaskManager {
  constructor() {
    this.tasks = [];
  }

  addTask(title, description, deadline, priority, tags) {
    const task = new Task(title, description, deadline, priority, tags);
    this.tasks.push(task);
  }

  deleteTask(taskIndex) {
    if (taskIndex >= 0 && taskIndex < this.tasks.length) {
      this.tasks.splice(taskIndex, 1);
    }
  }

  getTasksByTag(tag) {
    return this.tasks.filter(task => task.tags.includes(tag));
  }

  getTasksByPriority(priority) {
    return this.tasks.filter(task => task.priority === priority);
  }

  toString() {
    let taskList = "";
    this.tasks.forEach((task, index) => {
      taskList += `Task ${index + 1}:\n${task}\n`;
    });
    return taskList;
  }
}

// Example Usage
const taskManager = new TaskManager();

taskManager.addTask(
  "Complete Project",
  "Finish the web development project by next Friday",
  "2022-12-31",
  "High",
  ["project", "web development"]
);

taskManager.addTask(
  "Prepare Presentation",
  "Create slides and rehearse presentation",
   "2022-12-20",
   "Medium",
   ["presentation", "public speaking"]
);

taskManager.addTask(
  "Buy Groceries",
  "Shop for groceries and household items",
   "2022-12-30",
   "Low",
   ["groceries", "shopping"]
);

console.log(taskManager.toString());

const highPriorityTasks = taskManager.getTasksByPriority("High");
console.log("High Priority Tasks:");
console.log(highPriorityTasks);

const webDevTasks = taskManager.getTasksByTag("web development");
console.log("Web Development Tasks:");
console.log(webDevTasks);