/* Imports */
import '../auth/user.js';
import { createPost } from '../fetch-utils.js';

/* Get DOM Elements */
const postForm = document.getElementById('post-form');
const errorDisplay = document.getElementById('error');
const addBtn = document.getElementById('add-post');

/* State */
let error = null;

/* Events */
postForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    addBtn.disabled = true;

    const formData = new FormData(postForm);

    const post = {
        title: formData.get('title'),
        description: formData.get('description'),
        category: formData.get('category'),
        contact: formData.get('contact'),
    };

    const response = await createPost(post);
    error = response.error;
    addBtn.disabled = false;

    if (error) {
        displayError();
    } else {
        location.assign('/');
    }
});

/* Display Functions */

function displayError() {
    if (error) {
        // eslint-disable-next-line no-console
        console.log(error);
        errorDisplay.textContent = error.message;
    } else {
        errorDisplay.textContent = '';
    }
}
