const titleInput = document.querySelector('input');
const bodyInput = document.querySelector('textarea');
const addButton = document.getElementById('addPostButton');
const postArea = document.getElementById('postArea');

function createPost(titleInput, bodyInput) {

	const div = document.createElement('div');
	div.className = "post";

	const title = document.createElement('h1');
	title.textContent = titleInput;

	const body = document.createElement('p');
	body.innerHTML = bodyInput;

	const editBtn = document.createElement('button');
	editBtn.className = "edit";

	const editIcon = document.createElement('i');
	editIcon.className = "fa fa-pencil-square-o";

	editBtn.appendChild(editIcon);

	const removeBtn = document.createElement('button');
	removeBtn.className = "remove";

	const removeIcon = document.createElement('i');
	removeIcon.className = "fa fa-trash";

	removeBtn.appendChild(removeIcon);

	div.appendChild(title);
	div.appendChild(body);
	div.appendChild(editBtn);
	div.appendChild(removeBtn);

	return div;
}

addButton.addEventListener('click', ()=> {

	const post = createPost(titleInput.value, bodyInput.value);
	postArea.appendChild		(post,post);

	titleInput.value = "";
	bodyInput.value = "";

});


postArea.addEventListener('click', (event)=> {

	if(event.target.tagName === 'BUTTON') {

		const post = event.target.parentNode;

		if(event.target.className === 'remove') {
			postArea.removeChild(event.target.parentNode);
		}

		else if(event.target.className === 'edit') {

			
	
			const editInput = document.createElement('input');
			editInput.value = post.querySelector('h1').textContent;

			post.insertBefore(editInput, post.querySelector('h1'));
			post.removeChild(post.querySelector('h1'));


			const bodyInput = document.createElement('textarea');
			bodyInput.textContent = post.querySelector('p').innerHTML;

			post.insertBefore(bodyInput, post.querySelector('p'));
			post.removeChild(post.querySelector('p'));

			event.target.className = 'save';


		}

		else if(event.target.className === 'save') {

			const title = document.createElement('h1');
			title.textContent = post.querySelector('input').value;

			post.insertBefore(title, post.querySelector('input'));
			post.removeChild(post.querySelector('input'));

			const body = document.createElement('p');
			body.innerHTML = post.querySelector('textarea').value;

			post.insertBefore(body, post.querySelector('textarea'));
			post.removeChild(post.querySelector('textarea'));


			event.target.className = 'edit';



		}


	}

});