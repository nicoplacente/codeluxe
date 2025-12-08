"use client";

import SubmitButton from "@/components/submit-button";
import { useState } from "react";
import SectionContainer from "@/components/section-container";
import Title from "@/ui/title";
import Paragraph from "@/ui/paragraph";
import { toast } from "sonner";

export default function FormAudit() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    websiteUrl: "",
  });

  const [loading, setLoading] = useState(false);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    Object.entries(formValues).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const url = formValues.websiteUrl.trim();
    const email = formValues.email.trim();

    if (!url.startsWith("https://")) {
      toast.warning(
        "La URL debe comenzar con https:// (Protocolo de seguridad requerido) para proceder con la auditoría."
      );

      setLoading(false);
      return;
    }

    if (!isValidEmail(email)) {
      toast.warning(
        "Por favor, introduce un formato de correo electrónico válido (ej: nombre@dominio.com)."
      );
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/auditoria", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        toast.success(
          "Solicitud de auditoría enviada con éxito. Pronto te contactaremos."
        );
        setFormValues({
          name: "",
          email: "",
          phone: "",
          websiteUrl: "",
        });
      } else {
        toast.error("Ocurrió un error al enviar la solicitud.");
      }
    } catch (err) {
      toast.error("Error inesperado al intentar enviar el formulario.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="form-propuesta text-secondary-txt flex flex-col gap-4 flex-1"
    >
      <input
        id="websiteUrl"
        type="url"
        placeholder="URL de tu sitio web (ej: https://tumarca.com)"
        name="websiteUrl"
        value={formValues.websiteUrl}
        onChange={handleInputChange}
        pattern="https://.*"
        title="La URL debe comenzar con https://"
        required
        autoComplete="off"
      />

      <input
        id="name"
        type="text"
        placeholder="Nombre y Apellido"
        name="name"
        value={formValues.name}
        onChange={handleInputChange}
        required
        autoComplete="name"
      />

      <input
        id="email"
        type="email"
        placeholder="Correo"
        name="email"
        value={formValues.email}
        onChange={handleInputChange}
        required
        autoComplete="email"
      />

      <input
        id="phone"
        type="tel"
        placeholder="Teléfono (Opcional)"
        name="phone"
        value={formValues.phone}
        onChange={handleInputChange}
        autoComplete="tel"
      />

      <SubmitButton
        loading={loading}
        buttonText="Solicitar Auditoría Gratuita"
      />
    </form>
  );
}
