
function solve() {
    const addBtn = document.querySelector('.action #add');
    addBtn.addEventListener('click', addToList);
 
    const resetBtn = document.querySelector('.action #reset');
    resetBtn.addEventListener('click', resetInputs);
 
    function resetInputs(e) {
        e.preventDefault();
 
        let titleInput = document.getElementById('title');
        let messageInput = document.getElementById('message');
        let recipientNameInput = document.getElementById('recipientName');
 
        messageInput.value = '';
        titleInput.value = '';
        recipientNameInput.value = '';
    }
 
    function addToList(e) {
        e.preventDefault();
        let titleInput = document.getElementById('title');
        let messageInput = document.getElementById('message');
        let recipientNameInput = document.getElementById('recipientName');
 
        let titleValue = titleInput.value;
        let messageValue = messageInput.value;
        let recipientNameValue = recipientNameInput.value;
 
        if (titleInput.value == '' || messageInput.value == '' || recipientNameInput.value == '') {
            return;
        }
        let liElement = document.createElement('li');
        let titleElement = document.createElement('h4');
        let recipientNameElement = document.createElement('h4');
        let messageElement = document.createElement('span');
        let divElement = document.createElement('div')
        let sendBtn = document.createElement('button');
        let deleteBtn = document.createElement('button')
        let ulElement = document.getElementById('list')
 
        titleElement.textContent = `Title: ${titleInput.value}`;
        recipientNameElement.textContent = `Recipient Name: ${recipientNameInput.value}`;
        messageElement.textContent = messageValue;
        divElement.setAttribute("id", 'list-action');
        sendBtn.setAttribute("type", 'submit');// <button type="submit" id="send">Send</button>
        sendBtn.setAttribute("id", 'send');
        
        deleteBtn.setAttribute("type", 'submit');
        deleteBtn.setAttribute("id", 'delete'); // <button type="submit" id="delete">Delete</button>
        
        
        sendBtn.textContent = 'Send';
        deleteBtn.textContent = 'Delete'
 
        divElement.appendChild(sendBtn);
        divElement.appendChild(deleteBtn);
 
        liElement.appendChild(titleElement);
        liElement.appendChild(recipientNameElement);
        liElement.appendChild(messageElement);
        liElement.appendChild(divElement);
        ulElement.appendChild(liElement);
 
        sendBtn.addEventListener('click', sentToList);
        deleteBtn.addEventListener('click', deleteFromList);
 
        messageInput.value = '';
        titleInput.value = '';
        recipientNameInput.value = '';
 
        function sentToList(e) {
            let sentListElement = document.querySelector('.sent-list');
            let sentLiElement = document.createElement('li');
            let sentRecipientElement = document.createElement('span');
            let sentTitleElement = document.createElement('span');
            let sentDivElement = document.createElement('div');
            let sentDeleteBtn = document.createElement('button');
 
            sentDivElement.setAttribute("class", 'btn');
            sentDeleteBtn.setAttribute("type", 'submit');
            sentDeleteBtn.setAttribute("class", 'delete');
            sentDeleteBtn.textContent = 'Delete';
            sentTitleElement.textContent = `Title: ${titleValue}`;
            sentRecipientElement.textContent = `To: ${recipientNameValue}`;
 
            sentDivElement.appendChild(sentDeleteBtn);
            sentLiElement.appendChild(sentRecipientElement);
            sentLiElement.appendChild(sentTitleElement);
            sentLiElement.appendChild(sentDivElement)
            sentListElement.appendChild(sentLiElement);
            ulElement.removeChild(liElement);
 
            sentDeleteBtn.addEventListener('click', deleteFromSentEmails);
 
            titleValue = '';
            recipientNameValue = '';
            messageValue = '';
 
            function deleteFromSentEmails(e) {
                let deletedListElement = document.querySelector('.delete-list');
                let deletedLiElement = document.createElement('li');
 
                deletedLiElement.appendChild(sentRecipientElement);
                deletedLiElement.appendChild(sentTitleElement);
                deletedListElement.appendChild(deletedLiElement);
                sentListElement.removeChild(sentLiElement);
 
            }
        }
        function deleteFromList(e) {
            let deletedListElement = document.querySelector('.delete-list');
            let deletedLiElement = document.createElement('li');
            let deletedTitleElement = document.createElement('span');
            let deletedRecipientNameElement = document.createElement('span');
 
            deletedTitleElement.textContent = `Title: ${titleValue}`;
            deletedRecipientNameElement.textContent = `To: ${recipientNameValue}`;
 
            deletedLiElement.appendChild(deletedRecipientNameElement);
            deletedLiElement.appendChild(deletedTitleElement);
            deletedListElement.appendChild(deletedLiElement);
            ulElement.removeChild(liElement);
        }
    }
}
