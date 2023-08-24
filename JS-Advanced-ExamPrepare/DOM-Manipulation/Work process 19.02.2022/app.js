window.addEventListener('load', solve);

function solve() {

    let budget = 0;
    let firstName = document.getElementById('fname');
    let lastName = document.getElementById('lname');
    let email = document.getElementById('email');
    let birth = document.getElementById('birth');
    let position = document.getElementById('position');
    let salary = document.getElementById('salary');
    let hireButton = document.getElementById('add-worker');
    hireButton.addEventListener('click', hire);
    let tbody = document.getElementById('tbody');

    function hire(e) {
        e.preventDefault();

        let firstNameValue = firstName.value;
        let lastNameValue = lastName.value;
        let emailValue = email.value;
        let birthValue = birth.value;
        let positionValue = position.value;
        let salaryValue = salary.value;

        if (firstNameValue == '' || lastNameValue == '' || emailValue == '' || birthValue == '' || positionValue == '' || salaryValue == '') {
            return;
        }

        let trEl = document.createElement('tr');
        let firstNameTd = document.createElement('td');
        firstNameTd.textContent = firstNameValue;
        let lastNameTd = document.createElement('td');
        lastNameTd.textContent = lastNameValue;
        let emailTd = document.createElement('td');
        emailTd.textContent = emailValue;
        let birthTd = document.createElement('td');
        birthTd.textContent = birthValue;
        let positionTd = document.createElement('td');
        positionTd.textContent = positionValue;
        let salaryTd = document.createElement('td');
        salaryTd.textContent = salaryValue;

        let firedButton = document.createElement('button');
        firedButton.textContent = 'Fired'
        firedButton.setAttribute("class", "fired")
        firedButton.addEventListener('click', fire);

        let editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.setAttribute("class", "edit");
        editButton.addEventListener('click', edit);

        trEl.appendChild(firstNameTd);
        trEl.appendChild(lastNameTd);
        trEl.appendChild(emailTd);
        trEl.appendChild(birthTd);
        trEl.appendChild(positionTd);
        trEl.appendChild(salaryTd);
        trEl.appendChild(firedButton);
        trEl.appendChild(editButton);
        tbody.appendChild(trEl);

        let sum = document.getElementById('sum');
        budget += Number(salaryValue)
        sum.textContent = budget.toFixed(2);

        firstName.value = '';
        lastName.value = '';
        email.value = '';
        birth.value = '';
        position.value = '';
        salary.value = '';

        function edit(e) {
            e.preventDefault()

            budget -= Number(salaryValue);
            sum.textContent = budget.toFixed(2);
            firstName.value = firstNameValue;
            lastName.value = lastNameValue;
            email.value = emailValue;
            birth.value = birthValue;
            position.value = positionValue;
            salary.value = salaryValue;

            let eventTarget = e.currentTarget.parentNode;
            eventTarget.remove();

        }

        function fire(e) {
            e.preventDefault()
    
            let eventTarget = e.currentTarget.parentNode;
            eventTarget.remove();
            budget -= Number(salaryValue);
            sum.textContent = budget.toFixed(2);
            
    
        }
    }
}
