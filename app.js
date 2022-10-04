/* Imports */
// this will check if we have a user and set signout link if it exists
import './auth/user.js';
import { getPosts } from './fetch-utils.js';
import { renderPost } from './render-utils.js';

/* Get DOM Elements */
const searchForm = document.getElementById('search-form');
const errorDisplay = document.getElementById('error');
const postList = document.getElementById('post-list');

/* State */
let error = null;
let posts = [];

/* Events */
window.addEventListener('load', async () => {
    const response = await getPosts();
    error = response.error;
    posts = response.data;

    if (error) {
        displayError();
    } else {
        displayPosts();
    }
});

searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(searchForm);
    const title = formData.get('title');

    const response = await getPosts(title);
    error = response.error;

    if (error) {
        displayError();
    } else {
        posts = response.data;
        displayPosts();
    }
});

/* Display Functions */
function displayError() {
    errorDisplay.textContent = error.message;
}

// function displayPosts() {
    postList.innerHTML = '';
    for (const post of posts) {
        const postEl = renderPost(post);
        postList.prepend(postEl);
    }
}
