import inquirer from "inquirer";

let Mylist : string[] = [];

let condition = true;

while (condition) {
  const Todo = await inquirer.prompt([
    {
      name : "action",
      type: "list",
      message : "What do you want to do?",
      choices : ["Add Task", "Remove Task", "Mark Done", "Quit"]
    }
  ])

  if (Todo.action === "Add Task") {
    const newTask = await inquirer.prompt([
      {
        name : "addtask",
        type: "input",
        message : "Add Task"
      }
    ])
    Mylist.push(newTask.addtask);
    console.log(`Added task: ${newTask.addtask}`);
  } else if (Todo.action === "Remove Task") {
    const removedTask = await inquirer.prompt([
      {
        name : "removetask",
        type: "input",
        message : "Enter the task to remove"
      }
    ])
    const index = Mylist.indexOf(removedTask.removetask);
    if (index > -1) {
      Mylist.splice(index, 1);
      console.log(`Removed task: ${removedTask.removetask}`);
    } else {
      console.log(`Task not found: ${removedTask.removetask}`);
    }
  } else if (Todo.action === "Mark Done") {
    const doneTask = await inquirer.prompt([
      {
        name : "donetask",
        type: "input",
        message : "Enter the task to mark as done"
      }
    ])
    const index = Mylist.indexOf(doneTask.donetask);
    if (index > -1) {
      Mylist[index] = `- ${Mylist[index]}`;
      console.log(`Task marked as done: ${doneTask.donetask}`);
    } else {
      console.log(`Task not found: ${doneTask.donetask}`);
    }
  } else {
    condition = false;
    console.log(`Tasks remaining: ${Mylist.join(", ")}`);
  }
}