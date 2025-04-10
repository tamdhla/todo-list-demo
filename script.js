function addTask() {
    const input = document.getElementById('taskInput');
    const task = input.value;
    if (task) {
        const li = document.createElement('li');
        li.textContent = task;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = () => li.remove();
        li.appendChild(deleteBtn);
        document.getElementById('taskList').appendChild(li);
        input.value = '';
    }
}