    function scrollToSection(sectionId: string) {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            // Opcional: cambiar la URL sin el hash
            history.replaceState(null, "", window.location.pathname);
        }
    }

    document.addEventListener("DOMContentLoaded", () => {
        const btnContacto = document.getElementById("contact-btn");
        if (btnContacto) {
            btnContacto.addEventListener("click", function () {
                scrollToSection("contact");
            });
        }

        const btnExperiencia = document.getElementById("experience-btn");
        if (btnExperiencia) {
            btnExperiencia.addEventListener("click", function () {
                scrollToSection("experience");
            });
        }
    });