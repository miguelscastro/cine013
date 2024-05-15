function avaliacao() {
    var formulario = document.querySelector("#formularioAvaliacao");
    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();

        var formData = new FormData(formulario);
        var data = {};
        formData.forEach(function (value, key) {
            data[key] = value;
        });

        console.log("Dados Enviados:", data);

        formulario.reset();
    });
}