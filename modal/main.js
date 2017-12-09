// Get modal element

var modal = document.getElementById('modalDialog');

// get modalbtn element

var modalBtn = document.getElementById('modalBtn');

// get closebtn element

var closeBtn = document.getElementsByClassName('closeBtn')[0];


// add click function for the modal

modalBtn.addEventListener('click',openModal);

function openModal(){
  // change the display value of modal to 'block'
  modal.style.display = 'block';
}

// add closeBtn function

closeBtn.addEventListener('click', closeModal);

function closeModal(){
  // change the display value of modal to 'block'
  modal.style.display = 'none';
}

// add one more function when click on outside the modal should close the modal
window.addEventListener('click', windowClose);

function windowClose(e){
  if(e.target == modal){
    modal.style.display = 'none';
  }
}
