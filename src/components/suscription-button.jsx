"use client";

export default function SubscriptionButton({ project }) {
  const handleSubscribe = async () => {
    const newWindow = window.open("", "_blank");
    newWindow.document.write("<p>Cargando plataforma de pago...</p>");

    try {
      const response = await fetch("/api/create-subscription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          projectTitle: project.title,
          price: project.price.split(".").join(""),
        }),
      });

      const data = await response.json();
      if (data.init_point) {
        newWindow.location.href = data.init_point;
      } else {
        newWindow.close();
        alert("Error al generar el link.");
      }
    } catch (err) {
      newWindow.close();
      alert("Hubo un error al procesar el pago");
    }
  };

  return (
    <button
      onClick={handleSubscribe}
      className="w-full bg-primary/10 hover:bg-primary/20 text-primary border justify-center border-primary/30 px-8 py-3 rounded-lg font-bold transition-colors flex items-center gap-3 cursor-pointer"
    >
      Adquirir Servicio
    </button>
  );
}
