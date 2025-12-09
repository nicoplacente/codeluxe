import { IconDownload } from "@tabler/icons-react";

export function generateMetadata() {
  return {
    title: "Términos y Condiciones | Codeluxe",
    description: "Términos y condiciones de servicio de Codeluxe.",
    alternates: {
      canonical: "/terminos",
    },
    openGraph: {
      title: "Términos y Condiciones | Codeluxe",
      description: "Términos y condiciones de servicio de Codeluxe.",
      images: ["https://codeluxe.tech/og-servicios.png"],
    },
    twitter: {
      title: "Términos y Condiciones | Codeluxe",
      description: "Términos y condiciones de servicio de Codeluxe.",
    },
  };
}

export default function Terminos() {
  return (
    <main className="max-w-5xl mx-auto py-10 text-primary-txt">
      <h1 className="text-3xl font-bold mb-6 text-center text-balance">
        Términos y Condiciones de Servicio
      </h1>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
        <p className="text-sm">Última actualización: 08/12/2025</p>
        {/* <a
          download
          aria-label="Descargar contrato modelo y términos de Codeluxe"
          href="/terminos-codeluxe.pdf" // Asegúrate de subir el PDF a tu carpeta 'public'
          className="bg-secondary transition hover:opacity-75 rounded-xl px-4 py-2 flex items-center justify-center gap-2 text-white font-medium"
        >
          Descargar Contrato <IconDownload size={20} />
        </a> */}
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
            adjuntar imágenes, referencias o archivos que sirvan de guía.
          </li>
          <li>
            Una vez recibida la propuesta, será evaluada por el equipo de
            Codeluxe para verificar su viabilidad técnica y presupuesto.
          </li>
          <li>
            Si la propuesta es aceptada, el cliente será contactado para avanzar
            con la planificación.
          </li>
          <li>
            Al completar el proceso de contratación, el cliente declara que ha
            leído, entendido y aceptado los Términos y Condiciones de Codeluxe,
            los cuales rigen la prestación del servicio.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          3. Modificaciones y Ajustes
        </h2>
        <p className="mb-2">
          Es fundamental definir el alcance del proyecto antes de iniciar. Las
          modificaciones posteriores están sujetas a las siguientes reglas:
        </p>
        <ul className="list-disc ml-5 space-y-2">
          <li>
            <strong>Modificaciones generales:</strong> Cualquier cambio
            funcional o estructural adicional fuera de lo acordado tendrá un
            costo del <strong>10% del valor total del proyecto</strong> por
            modificación.
          </li>
          <li>
            <strong>Modificaciones de interfaz:</strong> Se ofrecen hasta{" "}
            <strong>3 modificaciones gratuitas</strong> de diseño. A partir de
            la cuarta, se cobrará el <strong>5% del costo del proyecto</strong>{" "}
            por cada cambio.
          </li>
          <li>
            <strong>Excepciones:</strong> Si la modificación se debe a un error
            técnico o malentendido por parte de Codeluxe, se realizará sin costo
            alguno.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">4. Políticas de Pago</h2>
        <p className="mb-3">
          El costo del desarrollo es un <strong>pago único</strong>, pero el
          monto final puede variar según el tipo de proyecto, su estructura y su
          nivel de complejidad. Un proyecto <strong>simple</strong> puede
          iniciar en valores aproximados de <strong>$300.000 ARS</strong>,
          mientras que un proyecto
          <strong> complejo</strong> puede requerir{" "}
          <strong>$700.000 ARS o más</strong>. Cada presupuesto se define de
          manera individual según los requerimientos del cliente.
        </p>

        <p className="mb-3">
          Para obtener un presupuesto preciso, el cliente puede contactar a
          Codeluxe por{" "}
          <a
            href="https://wa.me/5492926402409"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="font-semibold text-primary hover:underline"
            aria-label="Contacto por Whatsapp"
          >
            Whatsapp
          </a>{" "}
          y detallar su idea. Una vez definido el proyecto, se aplicarán los
          pagos mensuales correspondientes según lo establecido en la cláusula 6
          de los Términos y Condiciones.
        </p>

        <p>
          Para comenzar con el desarrollo, el cliente deberá{" "}
          <strong>abonar el 50% del monto total acordado</strong>. Una vez
          finalizado el proyecto y aprobado, se deberá{" "}
          <strong>abonar el 50% restante</strong> para la entrega final.
        </p>

        <p className="mt-2">
          <strong>
            No se entregará el producto final ni se habilitará el dominio hasta
            que se haya completado el pago total.
          </strong>{" "}
          En caso de incumplimiento, el proyecto podrá ser eliminado sin derecho
          a reembolso.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">5. Política de Reembolso</h2>
        <p>
          <strong>No se aceptan reembolsos</strong> bajo ninguna circunstancia,
          incluyendo cambios de opinión o cancelaciones por parte del cliente.
          El cliente entiende que los pagos cubren tiempo, planificación y
          trabajo ya invertido.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          6. Mantenimiento y Costos Recurrentes
        </h2>
        <p>
          El costo del desarrollo es de pago único. Sin embargo, algunos
          proyectos requieren servicios adicionales para asegurar su correcto
          funcionamiento.
        </p>

        <ul className="list-disc ml-5 mt-2 space-y-2">
          <li>
            <strong>Servicio Mensual del Servidor:</strong> Obligatorio para
            sitios web, tiendas online y cualquier proyecto que deba ser
            accesible públicamente. Incluye{" "}
            <strong>mantenimiento constante</strong>,{" "}
            <strong>copias de seguridad automáticas</strong>,{" "}
            <strong>seguridad activa</strong> y{" "}
            <strong>acceso multiplataforma</strong>. En el caso de{" "}
            <strong>aplicaciones de gestión</strong> con{" "}
            <strong>base de datos local</strong>, este servicio puede no ser
            requerido, aunque igualmente se recomienda por sus beneficios.
          </li>

          <li>
            <strong>Dominio Web:</strong> Si el cliente no desea adquirir un
            dominio anual, se ofrece sin costo un{" "}
            <strong>dominio gratuito</strong> del tipo{" "}
            <strong>tu-pagina.vercel.app</strong>. Más adelante podrá contratar
            un <strong>dominio profesional</strong>, recomendable por su bajo
            costo y por mejorar la <strong>credibilidad y presencia</strong> de
            la marca.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">7. Restricciones de Uso</h2>
        <p>No se desarrollarán sitios web con los siguientes fines:</p>
        <ul className="list-disc ml-5 mt-2 space-y-1">
          <li>Actividades ilegales o fraudulentas.</li>
          <li>Contenido pornográfico o sexual explícito.</li>
          <li>Juegos de azar, apuestas o casinos online no autorizados.</li>
          <li>Distribución de malware o phishing.</li>
        </ul>
        <p className="mt-2 text-sm text-red-500 font-medium">
          Detectar estos fines implicará la cancelación inmediata del proyecto
          sin reembolso.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">8. Plazos de Entrega</h2>
        <ul className="list-disc ml-5 mt-2 space-y-1">
          <li>
            Mínimo estimado: <strong>2 días hábiles</strong>.
          </li>
          <li>
            Máximo estimado: <strong>1 mes</strong>.
          </li>
          <li>
            En casos de alta complejidad, el plazo podrá ser indeterminado con
            previo aviso.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">9. Propiedad Intelectual</h2>
        <p>
          Hasta que el cliente no haya abonado el pago total, todos los derechos
          sobre el código y diseño son propiedad exclusiva de Codeluxe. Una vez
          finalizado el pago, el cliente obtiene los derechos de uso sobre el
          producto entregado.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">10. Métodos de Pago</h2>
        <ul className="list-disc ml-5 mt-2 space-y-1">
          <li>Efectivo</li>
          <li>Transferencia</li>
          <li>Criptomonedas</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          11. Modificaciones de Términos
        </h2>
        <p>
          Codeluxe se reserva el derecho de actualizar estos términos en
          cualquier momento. El uso continuo de nuestros servicios implica la
          aceptación de los cambios.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">12. Contacto</h2>
        <p>
          Para cualquier consulta sobre estos términos, podés comunicarte con
          nosotros a través de nuestro correo electrónico:{" "}
          <a
            href="mailto:codeluxetech@gmail.com"
            rel="noopener noreferrer nofollow"
            target="_blank"
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
