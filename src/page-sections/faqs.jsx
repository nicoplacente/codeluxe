"use client";

import SubTitle from "@/ui/sub-title";
import { FAQs as faqs } from "@/utils/constants";
import Link from "next/link";
import { useState } from "react";

export default function FAQs() {
  const [activeFAQ, setActiveFAQ] = useState(null);

  return (
    <section>
      <SubTitle className="text-2xl !text-white/90">
        Preguntas frecuentes
      </SubTitle>
      <article className="flex flex-col gap-4 my-4">
        {faqs.map(({ id, question, p1, p2 }) => (
          <details
            key={id}
            open={activeFAQ === id}
            onClick={(e) => {
              e.preventDefault();
              setActiveFAQ((prev) => (prev === id ? null : id));
            }}
            className="border-2 border-secondary rounded-xl hover:bg-black/30 transition w-full md:max-w-sm duration-300 cursor-pointer"
          >
            <summary className="text-primary-txt text-sm sm:text-base marker:text-xs px-4 py-2">
              {question}
            </summary>
            <p className="text-xs sm:text-sm text-secondary-txt px-4 pb-4 my-2">
              {p1}
            </p>

            {p2 && (
              <p className="text-xs sm:text-sm text-secondary-txt px-4 pb-4 my-2">
                {p2}
              </p>
            )}
          </details>
        ))}
      </article>
      <p className="text-sm text-pretty">
        Para mas información ve a{" "}
        <Link
          aria-label="Términos y Condiciones"
          className="font-semibol text-primary hover:underline"
          href="/terminos"
        >
          Términos y Condiciones
        </Link>
      </p>
    </section>
  );
}
