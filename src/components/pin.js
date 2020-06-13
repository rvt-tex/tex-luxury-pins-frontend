class Pin {

    constructor(pin, pinAttributes) {
        this.id = pin.id;
        this.username = pinAttributes.username;
        this.title = pinAttributes.title;
        this.image_url = pinAttributes.image_url;
        this.description = pinAttributes.description;
        this.brand = pinAttributes.brand;
        this.comments = pinAttributes.content;
        // Pin.all.push(this);
        Pin.all;
        
    }
}