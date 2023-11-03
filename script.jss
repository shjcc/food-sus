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

const title = document.querySelector('h1'); // Assuming your title is inside an <h1> element
const colors = ['#9b2dfb', '#ff00ff', '#00ff00', '#0000ff']; // Array of colors to cycle through
let currentColorIndex = 0;

function changeTitleColor() {
  title.style.color = colors[currentColorIndex];
  currentColorIndex = (currentColorIndex + 1) % colors.length; // Cycle through the colors
}

// Call the changeTitleColor function every 1000 milliseconds (1 second)
setInterval(changeTitleColor, 1000);
