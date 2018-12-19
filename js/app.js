
const name = document.querySelector('#name');
name.focus();

const jobRoles = document.querySelector('#title');

const design = document.querySelector('#design');


 
jobRoles.addEventListener('change', (e) => {
    const fieldSet = jobRoles.parentNode;
    const optionValue = jobRoles.value;

        if (optionValue === 'other') {  
            const label = document.createElement('label');
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



// design.addEventListener('change', (e) => {
//     const shirtColor = document.getElementById("colors-js-puns");
//     const color = document.getElementById('color');
//     if (design.value == "js puns") {
//         color.selectedIndex = "0";
//         for(let i = 0; i < color.children.length; i++) {
            
//             if (color.children[i].value === "tomato" || color.children[i].value === "steelblue" || color.children[i].value === "dimgrey") {
//                 color.children[i].style.display = "none";   
//             } else {
//                 color.children[i].style.display = ""; 
                
//             }     
//         }  
//     }

//     if (design.value == "heart js") {
//         color.selectedIndex = "0";
//         for(let i = 0; i < color.children.length; i++) {
//             if (color.children[i].value === "cornflowerblue" || color.children[i].value === "darkslategrey" || color.children[i].value === "gold") {
//                 color.children[i].style.display = "none";     
//             } else {
//                 color.children[i].style.display = ""; 
                
//             }
//         }
//     } 
// });

design.addEventListener('change', (e) => {
    const color = document.getElementById('color');

    if (e.target.value == 'js puns') {
        for (let i = 0; i < color.children.length; i++) {
            if (color.children[i].index <=2) {
                color.children[i].classList.add('active');
            } else {
                color.children[i].classList.remove('active');
                color.children[i].classList.add('none');
            }
        }

    }
    if (e.target.value == 'heart js') {
        for (let i = 0; i < color.children.length; i++) {
            if (color.children[i].index >= 3) {
                color.children[i].classList.add('active');
            } else {
                color.children[i].classList.remove('active');
                color.children[i].classList.add('none'); 
            }
        }
    }
    
    
});
 








