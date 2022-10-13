addingEventListener(); // Call the event listener function

function addingEventListener() {
    const input = document.getElementById('button');
    input.addEventListener('click', function() {
        alert('I was clicked!');
    })
}

