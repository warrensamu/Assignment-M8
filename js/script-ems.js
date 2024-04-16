// CREATE AN ARRAY OF EMPLOYEES
let allEmployees 

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
if (localStorage.getItem('employees') !== null) {
    allEmployees = JSON.parse(localStorage.getItem ('employees'))
} else {
    allEmployees = [
        [
            12345678,
            'Barbara Boxer',
            1234,
            'barbara@vectacorp.com',
            'Administrative'
        ],
        [
            22345678,
            'Joe Biden',
            2234,
           'joe@vectacorp.com',
            'Executive'
        ],
        [
            32345678,
            'Barak Obama',
            3234,
            'barak@vectacorp.com',
            'Quality Assurance'
        ],
        [
            42345678,
           'George Washington',
            234,
           'george@vectacorp.com',
            'Marketing'
        ],
        [
            52345678,
            'Eric Idle',
            5234,
            'eric@vectacorp.com',
            'Sales'
        ]
    ]
}

// GET DOM ELEMENTS
let form = document.getElementById('addForm')
let empTable = document.getElementById('empTable')
let empCount = document.getElementById('empCount')

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid()

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()
    // GET THE VALUES FROM THE TEXT BOXES
    let newID = parseInt(document.getElementById('id').value)
    let newName = document.getElementById('name').value
    let newExtension = parseInt(document.getElementById('extension').value)
    let newEmail = document.getElementById('email').value
    let newDepartment = document.getElementById('department').value
    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    let newEmployee = [
        newID,
        newName,
        newExtension,
        newEmail,
        newDepartment
    ]
    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    allEmployees.push(newEmployee)
    // BUILD THE GRID
    buildGrid()
    // RESET THE FORM
    form.reset()
    // SET FOCUS BACK TO THE ID TEXT BOX
    form.id.focus()
});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE
    if(e.target.classList.contains('delete')) {
        if(confirm('Delete user? (this cannot be undone)')) {
        // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
        let rowIndex = e.target.parentElement.parentElement.rowIndex
        // REMOVE EMPLOYEE FROM ARRAY
        allEmployees.splice(rowIndex - 1, 1)
        // BUILD THE GRID
        buildGrid()
        }
    }
});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    empTable.lastElementChild.remove()
    // REBUILD THE TBODY FROM SCRATCH
    let tbody = document.createElement('tbody')
    // LOOP THROUGH THE ARRAY OF EMPLOYEES

    // REBUILDING THE ROW STRUCTURE
    for (let employee of allEmployees) {
        tbody.innerHTML +=
        `
            <tr>
                <td>${employee[0]}</td>
                <td>${employee[1]}</td>
                <td>${employee[2]}</td>
                <td>${employee[3]}</td>
                <td>${employee[4]}</td>
                <td><button class="btn btn-small btn-danger delete">X</button></td>
            </tr>
        `
    }
    // BIND THE TBODY TO THE EMPLOYEE TABLE
    empTable.appendChild(tbody)
    // UPDATE EMPLOYEE COUNT
    empCount.value = `(${allEmployees.length})`
    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees', JSON.stringify(allEmployees))
};