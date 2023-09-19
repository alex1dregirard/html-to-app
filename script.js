console.log('Hello World')


changeTitle();

/**
 * Change the title of the page
 */
function changeTitle() {
    const title = document.getElementById('title');
    title.innerText += ' from JS';
    title.style.color = 'red';
}

// Add a h2 element under the h1
const h2 = document.createElement("h2");
h2.id = "sous-titre";
h2.innerText = "Welcome to the javascript world";
document.querySelector("h1").after(h2);
