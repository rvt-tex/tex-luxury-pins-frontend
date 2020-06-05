const pinsEndpoint = "http://localhost:3000/pins"

document.addEventListener("DOMContentLoaded", () => {
    getPins()
})

function getPins() {
    fetch(pinsEndpoint)
    .then(response => response.json())
    .then(pins => {
        pins.data.forEach(pin => {
            const pinsLayout = 
                `<div data-id=${pin.id}>
                <h4>${pin.attributes.user.name}   @${pin.attributes.user.email}</h4>
                <h4>${pin.attributes.brand.name}</h4>
                <h4>${pin.attributes.title}</h4>
                <img src=${pin.attributes.image_url} width="800" height="600">
                <h4>${pin.attributes.description}</h4>   
            <br>
                <button data-id=${pin.id}>Edit</button>
                </div>`;

                document.querySelector("#pins-container").innerHTML += pinsLayout
        })
    })
}

const createPinForm = document.querySelector('#new-pin-form');

createPinForm.addEventListener("submit", (e) => createPinFormHandler(e));

function createPinFormHandler(e) {
    e.preventDefault()
    const titleInput = document.querySelector('#input-title').value
	const image_urlInput = document.querySelector('#input-image_url').value
    const descriptionInput = document.querySelector('#input-description').value
    const brandInput = document.querySelector('#brands').value
    const brandId = parseInt(brandInput)
    // postfetchPin(titleInput, image_urlInput, descriptionInput, brandInput)

}

function postfetchPin(title, image_url, description, brand_id) {
    console.log(title, image_url, description, brand_id)
}