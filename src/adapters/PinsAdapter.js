class PinsAdapter {

    constructor() {
        this.pinsEndpoint = "http://localhost:3000/pins"
    }

    // getPins() {
    //     return fetch(this.pinsEndpoint).then(response => response.json()).then(json => json.data)
    // }    

    getPins() {
        fetch(pinsEndpoint)
        .then(response => response.json())
        .then(pins => {
            pins.data.forEach(pin => {
                let newPin = new Pin(pin, pin.attributes)
            document.querySelector('#pins-container').innerHTML += newPin.renderPinCard(); 
        })
    })
    }

    postPinsToApi(username, title, image_url, description, brand_id) {
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
}

    