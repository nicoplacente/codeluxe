"use client";

import { useState } from "react";
import { toast } from "sonner";
import EmailSubscriptionModal from "./email-subscription-modal";

export default function SubscriptionButton({ project }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleConfirm = async (email) => {
    if (!email || !email.includes("@")) {
      toast.error("Ingresá un email válido");
      return;
    }

    const newWindow = window.open("", "_blank");
    newWindow.document.write("<p>Cargando plataforma de pago...</p>");

    try {
      setLoading(true);

      const response = await fetch("/api/create-subscription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          projectTitle: project.title,
          price: project.price.split(".").join(""),
          email,
        }),
      });

      const data = await response.json();

      console.log(data);

      if (data.init_point) {
        newWindow.location.href = data.init_point;
        setOpen(false);
      } else {
        newWindow.close();
        toast.error("Error al generar el link de pago");
      }
    } catch (error) {
      newWindow.close();
      toast.error("Hubo un error al procesar el pago");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="w-full bg-primary/10 hover:bg-primary/20 text-primary border justify-center border-primary/30 px-8 py-3 rounded-lg font-bold transition-colors flex items-center gap-3 cursor-pointer"
      >
        Adquirir Servicio
      </button>

      <EmailSubscriptionModal
        open={open}
        loading={loading}
        onClose={() => setOpen(false)}
        onConfirm={handleConfirm}
      />
    </>
  );
}
