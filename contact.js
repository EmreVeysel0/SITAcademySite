document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const fullName = form.querySelector('input[name="firstName"]').value.trim();
        const email = form.querySelector('input[name="email"]').value.trim();
        const message = form.querySelector('textarea[name="message"]').value.trim();

        if (fullName && email && message) {
            const messages = JSON.parse(localStorage.getItem("messages")) || [];
            messages.push({ fullName, email, message, time: new Date().toISOString() });
            localStorage.setItem("messages", JSON.stringify(messages));

            alert("Съобщението е изпратено успешно!");
            form.reset();
        } else {
            alert("Моля, попълнете всички полета.");
        }
    });
});
