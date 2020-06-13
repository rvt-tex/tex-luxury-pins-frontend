class PinsAdapter {
    constructor() {
        this.baseUrl="http://localhost:3000/pins"
    }

    getPins() {
        return fetch(this.baseUrl).then(res => res.json())
    }



}