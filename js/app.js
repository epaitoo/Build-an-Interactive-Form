// On page load, the cursor appears in the "Name" field, ready for a user to type
const name = document.querySelector('#name');
name.focus();

const jobRoles = document.querySelector('#title');
const design = document.querySelector('#design'); //select the design id
const color = document.getElementById('color'); //gets the select element with id "#color"




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
 

























