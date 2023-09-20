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

// Add a h3 element with the current time just after the h2
const h3 = document.createElement("h3");
h3.innerText = new Date().toLocaleTimeString();
document.querySelector("#sous-titre").after(h3);

// Change the time every second
setInterval(() => {
    document.querySelector("h3").innerText = new Date().toLocaleTimeString();
}, 1000);

// Modification dans la branche 1

// Modification dans la branche 2