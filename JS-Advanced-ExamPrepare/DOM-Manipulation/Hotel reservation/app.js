//window.addEventListener('load', solve);

function solve() {

    let firstName = document.getElementById('first-name');
    let lastName = document.getElementById('last-name');
    let dateIn = document.getElementById('date-in');
    let dateOut = document.getElementById('date-out');
    let numberOfGuests = document.getElementById('people-count');
    let nextBtn = document.getElementById('next-btn');
    nextBtn.addEventListener('click', publish);

    let ul = document.querySelector('.info-list');
    let ulConfirm = document.querySelector('.confirm-list');

    function publish(e) {
        e.preventDefault();

        let firstNameField = firstName.value;
        let lastNameField = lastName.value;
        let dateInField = dateIn.value;
        let dateOutField = dateOut.value;
        let numberOfGuestsField = numberOfGuests.value;

        if(firstNameField == '' || lastNameField == ''|| dateInField == '' || dateOutField == '' || numberOfGuestsField == ''){
            return;
        }

        let liEl = document.createElement('li');
        liEl.className = 'reservation-content';

        let article = document.createElement('article');

        let h3 = document.createElement('h3');
        h3.textContent = `Name: ${firstNameField} ${lastNameField}`;

        let p1 = document.createElement('p');
        p1.textContent = `From date: ${dateInField}`

        let p2 = document.createElement('p');
        p2.textContent = `To date: ${dateOutField}`

        let p3 = document.createElement('p');
        p3.textContent = `For ${numberOfGuestsField} people`

        let editBtn = document.createElement('button');
        editBtn.className = 'edit-btn';
        editBtn.textContent = 'Edit';


        let continueBtn = document.createElement('button');
        continueBtn.className = 'continue-btn';
        continueBtn.textContent = 'Continue';

        continueBtn.addEventListener('click', next);
        editBtn.addEventListener('click', edit);

        article.appendChild(h3);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(p3);
        liEl.appendChild(article);
        liEl.appendChild(editBtn);
        liEl.appendChild(continueBtn);
        ul.appendChild(liEl);

        firstName.value = '';
        lastName.value = '';
        dateIn.value = '';
        dateOut.value = '';
        numberOfGuests.value = '';
        nextBtn.disabled = true;
        editBtn.disabled = false;
        continueBtn.disabled = false;
       

        function edit(e) {
            e.preventDefault();
            firstName.value = firstNameField;
            lastName.value = lastNameField;
            dateIn.value = dateInField;
            dateOut.value = dateOutField;
            numberOfGuests.value = numberOfGuestsField;
            nextBtn.disabled = false;

            liEl.remove()
        }

        function next(e) {
            e.preventDefault();
            let li = document.createElement('li');
            li.className = 'reservation-content';

            let article = document.createElement('article');

            let h3 = document.createElement('h3');
            h3.textContent = `Name: ${firstNameField} ${lastNameField}`;

            let p1 = document.createElement('p');
            p1.textContent = `From date: ${dateInField}`

            let p2 = document.createElement('p');
            p2.textContent = `To date: ${dateOutField}`

            let p3 = document.createElement('p');
            p3.textContent = `For ${numberOfGuestsField} people`

            let confirmBtn = document.createElement('button');
            confirmBtn.className = 'confirm-btn';
            confirmBtn.textContent = 'Confirm';


            let cancelBtn = document.createElement('button');
            cancelBtn.className = 'cancel-btn';
            cancelBtn.textContent = 'Cancel';

            confirmBtn.addEventListener('click', confirm);
            cancelBtn.addEventListener('click', cancel);

            article.appendChild(h3);
            article.appendChild(p1);
            article.appendChild(p2);
            article.appendChild(p3);
            li.appendChild(article);
            li.appendChild(confirmBtn);
            li.appendChild(cancelBtn);
            ulConfirm.appendChild(li);

            ul.remove();

            

        }
        function confirm(){
                
            let verification = document.getElementById('complete-reservation');
            let verificationField = document.getElementById('verification');
            
            verificationField.className = 'reservation-confirmed'
            verificationField.textContent = 'Confirmed.';
            verification.appendChild(verificationField);

            ulConfirm.remove();
            nextBtn.disabled = false;

        }
        function cancel(){
            
            let verification = document.getElementById('complete-reservation');
            let verificationField = document.getElementById('verification');
            
            verificationField.className = 'reservation-cancelled';
            verificationField.textContent = 'Cancelled.';
            verification.appendChild(verificationField);

            ulConfirm.remove();
            nextBtn.disabled = false;
        }
    }
}
solve()





