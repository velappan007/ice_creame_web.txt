

function showFlavor(flavor){
    alert(`You clicked on ${flavor} flavor!`);

}
function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    alert(`Thank you, ${name}! Your message has been sent.`);
    document.getElementById('contactForm').reset();
}

document.addEventListener('DOMContantLoad',() =>{

document.getElementById('contactForm').onsubmit =handleSubmit;
});