function deleteProduct(question) {
    if (confirm("Bạn chắc chắn muốn xóa không?")) {
        question.remove();
    }
}

window.addEventListener('load', function() {
    const p = document.querySelector(".questions");
    const productTemplate = document.querySelector(".question-template");
    const insert = document.querySelector("a.insert");
    const form = document.querySelector(".form");

    insert.addEventListener("click", () => form.classList.toggle("show"));

    document.getElementById("btnAdd").addEventListener("click", () => {
        const name = document.getElementById("name").value.trim();
        const content = document.getElementById("content").value.trim();

        if (!name || !content) {
            alert("Vui lòng nhập đầy đủ chủ đề và câu hỏi.");
            return;
        }

        const newQuestion = productTemplate.cloneNode(true);
        newQuestion.classList.remove("question-template");
        newQuestion.classList.add("question");

        newQuestion.querySelector(".question-name").textContent = name;
        newQuestion.querySelector(".question-text").textContent = content;

        document.getElementById("name").value = "";
        document.getElementById("content").value = "";

        p.appendChild(newQuestion);

        newQuestion.querySelector(".reply-btn").addEventListener("click", () => {
            const additionalInfo = newQuestion.querySelector(".additional-info");
            additionalInfo.style.display = additionalInfo.style.display === "none" ? "block" : "none";
        });

        newQuestion.querySelector(".btn-submit-reply").addEventListener("click", () => {
            const replyTextarea = newQuestion.querySelector(".additional-info textarea");
            const replyText = replyTextarea.value.trim();

            if (replyText) {
                const replyDiv = newQuestion.querySelector(".reply-text");
                replyDiv.textContent = `Trả lời: ${replyText}`;
                replyDiv.style.display = "block";
                newQuestion.querySelector(".additional-info").style.display = "none";
                replyTextarea.value = ""; // Clear the textarea after submission
            } else {
                alert("Vui lòng nhập câu trả lời.");
            }
        });

        newQuestion.querySelector(".delete").addEventListener("click", () => deleteProduct(newQuestion));

        newQuestion.querySelector(".additional-info").style.display = "none";
    });
});
