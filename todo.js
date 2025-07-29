import { db, collection, addDoc, getDocs, deleteDoc, doc } from "./firebase-config.js";

const taskCollection = collection(db, "tasks");

// Add Task
window.addTask = async function () {
  const taskInput = document.getElementById("taskInput");
  const task = taskInput.value.trim();

  if (!task) return alert("Enter a task!");

  try {
    await addDoc(taskCollection, { text: task });
    taskInput.value = "";
    loadTasks();
  } catch (error) {
    console.error("Error adding task:", error);
  }
};

// Load Tasks
async function loadTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  const querySnapshot = await getDocs(taskCollection);
  querySnapshot.forEach((docSnap) => {
    const li = document.createElement("li");
    li.textContent = docSnap.data().text;

    // Delete button
    const deleteBtn = document.createElement("span");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = () => deleteTask(docSnap.id);

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}

// Delete Task
async function deleteTask(id) {
  await deleteDoc(doc(db, "tasks", id));
  loadTasks();
}

// Initial Load
loadTasks();
