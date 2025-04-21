function showTitle(){
  alert (document.getElementById('main-title').innerText);
}

//class=(.)
//id=(#)

function showMessage(){
  const message = document.querySelector('.message');
  alert (message.innerText);
}

function changeTitle(){
  const title = document.getElementById('main-title');
  title.innerText = "Hello World!";
  alert ('title changed');
}