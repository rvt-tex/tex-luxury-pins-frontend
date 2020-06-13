class Pins {

    constructor() {
        this.pins = []
        this.adapter = new PinsAdapter()
        this.initiBindingAndEventListeners()
        this.fetchAndLoadPins()
    }
}