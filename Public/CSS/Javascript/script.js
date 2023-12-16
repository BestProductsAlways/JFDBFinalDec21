import "bootstrap/js/dist/dropdown";

//Function to populate dropdown menu
function populateDependentDropdowns() {
    
}

// Function to complete the selection

async function completeSelection() {
    
}

// Function to display checkboxes next to each row of available choices

function displayCheckboxes(data) {
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = ''; // clear previous content
    
    if (data.length > 0) {
        data.forEach(choice => {
            const checkbox = document.createElement('input'); 
            checkbox.type = 'checkbox';
            checkbox.value = choice;
            
            const label = document.createElement('label');
            label.textContent = choice;

            const checkboxContainer = document.createElement('div');
            checkboxContainer.classList.add('checkbox-container', 'mt-2');
            checkboxContainer.appendChild(checkbox);
            checkboxContainer.appendChild(label);

            resultsContainer.appendChild(checkboxContainer);
        });
    } else {
        //Display a message if there are no results
        resultsContainer.innerHTML = '<p>No data available</p>'
    }

            
            resultsContainer.appendChild(resultCard);
        };
    
    
