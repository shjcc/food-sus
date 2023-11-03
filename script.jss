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

            commentForm.comment.value = "";
        }
    });
});

const title = document.querySelector('h1'); 
const colors = ['#9b2dfb', '#ff00ff', '#00ff00', '#0000ff']; 
let currentColorIndex = 0;

function changeTitleColor() {
  title.style.color = colors[currentColorIndex];
  currentColorIndex = (currentColorIndex + 1) % colors.length; 
}

setInterval(changeTitleColor, 1000);
