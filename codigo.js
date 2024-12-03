document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Evita el envío del formulario

    // Validación básica
    const name = document.getElementById("name").value.trim();
    const reason = document.getElementById("reason").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!name || !reason || !email) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    alert(`Gracias por contactarme, ${name}. Revisaré tu motivo: "${reason}". Te escribiré pronto a ${email}.`);
    this.reset(); // Limpia el formulario
});
