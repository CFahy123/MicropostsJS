class UI {
    constructor() {
        this.post = document.querySelector('#posts');
        this.titleInput = document.querySelector('#title');
        this.bodyInput = document.querySelector('#body');
        this.idInput = document.querySelector('#id');
        this.postSubmit = document.querySelector('.post-submit');
        this.forState = 'add';
    }

    showPosts(posts) {
        let output = '';
        posts.forEach((post) => {
            output += `
                <div class="card mb-3">
                    <div class="card-body">
                        <h4 class="card-title">${post.title}</h4>
                        <p class="card-text">${post.body}</p>
                        <a href="#" class="edit card-link" data-id="${post.id}">
                            <i class="fa fa-pencil"></i>
                        </a>
                        <a href="#" class="delete card-link" data-id="${post.id}">
                            <i class="fa fa-remove"></i>
                        </a>
                    </div>
                </div>
            `;
        })
        this.post.innerHTML = output;
    }

    showAlert(message,className) {
        this.clearAlert()

        // Create Div
        const div = document.createElement('div');
        div.className = className;
        // Add text
        div.appendChild(document.createTextNode(message));

        // get parent
        const container = document.querySelector('.postContainer');

        // Get Posts
        const posts = document.querySelector('#posts')

        // Insert alert div
        container.insertBefore(div,posts);

        setTimeout(() => {
            this.clearAlert();
        }, 3000)
 
    }

    clearAlert() {
        const currentAlert = document.querySelector('.alert')

        if (currentAlert) {
            currentAlert.remove();
        }
    }

    clearFields() {
        this.titleInput.value =''
        this.bodyInput.value = ''
    }

    fillForm(data) {
        this.idInput.value = data.id;
        this.titleInput.value = data.title;
        this.bodyInput.value = data.body;

        this.changeFormState('edit');

    }

    // Clear id hidden val
    clearIdInput() {
        this.idInput.value = '';
    }

    // Change the form state
    changeFormState(type) {
        if(type === 'edit') {
            this.postSubmit.textContent = 'Update Post';
            this.postSubmit.className = 'post-submit btn btn-warning btn-block';

            //Create cancel button
            const button = document.createElement('button');
            button.className = 'post-cancel btn btn-light btn-block';
            button.appendChild(document.createTextNode('Cancel Edit'));

            // Insert the button into the dom
                //get the parent
            const cardForm = document.querySelector('.card-form');
            // get element to insert before
            const formEnd = document.querySelector('.form-end');
            // Insert button
            cardForm.insertBefore(button,formEnd);   
        } else {
            this.postSubmit.textContent = 'Post It';
            this.postSubmit.className = 'post-submit btn btn-primary btn-block';
            // Remove Cancel button
            if(document.querySelector('.post-cancel')) {
                document.querySelector('.post-cancel').remove();
            }

            // Clear Id from hidden field
            this.clearIdInput();
            // Clear text fields
            this.clearFields();




        }
    }




}

export const ui = new UI();
