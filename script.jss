document.addEventListener("DOMContentLoaded", function () {
    const commentForm = document.getElementById("comment-form");
    const commentList = document.getElementById("comment-list");

    commentForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const commentText = commentForm.comment.value;

        if (commentText) {
            const commentElement = document.createElement("p");
            commentElement.textContent = commentText;
            commentList.appendChild(commentElement);

            // Clear the textarea
            commentForm.comment.value = "";
        }
    });
});

