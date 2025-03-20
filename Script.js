function AddTask(){
    const TaskInput = document.getElementById('TaskInput');
    const taskText = TaskInput.value.trim();

    if(taskText){
        const task = document.createElement('div');
        task.classList.add('task');
        task.textContent = taskText;

        document.getElementById('pending').appendChild(task);
        TaskInput.value='';
    }
}

dragula([document.getElementById('pending'), document.getElementById('done')])
.on('drag',function(el){
    el.classList.add('dragging');
})
.on('drop',function(el){
    el.classList.remove('dragging');
})
.on('over',function(el,container){
    container.classList.add('over');
})
.on('out',function(el,container){
    container.classList.remove('over');
});