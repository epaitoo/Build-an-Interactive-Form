// On page load, the cursor appears in the "Name" field, ready for a user to type
const name = document.querySelector('#name');
name.focus();

const jobRoles = document.querySelector('#title');
const BasicInfo = document.getElementById('basic-info'); //gets the fieldset with the id '#basic-info'
const otherTitle = document.getElementById('other-title'); //input with type text

const design = document.querySelector('#design'); //select the design id
const color = document.getElementById('color'); //gets the select element with id "#color"

const activities = document.querySelector('.activities');

const payments = document.querySelector('.payments');
const creditCard = document.getElementById('credit-card');
const ccNum = document.getElementById('cc-num');
const zip = document.getElementById('zip');
const cvv = document.getElementById('cvv');



//name validation on input
name.addEventListener('input', () => {
    const nameText = name.value;
    const errorName = document.getElementById('error-name'); //error messsage
    if (nameText) {
        name.className = 'valid';
        name.classList.remove('invalid');
        errorName.className = 'none';
        BasicInfo.classList.remove("error");
    } else {
        name.classList.remove('valid');
        name.classList.add('invalid');
        errorName.textContent = 'Please enter your name';
        errorName.className = 'active';
        BasicInfo.classList.add("error");
    }
});


//email validation on input
const email = document.getElementById('mail');
const errorEmail = document.getElementById('error-email');
email.addEventListener('input', () => {
    const emailRegex = /^[\w\.=-]+\@[\w\.-]+.[a-z]{2,4}$/;
    const emailText = email.value;
    if (emailRegex.test(emailText)) {
        email.className = 'valid'; 
        email.classList.remove('invalid');
        errorEmail.className = "none";
        BasicInfo.classList.remove("error");
    } else if (emailText == ""){
        email.classList.remove('valid');
        email.classList.add('invalid');
        BasicInfo.classList.add("error");
    } else {
        email.classList.remove('valid');
        email.classList.add('invalid');
        errorEmail.textContent = "Please enter a valid email address";
        errorEmail.className = "active";
        BasicInfo.classList.add("error");
    }
});




//for loop to hide other-title Text field
for (let i = 0; i < BasicInfo.children.length; i++) {
    otherTitle.className = 'none';
}

// job role text field appears when user selects "Other" from the Job Role menu 
jobRoles.addEventListener('change', (e) => {
    if (e.target.value === 'other') {
        otherTitle.style.display = '';
        otherTitle.className = 'active';
    } else {
        otherTitle.style.display = 'none';
    }
});




// hide and disable all from drop down
for (let i = 0; i < color.children.length; i++) {
    color.children[i].classList.add("none");
}

// T-shirt color options are revealed based on the design selected.
design.addEventListener('change', (e) => { 
    
    if (e.target.value === 'js puns') {
        color.selectedIndex = 1; //shows the second option in the color select element
        for (let i = 0; i < color.children.length; i++) {
            if (color.children[i].index <=3) { //if the option index is less than or equal to 3
                color.children[0].style.display = 'none'; //hide the first select option "Please Select a Theme"
                color.children[i].classList.add('active');
                color.children[i].classList.remove('none');              
            } else {
                color.children[i].classList.contains('active');
                color.children[i].classList.remove('active');
                color.children[i].classList.add('none');
            }
        }

    } else if (e.target.value === 'heart js') {
        color.selectedIndex = 4; //shows the fifth option in the color select element
        for (let i = 0; i < color.children.length; i++) {
            if (color.children[i].index >= 4) { //if the option index is greater than or equal to 4
                color.children[i].classList.add('active');
                color.children[i].classList.remove('none');
            } else {
                color.children[i].classList.contains('active');
                color.children[i].classList.remove('active');
                color.children[i].classList.add('none');
            }
        }
    } 
});


activities.addEventListener('change', () => {
    const checkBox = activities.getElementsByTagName('input');
    const div = document.getElementById('total');
    const checkbox2 = document.getElementById('2');
    const checkbox3 = document.getElementById('3');
    const checkbox4 = document.getElementById('4');
    const checkbox5 = document.getElementById('5');

    //calculating the total based on the checkbox checked
    let total = 0
    const errorDiv = document.getElementById('activities-error');
    // errorDiv.textContent = 'Please at least one activity must be checked';


    for (let i = 0; i < checkBox.length; i++) {
        if (checkBox[i].checked) {
            total += parseInt(checkBox[i].value);
            errorDiv.classList.add('none'); //hide error message
            activities.classList.remove("error");
        }   
        div.innerHTML = 'Total:$' + total;
    }

      //   toggle visibility of total
      if (total) {  // if not 0
        div.classList.remove("hidden");
    } else{
        div.classList.add("hidden");
        errorDiv.classList.remove('none'); 
        errorDiv.classList.add('active');
        activities.classList.add("error");
     }

//selection of a workshop at the same date and time -- you should disable 
    if (checkbox2.checked) { //if checkbox 2 is checked
        checkbox4.setAttribute('disabled', true); //set an attribute of 'disabled' to checkbox 4
        //add a className of 'disable' to <label> which is parentNode of input
        checkbox4.parentNode.classList.add('disabled'); //'.disabled' sets the label textcolor to gray / grey
    } else if (checkbox4.checked) {
        checkbox2.setAttribute('disabled', true);
        checkbox2.parentNode.classList.add('disabled');
    } else {
        if (checkbox2.checked == false) {
        checkbox2.removeAttribute('disabled');
        checkbox2.parentNode.classList.remove('disabled');
        }
        checkbox4.removeAttribute('disabled');
        checkbox4.parentNode.classList.remove('disabled');
    } 

    if (checkbox3.checked) {
        checkbox5.setAttribute('disabled', true);
        checkbox5.parentNode.classList.add('disabled');
    } else if (checkbox5.checked) {
        checkbox3.setAttribute('disabled', true);
        checkbox3.parentNode.classList.add('disabled');
    } else {
        if (checkbox3.checked == false) {
        checkbox3.removeAttribute('disabled');
        checkbox3.parentNode.classList.remove('disabled');
        }
        checkbox5.removeAttribute('disabled');
        checkbox5.parentNode.classList.remove('disabled');
    } 

});


