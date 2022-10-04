export function renderPost(post) {
    const li = document.createElement('li');
    li.classList.add('post');

    const h2 = document.createElement('h2');
    h2.textContent = post.title;

    const span = document.createElement('span');
    span.textContent = getCategoryEmoji(post.category);
    span.classList.add('category');

    li.append(h2, span);

    if (post.image_url) {
        const img = document.createElement('img');
        img.classList.add('post-image');
        img.src = post.image_url;
        li.append(img);
    }

    const pDescription = document.createElement('p');
    pDescription.classList.add('description');
    pDescription.textContent = post.description;

    const pContact = document.createElement('p');
    pContact.classList.add('contact');
    pContact.textContent = post.contact;

    li.append(pDescription, pContact);

    return li;
}

function getCategoryEmoji(category) {
    if (category === 'Free') return '🎁';
    if (category === 'Housing') return '🏠';
    if (category === 'Selling') return '💸';
    if (category === 'PSA') return '📣';
    return '❓';
}
