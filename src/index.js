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
        //    render(pinData)
       
            let newPin = new Pin(pinData, pinData.attributes)
        document.querySelector('#pins-container').innerHTML += newPin.renderPinCard();

    })
}