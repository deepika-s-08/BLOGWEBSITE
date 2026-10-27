
/* FIXED USERNAME AND PASSWORD */
const correctUsername = "BLOG";
const correctPassword = "2030";

/* LOGIN */
function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const error = document.getElementById("error");

    if (
        username === correctUsername &&
        password === correctPassword
    ) {
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("app").style.display = "block";

        document.getElementById("profileName").innerText = username;
        document.getElementById("avatar").innerText = username.charAt(0);

        error.innerText = "";
    } else {
        error.innerText = "Invalid username or password!";
    }
}

/* LOGOUT */
function logout() {
    document.getElementById("app").style.display = "none";
    document.getElementById("loginPage").style.display = "flex";

    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("error").innerText = "";
}

/* CREATE POST */
function addPost() {
    const text = document.getElementById("postText").value.trim();

    if (text === "") {
        alert("Please write something!");
        return;
    }

    const post = document.createElement("div");
    post.className = "post";

    const heading = document.createElement("h3");
    heading.textContent =
        document.getElementById("profileName").innerText;

    const paragraph = document.createElement("p");
    paragraph.textContent = text;

    const actions = document.createElement("div");
    actions.className = "actions";

    // Like button
    const likeButton = document.createElement("button");
    likeButton.innerHTML = "❤️ Like <span>0</span>";
    likeButton.onclick = function () {
        likePost(this);
    };

    // Comment button
    const commentButton = document.createElement("button");
    commentButton.textContent = "💬 Comment";
    commentButton.onclick = commentPost;

    // Share button
    const shareButton = document.createElement("button");
    shareButton.textContent = "🔁 Share";
    shareButton.onclick = sharePost;

    actions.append(likeButton, commentButton, shareButton);
    post.append(heading, paragraph, actions);

    document.getElementById("posts").prepend(post);
    document.getElementById("postText").value = "";
}

/* LIKE POST */
function likePost(button) {
    const count = button.querySelector("span");

    count.innerText = Number(count.innerText) + 1;
}

/* FOLLOW USER */
function followUser(button) {
    const followers = document.getElementById("followers");

    if (button.innerText === "Follow") {
        button.innerText = "Following";
        followers.innerText = Number(followers.innerText) + 1;
    } else {
        button.innerText = "Follow";
        followers.innerText = Number(followers.innerText) - 1;
    }
}

/* COMMENT */
function commentPost() {
    alert("Comment feature coming soon!");
}

/* SHARE */
function sharePost() {
    alert("Post shared successfully!");
}
