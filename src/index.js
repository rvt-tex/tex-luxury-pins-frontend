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
        let myData = pins.data
        let destructureArray = myData.map((eachPin) => {return eachPin.attributes});
        destructureArray.sort(function(a, b) {
            const usernameA = a.username;
            const usernameB = b.username; 
            if (usernameA < usernameB) {
              return -1;
            }
            if (usernameA > usernameB) {
              return 1;
            }
            return 0;
        });
        destructureArray.forEach(pin => {
            let newPin = new Pin(pin, pin)
        document.querySelector('#pins-container').innerHTML += newPin.renderPinCard();
    })
    })
}

function createPinFormHandler(e) {
    e.preventDefault()
    const userNameInput = document.querySelector('#input-username').value
    const titleInput = document.querySelector('#input-title').value
	const image_urlInput = document.querySelector('#input-image_url').value
    const descriptionInput = document.querySelector('#input-description').value
    const brandInput = document.querySelector('#brands').value
    const brandId = parseInt(brandInput)
    postfetchPin(userNameInput, titleInput, image_urlInput, descriptionInput, brandInput)

}

function postfetchPin(username, title, image_url, description, brand_id) {
    const pinBodyData = {username, title, image_url, description, brand_id}
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

function delPin(pin) {  
    fetch(pinsEndpoint + `/${pin}`, {
        method: "DELETE",
        headers: {"Content-Type": "application/json"},
    })
    .then(response => response.json())
    .then(pins => {
        document.getElementById(`${pin}`).innerHTML = "";
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
