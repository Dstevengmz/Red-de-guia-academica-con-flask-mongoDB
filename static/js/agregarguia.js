document.getElementById("formGuia")?.addEventListener("submit", function (event) {
  // Use HTML5 validation feedback
  const form = event.currentTarget;
  if (!form.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
    form.classList.add('was-validated');
    return;
  }
  event.preventDefault();

  const file = document.getElementById('documento')?.files?.[0];
  if (file && file.type !== 'application/pdf') {
    Swal.fire({ icon: 'error', title: 'Archivo inválido', text: 'Debe ser un PDF.' });
    return;
  }

  const formData = new FormData(form);
  fetch("/agregarguia", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.text())
    .then((html) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const alertContainer = doc.querySelector("#alert-container");
      const estado = alertContainer?.getAttribute('data-estado');
      const mensaje = alertContainer?.getAttribute('data-mensaje') || 'Operación completada.';
      if (estado === 'True') {
        Swal.fire({ icon: 'success', title: '¡Éxito!', text: mensaje }).then(() => {
          window.location.href = '/listarguia';
        });
      } else {
        Swal.fire({ icon: 'error', title: 'Error', text: mensaje });
      }
    })
    .catch(() => {
      Swal.fire({ icon: 'error', title: 'Error', text: 'No se pudo guardar la guía.' });
    });
});
