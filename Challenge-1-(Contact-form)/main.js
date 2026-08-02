const button = document.querySelector('button');
const inputFields = document.querySelectorAll("input, textarea");


button.addEventListener('click', function(e) {
    e.preventDefault();
    inputFields.forEach(element => {

      if(element.value.trim() === '')
      element.classList.add('error');
      else
      element.classList.remove('error');
    });
   
});

document.addEventListener('click', function(e) {
    inputFields.forEach(element => {
        
        //Clicking should outside the current field and outside the button
        if (!element.contains(e.target) && !button.contains(e.target)) {
            //Remove the error class only when the fields are not empty
            if (element.value.trim() !== '') {
                element.classList.remove('error');
            }
        }
    });
});