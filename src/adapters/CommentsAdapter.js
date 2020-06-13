class CommentsAdapter { 

    constructor() {
        this.commentEndpoint = "http://localhost:3000/comments"
    }
    
    getComments() {
        fetch(commentsEndpoint)
        .then(response => response.json())
        .then(pins => {
            comments.data.forEach(comment => {
                let newComment = new Comment(comment, comment.attributes)
            document.querySelector('#comments-container').innerHTML += newPin.renderPinCard(); 
        })
    })
    }

}
