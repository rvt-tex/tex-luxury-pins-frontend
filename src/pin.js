class Pin {

    constructor(pin, pinAttributes) {
        this.id = pin.id;
        this.username = pinAttributes.username;
        this.title = pinAttributes.title;
        this.image_url = pinAttributes.image_url;
        this.description = pinAttributes.description;
        this.brand = pinAttributes.brand;
        this.comment = pinAttributes.content;
        Pin.all.push(this);
    }

    renderPinCard() {
        return (
            `<div id=${this.id}>
                <h4>User: ${this.username}</h4>
                <h4>Brand: ${this.brand.name}</h4>
                <h4>Title: ${this.title}</h4>
                <img src=${this.image_url} width="600" height="400">
                <h4>${this.description}</h4>
                <br>     
                      
                <button onclick="delPin(${this.id})">Delete Pin</button>
            </div>
            <hr>`
        )
    }
}

Pin.all = [];