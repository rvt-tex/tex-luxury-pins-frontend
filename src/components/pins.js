class Pins {

    constructor() {
        this.pins = [];
        this.adapter = new PinsAdapter();
        // this.initiBindingAndEventListeners();
        this.fetchAndLoadPins();
        
    }

    fetchAndLoadPins() {
        this.adapter.getPins()
        .then(pins => {
            pins.data.forEach(pin => {
                let newPin = new Pin(pin, pin.attributes)
                // this.pins.push(new Pin(pin, pin.attributes)))
               
            // console.log(pins.data)
        // .then(() => {
        //     console.log(pins.data)
            // this.renderPinCard();
        // })
        document.querySelector('#pins-container').innerHTML += newPin.renderPinCard();
            })
    })
    }  

  
    renderPinCard() {
        return (
            `<div data-id=${this.id}>
                <h4>User: ${this.username}</h4>
                <h4>Brand: ${this.brand.name}</h4>
                <h4>Title: ${this.title}</h4>
                <img src=${this.image_url} width="600" height="400">
                <h4>${this.description}</h4>
                <br>           
                <button data-id=${this.id}>Comment</button>
            </div>
            <hr>`
        )
    }
    


   
}