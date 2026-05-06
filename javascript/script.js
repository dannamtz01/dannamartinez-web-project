document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("musicForm");
    const messageBox = document.getElementById("messageBox");

    if (!form || !messageBox) {
        return;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const userName = document.getElementById("userName").value.trim();
        const favoriteSong = document.getElementById("favoriteSong").value.trim();

        messageBox.textContent =
            "Hi, " + userName + "! Your favorite song, \"" + favoriteSong + "\", sounds like a great choice.";
    });
});
