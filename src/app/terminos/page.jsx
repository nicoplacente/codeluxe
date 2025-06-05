import { IconDownload } from "@tabler/icons-react";

export default function Terminos() {
  return (
    <main className="max-w-4xl mx-auto py-10 text-primary-txt">
      <h1 className="text-3xl font-bold mb-6 text-center text-balance">
        Términos y Condiciones de Servicio
      </h1>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
        <p className="text-sm">Última actualización: 4/6/2025</p>

        <a
          download
          aria-label="Descargar términos y condiciones de Codeluxe"
          href="/terminos-codeluxe.pdf"
          className="bg-secondary transition hover:opacity-75 rounded-xl px-4 py-2 flex items-center justify-center gap-2"
        >
          Descargar <IconDownload />
        </a>
      </div>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. Alcance del Servicio</h2>
        <p>
          Codeluxe ofrece el diseño, desarrollo y entrega de sitios web o
          aplicaciones web personalizadas según las especificaciones brindadas
          por el cliente. Los servicios contratados se ejecutan en base a la
          propuesta enviada por el usuario, la cual debe cumplir con nuestras
          políticas y restricciones establecidas.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          2. Proceso de Contratación
        </h2>
        <ul className="list-disc ml-5 space-y-2">
          <li>
            Al hacer clic en “Enviá tu propuesta”, el usuario deberá completar
            un formulario con los datos solicitados. De manera opcional, podrá
            adjuntar imágenes, referencias o archivos que sirvan de guía para el
            desarrollo.
          </li>
          <li>
            Una vez recibida la propuesta, será evaluada por el equipo de
            Codeluxe para verificar su viabilidad técnica y su cumplimiento con
            estos Términos y Condiciones.
          </li>
          <li>
            Si la propuesta es aceptada, el cliente será contactado por nuestro
            equipo para avanzar con la contratación y planificación del
            proyecto.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">3. Políticas de Pago</h2>
        <p>
          Para comenzar con el desarrollo del sitio o aplicación, el cliente
          deberá <strong>abonar el 50% del monto total acordado</strong>. Una
          vez finalizado el proyecto y aprobado por el cliente, se deberá{" "}
          <strong>abonar el 50% restante</strong> para la entrega final.
        </p>
        <p className="mt-2">
          <strong>
            No se entregará el producto final ni se habilitará el dominio hasta
            que se haya completado el pago total.
          </strong>{" "}
          En caso de incumplimiento, el proyecto podrá ser eliminado sin derecho
          a reembolso ni reclamo alguno.
        </p>
        <p className="mt-2">
          <em>
            Este acuerdo se formalizará mediante contrato legal para evitar
            fraudes y garantizar transparencia.
          </em>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">4. Política de Reembolso</h2>
        <p>
          <strong>No se aceptan reembolsos</strong> bajo ninguna circunstancia,
          incluyendo cambios de opinión, cancelaciones por parte del cliente o
          rechazos una vez iniciado el proyecto.
        </p>
        <p className="mt-2">
          El cliente entiende que los pagos realizados corresponden a tiempo,
          planificación y trabajo invertido, y no son reversibles.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">5. Restricciones de Uso</h2>
        <p>
          No se aceptarán propuestas ni se desarrollarán sitios web o
          aplicaciones con los siguientes fines:
        </p>
        <ul className="list-disc ml-5 mt-2 space-y-1">
          <li>Actividades ilegales o fraudulentas.</li>
          <li>Contenido pornográfico, sexual explícito o de adultos.</li>
          <li>
            Juegos de azar, apuestas, casinos online, rifas no autorizadas o
            similares.
          </li>
          <li>
            Distribución de malware, phishing o recolección no autorizada de
            datos.
          </li>
        </ul>
        <p className="mt-2">
          En caso de detectar alguno de estos fines, la propuesta será rechazada
          de inmediato y el proyecto podrá ser cancelado sin derecho a reclamos.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">6. Plazos de Entrega</h2>
        <p>
          La duración del desarrollo dependerá de la complejidad y
          personalización del proyecto:
        </p>
        <ul className="list-disc ml-5 mt-2 space-y-1">
          <li>
            Mínimo estimado: <strong>2 días hábiles</strong>.
          </li>
          <li>
            Máximo estimado: <strong>1 mes</strong>.
          </li>
          <li>
            En casos complejos, el plazo podrá ser{" "}
            <strong>indeterminado</strong>, lo cual se informará previamente.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">7. Métodos de Pago</h2>
        <p>Por el momento, se aceptan los siguientes métodos de pago:</p>
        <ul className="list-disc ml-5 mt-2 space-y-1">
          <li>
            <strong>Mercado Pago</strong>
          </li>
          <li>
            <strong>Criptomonedas</strong> (previa coordinación y confirmación)
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">8. Propiedad Intelectual</h2>
        <p>
          Hasta que el cliente no haya abonado el pago total del proyecto, todos
          los derechos sobre el código fuente, diseño y recursos creados
          seguirán siendo propiedad exclusiva de Codeluxe.
        </p>
        <p className="mt-2">
          Una vez finalizado el pago completo, el cliente obtendrá los derechos
          de uso sobre el producto entregado.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          9. Modificaciones y Cambios
        </h2>
        <p>
          Codeluxe se reserva el derecho de actualizar o modificar estos
          Términos y Condiciones en cualquier momento. Es responsabilidad del
          usuario revisar esta página periódicamente.
        </p>
        <p className="mt-2">
          El uso continuo de nuestros servicios implica la aceptación de los
          cambios realizados.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">10. Contacto</h2>
        <p>
          Para cualquier consulta sobre estos términos, podés comunicarte con
          nosotros a través de nuestro correo electrónico:{" "}
          <a
            href="mailto:codeluxetech@gmail.com"
            rel="noopener noreferrer nofollow"
            aria-label="Correo de Codeluxe"
            className="font-semibold text-primary hover:underline"
          >
            codeluxetech@gmail.com
          </a>
          .
        </p>
      </section>
    </main>
  );
}
