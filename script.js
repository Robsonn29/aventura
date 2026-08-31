const avanca = document.querySelectorAll(".btn-proximo");

avanca.forEach(button => {

    button.addEventListener("click", function () {

        const atual = document.querySelector(".passo.ativo");

        const numeroProximo = this.getAttribute("data-proximo");

        const proximo = document.getElementById(
            "passo-" + numeroProximo
        );

        if (proximo) {

            atual.classList.remove("ativo");

            proximo.classList.add("ativo");

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }

    });

});
