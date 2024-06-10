let create_tasks = () => {
    let task_details = document.getElementById("new-task");
    let create_task = document.getElementById("create-task");
    let task_list = document.getElementById("list-data");
    create_task.addEventListener('click', () => {
        if (task_details.value == "") {
            alert("Please enter task !");
        }
        else {
            const task = `
                <div id="tasks" class="flex">
                    <div id="task-done" class="flex"><img src="files/check-mark.png" alt="task-done"><span></span></div>
                    <p id="task-details">
                    ${task_details.value}
                    </p>
                    <button id="del-task"><img src="files/delete.png" alt="delete"></button>
                </div>
            `;
            task_list.innerHTML += task;
            del_tasks();
            check_button();
            task_details.value = "";
            let last_task = document.querySelector("#tasks:last-child");
            last_task.style.scale = "0";
            const visible = setTimeout(() => {
                last_task.style.scale = "1";
            }, 100);
        }
    })
}
create_tasks();
let check_button = () => {
    const checked = document.querySelectorAll("#task-done");
    checked.forEach((item) => {
        let action = false;
        item.addEventListener('click', () => {
            if (action == false) {
                item.children[0].style.display = "block";
                item.children[1].style.display = "block";
                item.style.border = "3px solid #000";
                item.style.opacity = "0.5";
                item.parentNode.style.opacity = "0.5";
                item.parentNode.style.filter = "grayscale(1)";
                item.parentElement.children[1].children[0].style.width = "100%";
                item.parentElement.children[1].style.opacity = "0.5";
                item.parentElement.children[1].style.color = "#000";
                action = true;
            }
            else {
                item.children[0].style.display = "none";
                item.children[1].style.display = "none";
                item.style.opacity = "1";
                item.parentNode.style.opacity = "1";
                item.parentNode.style.filter = "grayscale(0)";
                item.style.border = "3px solid var(--mid-blue)";
                item.parentElement.children[1].children[0].style.width = "0%";
                item.parentElement.children[1].style.opacity = "1";
                item.parentElement.children[1].style.color = "var(--mid-blue)";
                action = false;
            }
        });
    });
}
let del_tasks = () => {
    const del_btn = document.querySelectorAll("#del-task");
    del_btn.forEach((item) => {
        item.addEventListener('click', () => {
            item.parentNode.style.scale = "0";
            const myTimeout = setTimeout(() => {
                item.parentNode.remove();
            }, 250);
        })
    })
}

del_tasks();
check_button();
