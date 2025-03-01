//TODO: BACKGROUND CHANGER 

const bgColor = document.body;

function btnTheme(){
        const randomColor = Math.floor(Math.random() *10000)
        document.getElementById('themeBtn').style.transform = "rotate(90deg)";
        document.getElementById('themeBtn').style.transition  = "transform .3s ease-in-out";
        bgColor.style.backgroundColor = "#"+ randomColor;
 }
document.getElementById('themeBtn').addEventListener('transitionend',function(){
   themeBtn.style.transform = 'rotate(0)'
})



// IDEA:TODAY TIME      

const now = new Date();
const onlyDate = now.toDateString('en-GB', { weekday: 'long' });
    console.log(onlyDate);
    const formattedDate = now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: '2-digit' });
    const formattedTime = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: true });
    const dateTime = `${formattedDate} ${formattedTime}`;
 document.getElementById('todayDate').innerText = `${onlyDate}  `

//BUG: COMPLETE BUTTONS ALL EVENTS

  let totalTask = document.getElementById('totalTask');
  let assignedTask = document.getElementById('assignedTask');
  const taskTitles = document.getElementsByClassName('taskTitle');
  const activityLogs = document.getElementById('activityLog');
  const btnClearHistory = document.getElementById('clearHistory');


//TODO:THE COMPLETE TIGGER START 

  const btnComplete = document.getElementsByClassName('complete');

  for (let i = 0; i < btnComplete.length; i++) {

    btnComplete[i].addEventListener('click', function (event) {

      const task = taskTitles[i].innerText; //TODO:STORE THE ALL [i] TASK TITTLES 
      window.alert('You  Completed !✅ The ' + `${task}`); //TODO: ALERT WHEN COMPLETE A TASK
      btnComplete[i].classList.add('cursorNotAllowed') ; //TODO: AFTER ALERT DISABLE THE COMPELET BUTTON
      totalTask.innerText = parseInt(totalTask.innerText) + 1;//TODO:INCREASE TOTAL TASK 
      assignedTask.innerText = parseInt(assignedTask.innerText) - 1;//TODO: DECREASE ASSIGNED TASK
      
  //TODO: TASK ACTIVITY HISTORY 

    const newTaskHistory = document.createElement('div');
    newTaskHistory.classList.add('primary-color', 'p-3', 'rounded-lg');
    newTaskHistory.innerHTML = 
    `
    <p class="text-sm">
      You have completed the
        <span class="font-semibold">
          ${task}
           </span>
 
        Task
          <span class="opacity-40 md:mt-1 float-end font-medium">
          ${dateTime}
          </span>
    </p>
    `

     activityLogs.appendChild(newTaskHistory);
    // console.log(newTaskHistory);
    //IDEA: IF DONE ALL TASK SHOW ALERT
      if(assignedTask.innerText == '0'){
         window.alert("Incredible! You've conquered every challenge \n —mission accomplished! 🚀✅")
      }
    });
  } 

  function clean(){
    const removeElemnts = activityLogs.querySelectorAll('div');
    for (let i = 0; i < removeElemnts.length; i++) {
      const clearHistory = removeElemnts[i];
      clearHistory.remove();
    }
  }
  
