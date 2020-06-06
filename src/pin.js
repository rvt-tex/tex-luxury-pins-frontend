class Pin {

    constructor(id, pinAttributes) {
        this.id = id;
        this.title = pinAttributes.title;
        this.image_url = pinAttributes.image_url;
        this.description = pinAttributes.description;
        this.brand = pinAttributes.brand;
        this.user = pinAttributes.user
    }
}