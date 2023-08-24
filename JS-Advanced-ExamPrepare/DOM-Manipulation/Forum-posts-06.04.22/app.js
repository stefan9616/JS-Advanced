window.addEventListener("load", solve);

function solve() {

  let title = document.getElementById('post-title');
  let postCategory = document.getElementById('post-category');
  let content = document.getElementById('post-content');

  document.getElementById('publish-btn').addEventListener('click', publish);
  let publishContainer = document.getElementById('review-list');

  function publish(e) {
    e.preventDefault();
    let titleField = title.value;
    let postCategoryField = postCategory.value;
    let contentField = content.value;

    if (titleField == '' || postCategoryField == '' || contentField == '') {
      return;
    }

    let li = document.createElement('li');
    li.className = 'rpost';

    let article = document.createElement('article');

    let h4 = document.createElement('h4');
    h4.textContent = titleField;

    let p1 = document.createElement('p');
    p1.textContent = `Category: ${postCategoryField}`;

    let p2 = document.createElement('p');
    p2.textContent = `Content: ${contentField}`;

    let editButton = document.createElement('button');
    editButton.className = 'action-btn edit';
    editButton.textContent = 'Edit';

    let approveButton = document.createElement('button');
    approveButton.className = 'action-btn approve';
    approveButton.textContent = 'Approve';

    editButton.addEventListener('click', edit);
    approveButton.addEventListener('click', approve)


    article.appendChild(h4);
    article.appendChild(p1);
    article.appendChild(p2);
    li.appendChild(article);
    li.appendChild(approveButton);
    li.appendChild(editButton);
    publishContainer.appendChild(li)

    title.value = '';
    postCategory.value = '';
    content.value = '';

    function edit(e) {
      e.preventDefault()
      title.value = titleField;
      postCategory.value = postCategoryField;
      content.value = contentField;

      let eventTarget = e.currentTarget.parentNode;
      eventTarget.remove();

    }

    function approve(e) {
      e.preventDefault()
      let approveContainer = document.getElementById('published-list');
      approveContainer.appendChild(h4);
      approveContainer.appendChild(p1);
      approveContainer.appendChild(p2);
      let eventTarget =  e.currentTarget.parentNode;
      eventTarget.remove();
      

      let clearBtn = document.getElementById('clear-btn');
      clearBtn.addEventListener('click', clear)

     
    }
    function clear(e) {
      e.preventDefault()
      let eventTarget = e.currentTarget.parentNode;
      eventTarget.remove();
    }
  }
}