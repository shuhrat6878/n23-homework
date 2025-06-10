const h1=document.querySelector('h1')
h1.textContent = 'Royxattan otish'
h1.style.color ='green'


const form = document.getElementById("login");

const natija = document.getElementById("natija");

form.addEventListener("submit", function (event) {
  event.preventDefault(); 

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "abbosovich1999@gmail.com" && password === "123456") {
    natija.textContent = "kirish muvafaqiyatli";
    natija.style.color = "green";
  } else {
    natija.textContent = "email yoki parol xato";
    natija.style.color = "red";
  }
});












// const btn = document.getElementById('btn');

// btn.onclick = ()=>{
//     document.body.style.backgroundColor = 'black';
// }

// const dark = ()=>{
//     document.body.style.backgroundColor = 'black';
// }

// btn.addEventListener('click', () => {
//     if (document.body.style.backgroundColor == '' || document.body.style.backgroundColor == 'white') {
//         document.body.style.backgroundColor = 'black';
//         btn.style.backgroundColor = 'white';
//         btn.style.color = 'black';
//     }else {
//         document.body.style.backgroundColor = 'white';
//         btn.style.backgroundColor = 'black';
//         btn.style.color = 'white';
//     }
// });

// btn.addEventListener('click', ()=>{
//     const li = document.createElement('li');
//     li.textContent = prompt('Enter text');
//     const ul = document.querySelector('ul');
//     ul.appendChild(li);
// });

// const taskBtn = document.querySelector('#taskBtn');

// taskBtn.addEventListener('click', () => {
//     const tasksList = document.querySelector('#tasksList');
//     const taskInput = document.querySelector('#taskInput');
//     const task = taskInput.value;
//     if (task.trim() === '') {
//         alert('Enter please task');
//         return;
//     }
//     const taskLi = document.createElement('li');
//     taskLi.textContent = task;
//     const deleteTaskBtn = document.createElement('button');
//     deleteTaskBtn.style.marginLeft = '10px';
//     deleteTaskBtn.textContent = 'Delete';
//     deleteTaskBtn.addEventListener('click', () => {
//         taskLi.remove();
//     });
//     taskLi.appendChild(deleteTaskBtn);
//     tasksList.appendChild(taskLi);
//     taskInput.value = '';
// });




// const container=document.querySelector('.container')

// for(let i=1; i<4; i++)
// {
//     const btn=document.createElement('button')
//     btn.style.backgroundColor='green'
//     btn.textContent=`Box${i}`
//     container.appendChild(btn)
// }
// container.style.display = 'flex';
// container.style.gap = '10px';
// container.style.justifyContent = 'center'