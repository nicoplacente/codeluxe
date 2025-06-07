"use client";

import SubmitButton from "@/components/submit-button";
import { showAlerts } from "@/utils/alerts";
import { IconFileUpload, IconFileFilled } from "@tabler/icons-react";
import { useState } from "react";

export default function FormPreview() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    description: "",
  });

  const [filePreviews, setFilePreviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  }

  function handleFileChange(e) {
    const files = Array.from(e.target.files);
    const validFiles = files.filter((file) => file.size);
    // const validFiles = files.filter((file) => file.size <= 2 * 1024 * 1024); // 2 MB
    // if (validFiles.length !== files.length) {
    //   showAlerts(
    //     "warning",
    //     "Algunos archivos superan el límite de 2MB y fueron descartados."
    //   );
    // }

    setFilePreviews((prev) => [...prev, ...validFiles]);
  }

  function removeFile(indexToRemove) {
    setFilePreviews((prev) => {
      const newFiles = [...prev];
      newFiles.splice(indexToRemove, 1);
      return newFiles;
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    Object.entries(formValues).forEach(([key, value]) => {
      formData.append(key, value);
    });

    filePreviews.forEach((file) => {
      formData.append("files", file);
    });

    try {
      const res = await fetch("/api/propuesta", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setSuccess(true);
        showAlerts("success", "Formulario enviado con éxito.");
        setFormValues({
          name: "",
          email: "",
          subject: "",
          phone: "",
          description: "",
        });
        setFilePreviews([]);
      } else {
        showAlerts("error", "Ocurrió un error al enviar el formulario.");
      }
    } catch (err) {
      showAlerts("Error inesperado.");
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
        id="name"
        type="text"
        placeholder="Nombre y Apellido"
        name="name"
        value={formValues.name}
        onChange={handleInputChange}
        required
      />

      <input
        id="email"
        type="email"
        placeholder="Correo"
        name="email"
        value={formValues.email}
        onChange={handleInputChange}
        required
      />

      <input
        id="subject"
        type="text"
        placeholder="Asunto"
        name="subject"
        value={formValues.subject}
        onChange={handleInputChange}
      />

      <input
        id="phone"
        type="text"
        placeholder="Teléfono"
        name="phone"
        value={formValues.phone}
        onChange={handleInputChange}
        required
      />

      <div className="coolinput relative">
        <textarea
          id="description"
          placeholder="Mensaje"
          name="description"
          value={formValues.description}
          onChange={handleInputChange}
          className="input"
          required
        ></textarea>

        <label
          className="absolute bottom-0 right-0 cursor-pointer p-2 active:text-primary hover:bg-black/20 rounded-xl transition-colors"
          htmlFor="uploadFile"
          title="Adjuntar archivo"
        >
          <IconFileUpload />
        </label>

        <input
          id="uploadFile"
          type="file"
          multiple
          name="reference"
          className="hidden"
          onChange={handleFileChange}
          accept=".zip,.rar,.pdf,.jpg,.jpeg,.png"
        />
      </div>

      {filePreviews.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
          {filePreviews.map((file, index) => (
            <div
              key={index}
              className="flex justify-between items-center gap-2 text-sm w-full border border-primary/30 rounded-xl px-3 py-2 bg-black/10 relative"
            >
              {file.type.startsWith("image/") ? (
                <img
                  src={URL.createObjectURL(file)}
                  alt={`Vista previa de ${file.name}`}
                  className="size-8 sm:size-10 object-cover rounded-xl"
                />
              ) : (
                <IconFileFilled className="size-8 sm:size-14" />
              )}
              <span className="max-w-[120px] truncate">{file.name}</span>
              <button
                type="button"
                onClick={() => removeFile(index)}
                className="ml-1 font-bold cursor-pointer hover:opacity-70 rounded-xl transition"
                title="Eliminar archivo"
              >
                ❌
              </button>
            </div>
          ))}
        </div>
      )}

      <SubmitButton loading={loading} />
    </form>
  );
}
