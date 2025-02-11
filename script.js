document.addEventListener("DOMContentLoaded", function () {
    const galleryImages = document.querySelectorAll(".gallery-img");

    galleryImages.forEach(img => {
        img.addEventListener("click", function () {
            const modal = document.createElement("div");
            modal.classList.add("modal");
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <img src="${img.src}" alt="${img.alt}">
                </div>
            `;
            document.body.appendChild(modal);

            // Close Modal
            modal.querySelector(".close").addEventListener("click", function () {
                modal.remove();
            });
        });
    });
});
