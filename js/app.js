// On page load, the cursor appears in the "Name" field, ready for a user to type
const name = document.querySelector('#name');
name.focus();

const jobRoles = document.querySelector('#title');
const design = document.querySelector('#design'); //select the design id
const color = document.getElementById('color'); //gets the select element with id "#color"
const activities = document.querySelector('.activities');




// job role text field appears when user selects "Other" from the Job Role menu 
jobRoles.addEventListener('change', (e) => {
    const fieldSet = jobRoles.parentNode;
    const optionValue = jobRoles.value;

        if (optionValue === 'other') {  //if the value of the jobrole === option with value 'other'
            const label = document.createElement('label'); //then create a label
            const input = document.createElement('input');
            input.type = 'text';
            input.placeholder = 'Your Job Role';
            label.id = 'other-title';
            label.appendChild(input);
            fieldSet.appendChild(label); 
        } else {
            const label = fieldSet.lastElementChild;
            if (optionValue !== 'other') { 
                label.style.display = 'none';
            }
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
                color.children[0].style.display = 'none';
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




























