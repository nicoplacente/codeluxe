"use client";

import SubmitButton from "@/components/submit-button";
import { IconFileUpload } from "@tabler/icons-react";
import { useState } from "react";

export default function FormPreview() {
  const [filePreviews, setFilePreviews] = useState([]);

  function handleFileChange(e) {
    const files = Array.from(e.target.files);
    const validFiles = files.filter((file) => file.size);
    // const validFiles = files.filter((file) => file.size <= 2 * 1024 * 1024);  // Máx 2MB

    if (validFiles.length !== files.length) {
      alert("Algunos archivos superan el límite de 2MB y fueron descartados.");
    }

    setFilePreviews((prev) => [...prev, ...validFiles]);
  }

  function removeFile(indexToRemove) {
    setFilePreviews((prev) => {
      const newFiles = [...prev];
      newFiles.splice(indexToRemove, 1);
      return newFiles;
    });
  }
  return (
    <form
      action="#"
      className="form-propuesta text-secondary-txt flex flex-col gap-4 flex-1"
    >
      <input
        id="name"
        type="text"
        placeholder="Nombre y Apellido"
        name="name"
      />

      <input id="email" type="email" placeholder="Correo" name="email" />

      <input id="subject" type="text" placeholder="Asunto" name="subject" />

      <input id="phone" type="text" placeholder="Teléfono" name="phone" />

      <div className="coolinput relative">
        <textarea
          id="description"
          placeholder="Mensaje"
          name="description"
          className="input"
        ></textarea>

        <label
          className="absolute bottom-0 right-0 cursor-pointer p-2 active:text-primary hover:bg-black/20 rounded-xl transition-colors"
          htmlFor="uploadFile"
          title="Adjuntar archivo"
        >
          <IconFileUpload />
        </label>

        {/* <input
        id="uploadFile"
        type="file"
        multiple
        name="reference"
        className="hidden"
      /> */}

        <input
          id="uploadFile"
          type="file"
          multiple
          name="reference"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>

      {filePreviews.length > 0 && (
        <div className="flex gap-2 mt-2 flex-wrap">
          {filePreviews.map((file, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-sm min-w-fit border border-primary/30 rounded-xl px-3 py-2 bg-black/10 relative"
            >
              {file.type.startsWith("image/") && (
                <img
                  src={URL.createObjectURL(file)}
                  alt={`Vista previa de ${file.name}`}
                  className="size-10 object-cover rounded-xl"
                />
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

      <SubmitButton />
    </form>
  );
}
