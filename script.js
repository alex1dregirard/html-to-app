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