const external = document.querySelector('.external'); //Div containing paypal and Bitcoin divs

    for (let i = 0; i < external.children.length; i++) {
        external.className = 'none'; //hide external div
    }

payments.addEventListener('change', (e) => {
    const payPal = document.querySelector('.paypal');
    const bitCoin = document.querySelector('.bitcoin');

    if (e.target.value === 'credit card') {
        payPal.style.display = 'none'; //hide paypal divs
        bitCoin.style.display = 'none'; //hide bitcoin divs
        creditCard.style.display = ''; //show the credit card div
    } else if (e.target.value === 'paypal') {
        payPal.style.display = '';
        creditCard.style.display = 'none';
        bitCoin.style.display = 'none';
        external.className = 'active';
        ccNum.classList.remove('error'); //removes the error class from ccNum, same applies to the others. (This is done to help in form validation)
        zip.classList.remove('error');
        cvv.classList.remove('error');
    } else if (e.target.value === 'bitcoin') {
        payPal.style.display = 'none';
        creditCard.style.display = 'none';
        bitCoin.style.display = '';
        external.className = 'active';
        ccNum.classList.remove('error'); //removes the error class from ccNum, same applies to the others. (This is done to help in form validation)
        zip.classList.remove('error');
        cvv.classList.remove('error');
    }
});


// credit card number event listener on input
ccNum.addEventListener('input', () => {
    const errorCardNumber = document.getElementById('error-ccNum'); // Displays error message
    const ccNumInput = ccNum.value;
    const ccNumRegex = /^\d{13,16}$/; //regex on numbers with a range of 13 - 16

   if(ccNumInput === "") {
    errorCardNumber.textContent = "Please enter a credit card number"; 
    ccNum.classList.add('error');
    } else if (ccNumInput) {
        errorCardNumber.textContent = "Numbers must be 13 and 16 digits long"; 
    }
    if (ccNumRegex.test(ccNumInput)) {
        ccNum.className = 'valid'; 
        ccNum.classList.remove('invalid');
        errorCardNumber.className = 'none'; //hide error message
        ccNum.classList.remove('error');
    } else { 
        ccNum.classList.remove('valid');
        ccNum.classList.add('invalid');
        errorCardNumber.className = 'active'; //show error message
        ccNum.classList.add('error'); 
    }
});


//zip event listener on input
zip.addEventListener('input', () => {
    const errorZip = document.getElementById('error-zip'); // Displays error message
    const zipInput = zip.value;
    const zipRegex = /^\d{5}$/; //regex on numbers that must be equal to 5

    if (zipInput === "") {
        errorZip.textContent = "Please your zip code";
        zip.classList.add('error');
    } else if (zipInput) {
        errorZip.textContent = "Must be 5 digits long";  
    }

    if (zipRegex.test(zipInput)) {
        zip.className = 'valid'; 
        zip.classList.remove('invalid');
        errorZip.className = 'none'; //hide error message
        zip.classList.remove('error');
    } else { 
        zip.classList.remove('valid');
        zip.classList.add('invalid');
        errorZip.className = 'active'; //show error message
        zip.classList.add('error');
    }
});



 //cvv event listener on input
 cvv.addEventListener('input', () => {
    const errorCvv = document.getElementById('error-cvv'); // Displays error message
    const cvvInput = cvv.value;
    const cvvRegex = /^\d{3}$/; //regex on numbers that must be equal to 3


    if (cvvInput === "") {
        errorCvv.textContent = "Enter your cvv number";
        cvv.classList.add('error');
    } else if (cvvInput) {
        errorCvv.textContent = "Must be 3 digits long";
       
    }

    if (cvvRegex.test(cvvInput)) {
        cvv.className = 'valid'; 
        cvv.classList.remove('invalid'); 
        errorCvv.className = 'none'; //hide error message
        cvv.classList.remove('error');
    } else {
        cvv.classList.remove('valid');
        cvv.classList.add('invalid');
        errorCvv.className = 'active'; //show error message
        cvv.classList.add('error');
    }
});

function input () { //function to check if all input is empty
    const input = document.getElementsByTagName('input');
    for (let i = 0; i < input.length; i++) {
      const text = input[i].value;
      if (text == "") {
        input[i].classList.add('invalid');
      } else {
            input[i].classList.remove('invalid');
        }
       
    } 
}

























