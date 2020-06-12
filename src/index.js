const pinsEndpoint = "http://localhost:3000/pins"

document.addEventListener("DOMContentLoaded", () => {
    getPins()
    const createPinForm = document.querySelector('#new-pin-form');
    createPinForm.addEventListener("submit", (e) => createPinFormHandler(e));
})

function getPins() {
    fetch(pinsEndpoint)
    .then(response => response.json())
    .then(pins => {
        pins.data.forEach(pin => {
            let newPin = new Pin(pin, pin.attributes)
        document.querySelector('#pins-container').innerHTML += newPin.renderPinCard();
       
    })
})
}


// function displayPinForm(e) {
//     e.preventDefault()
//     const displayForm = document.getElementById("new-pin-form");
//     if (displayForm.style.display === "none") {
//       displayForm.style.display = "block";
//     } else {
//       displayForm.style.display = "none";
//     }
// }


function createPinFormHandler(e) {
    e.preventDefault()
    const titleInput = document.querySelector('#input-title').value
	const image_urlInput = document.querySelector('#input-image_url').value
    const descriptionInput = document.querySelector('#input-description').value
    const brandInput = document.querySelector('#brands').value
    const brandId = parseInt(brandInput)
    const userInput = document.querySelector('#input-user_id').value
    const userId = parseInt(userInput)
    postfetchPin(titleInput, image_urlInput, descriptionInput, brandInput, userInput)

}

function postfetchPin(title, image_url, description, brand_id, user_id) {
    const pinBodyData = {title, image_url, description, brand_id, user_id}
    fetch(pinsEndpoint, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(pinBodyData)
      })
      .then(response => response.json())
      .then(pin => {
        const pinData = pin.data
       
            let newPin = new Pin(pinData, pinData.attributes)
        document.querySelector('#pins-container').innerHTML += newPin.renderPinCard();

    })
}

const modal = document.getElementById("myModal");
const btn = document.getElementById("createPin");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}




