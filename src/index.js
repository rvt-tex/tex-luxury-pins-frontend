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