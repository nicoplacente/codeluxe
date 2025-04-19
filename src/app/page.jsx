import ButtonComponent from "@/ui/button-component";
import SectionContainer from "@/components/section-container";
import Title from "@/ui/title";
import Paragraph from "@/ui/paragraph";
import SubTitle from "@/ui/sub-title";
import CardProccess from "@/components/card-proccess";
import { benefits, ownProcess } from "@/utils/constants";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto my-12 flex justify-center flex-col gap-9 px-4">
      <SectionContainer>
        <Title>Impulsamos tu marca con diseño web estratégico</Title>
        <Paragraph className="text-sm">
          Landing pages, tiendas, sistemas... con diseño a medida enfocado en
          ventas
        </Paragraph>

        <ButtonComponent />
      </SectionContainer>

      <SectionContainer>
        <SubTitle className="text-xl">Beneficios</SubTitle>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {benefits.map((benefit, index) => (
            <li
              key={index}
              className="flex items-start gap-3 bg-secondary/50 p-6 border border-primary-txt/10 rounded-xl"
            >
              <span className="text-primary  bg-primary/20 rounded-2xl p-2">
                <benefit.icon className="size-9" />
              </span>

              <div>
                <SubTitle className="text-sm">{benefit.title}</SubTitle>
                <Paragraph className="text-xs">{benefit.description}</Paragraph>
              </div>
            </li>
          ))}
        </ul>
      </SectionContainer>

      <SectionContainer>
        <SubTitle className="text-xl">Nuestro proceso</SubTitle>
        <article className="flex flex-col sm:flex-row justify-center items-center w-full gap-2">
          {ownProcess.map((e, index) => (
            <CardProccess
              key={index}
              title={e.title}
              svgIcon={e.icon}
              isArrow={index < ownProcess.length - 1}
            />
          ))}
        </article>
      </SectionContainer>
    </main>
  );
}
