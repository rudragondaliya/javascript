let form = document.getElementById('form');
form.addEventListener('submit', function(event){
    event.preventDefault();

  let username = document.getElementById('username');
  let email = document.getElementById('email');
  let password = document.getElementById('password');
  let gender = document.querySelectorAll("input[name='gender']");
  let dob = document.getElementById('date');

  let validate = () => {

    if(username.value.trim() === ""){
        document.querySelector('.usernameError').classList.remove('d-none');
    }
    else{
        document.querySelector('.usernameError').classList.add('d-none');
    }

    if(email.value.trim() === ""){
        document.querySelector('.emailError').classList.remove('d-none');
    }
    else{
        document.querySelector('.emailError').classList.add('d-none');
    }
    if(password.value.trim() === ""){
        document.querySelector('.passwordError').classList.remove('d-none');
    }
    else{
        document.querySelector('.passwordError').classList.add('d-none');
    }

    if(!gender[0].checked && !gender[1].checked){
        document.querySelector('.genderError').classList.remove('d-none');
    }
    else{
        document.querySelector('.genderError').classList.add('d-none');
    }
    if(dob.value.trim() === ""){
        document.querySelector('.dateError').classList.remove('d-none');
    }
    else{
        document.querySelector('.dateError').classList.add('d-none');
    }

  }
  
  validate();

});