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

    for (let i = 0; i < checkBox.length; i++) {
        if (checkBox[i].checked) {
            total += parseInt(checkBox[i].value);
        }   
        div.innerHTML = 'Total:$' + total;
    }

      //   toggle visibility of total
      if (total) {  // if not 0
        div.classList.remove("hidden");
    } else{
        div.classList.add("hidden");
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
    const creditCard = document.getElementById('credit-card');
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
    } else if (e.target.value === 'bitcoin') {
        payPal.style.display = 'none';
        creditCard.style.display = 'none';
        bitCoin.style.display = '';
        external.className = 'active';
    }
});




























