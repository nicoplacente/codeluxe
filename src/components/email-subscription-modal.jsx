"use client";

import { useState } from "react";

export default function EmailSubscriptionModal({
  open,
  onClose,
  onConfirm,
  loading,
}) {
  const [email, setEmail] = useState("");

  if (!open) return null;

  return (
    /* Overlay: Fondo con opacidad y desenfoque */
    <div className="fixed inset-0 z-50 flex h-full items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="bg-background border border-primary/20 rounded-3xl p-8 w-full max-w-md shadow-2xl space-y-6">
        <div className="space-y-2">
          <h3 className="text-2xl font-black text-primary-txt">
            Finalizar suscripción
          </h3>
          <p className="text-secondary-txt text-sm">
            Ingresá el email donde recibirás la confirmación del pago.
          </p>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest text-primary font-bold">
            Email de contacto
          </label>
          <input
            type="email"
            placeholder="tu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-secondary border border-primary/10 rounded-xl px-4 py-3 text-primary-txt outline-none focus:border-primary transition-all"
          />
        </div>

        <div className="flex gap-3 pt-4">
          <button
            onClick={onClose}
            disabled={loading}
            className="flex-1 border border-primary/10 hover:border-primary/30 text-secondary-txt rounded-xl py-3 transition cursor-pointer disabled:opacity-50"
          >
            Cancelar
          </button>

          <button
            onClick={() => onConfirm(email)}
            disabled={loading || !email.includes("@")}
            className="flex-1 bg-primary/20 hover:bg-primary/40 text-primary font-bold rounded-xl py-3 transition disabled:opacity-50 cursor-pointer border border-primary/20 "
          >
            {loading ? "Procesando..." : "Continuar al pago"}
          </button>
        </div>
      </div>
    </div>
  );
}
