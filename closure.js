/*
Using the Javascript closure allows us to create class-like behaviour and mimic private
properties that aren't accessible from the consuming code, yet maintain their values
*/

function CreateEmployee(firstName, lastName, jobTitle) {
    let fName = firstName;
    let lName = lastName;
    let jTitle = jobTitle;
    let popularity = 0;                     // private
    let messageStart = 'This employee, ';   // private

    function describe() {
        popularity++;

        if (popularity > 10) {
            messageStart = 'This very popular, often searched for employee, ';
        }
        let message = messageStart +
            fName + ' ' + lName +
            ', is a ' + jTitle + '.';

        return message;
    }

    return {
        firstName: fName,
        lastName: lName,
        jobTitle: jTitle,
        describe: describe
    }
}

let emp1 = CreateEmployee('Jane', 'Doe', 'Software Developer');
console.log(emp1.describe());

// now increase the popularity:
for(let i=0; i <= 10; i++) {
    let desc = emp1.describe();
}
console.log(emp1.describe());

