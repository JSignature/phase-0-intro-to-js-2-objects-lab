const employee = {

    name: "Dina",
    streetAddress: "123 Jump Street",


}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObj = {...employee}

    newObj[key] = value

    return newObj

}


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {

    employee[key] = value

    return employee
}



function deleteFromEmployeeByKey(employee, key) {
    
    const employeeClone = {...employee}
    delete employeeClone[key]

    return employeeClone
    
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    
   
    delete employee[key]

    return employee
    
}

