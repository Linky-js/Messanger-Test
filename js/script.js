let chatContent = document.querySelector('.chat-content');
let items = chatContent.children;
let newItemForm = document.querySelector('.chat-form-form');
let newItemTitle = newItemForm.querySelector('.chat-form-input');
let messageTemplate = document.querySelector('#message-template').content;
let newItemTemplate = messageTemplate.querySelector('.chat-message');
let chatFormButton = newItemForm.querySelector('.chat-form-button');

let addCheckHandler = function(item){
    var deleteButton = item.querySelector('.chat-message-button');
    deleteButton.addEventListener('click', function () {
        item.remove();
    })
};
for(let i = 0; i < items.length; i++){
    addCheckHandler(items[i]);
};
newItemForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    let messageText = newItemTitle.value;
    let message = newItemTemplate.cloneNode(true);
    let messageDescription = message.querySelector('.chat-message-text');
    messageDescription.textContent = messageText;
    addCheckHandler(message);

    chatContent.appendChild(message);
    newItemTitle.value = '';
});
