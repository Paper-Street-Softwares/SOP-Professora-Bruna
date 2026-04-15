import React from "react";
import {
  BookOpen,
  Calendar,
  ClipboardCheck,
  Timer,
  MonitorPlay,
  MessageCircle,
  Rocket,
  TrendingUp,
} from "lucide-react";
import ButtonReflexo from "../interactives/ButtonReflexo";
import content from "../../content/content";

const MentoriaOAB = ({ colorMode }) => {
  const cards = [
    {
      title: "Plano de estudo individual",
      desc: "Cronograma adaptado à sua rotina e realidade",
      icon: <BookOpen className="w-8 h-8 text-primary" />,
    },
    {
      title: "Acompanhamento semanal",
      desc: "Ajustes constantes para evolução real",
      icon: <Calendar className="w-8 h-8 text-primary" />,
    },
    {
      title: "Correção de erros",
      desc: "Diagnóstico claro do que está travando seu desempenho",
      icon: <ClipboardCheck className="w-8 h-8 text-primary" />,
    },
    {
      title: "Simulados estratégicos",
      desc: "Treino com base em provas anteriores",
      icon: <Timer className="w-8 h-8 text-primary" />,
    },
    {
      title: "Aula personalizada mensal",
      desc: "Foco no conteúdo que você mais tem dificuldade",
      icon: <MonitorPlay className="w-8 h-8 text-primary" />,
    },
    {
      title: "Suporte direto",
      desc: "Grupo exclusivo e orientação contínua",
      icon: <MessageCircle className="w-8 h-8 text-primary" />,
    },
  ];

  return (
    <section className=" text-slate-800 py-16 px-4 font-sans max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="text-primary text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest">
          MENTORIA OAB
        </span>
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mt-6 mb-4 font-mainFont">
          Pare de estudar no escuro
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-secondFont">
          Mentoria estratégica para organizar seus estudos, corrigir erros e
          acelerar sua aprovação na OAB.
        </p>
      </div>

      {/* Frase Destaque e Texto */}
      <div className="text-center mb-16 max-w-4xl mx-auto font-secondFont">
        <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">
          O problema não é a prova. É como você está estudando.
        </h3>
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p>
            Se você sente que estuda muito e mesmo assim não sai do lugar, o
            problema não é falta de esforço — é falta de direção.
          </p>
          <p>
            A mentoria foi criada para estruturar sua rotina, organizar seus
            materiais e te dar um caminho claro até a aprovação. Aqui, nada é
            genérico: tudo é pensado com base na sua realidade, no seu nível
            atual e no seu objetivo.
          </p>
          <p className="font-semibold text-slate-800">
            Você não vai apenas estudar mais. Vai estudar certo.
          </p>
        </div>
      </div>

      {/* Grid de Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 font-secondFont">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white border border-slate-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center"
          >
            <div className="mb-4">{card.icon}</div>
            <h4 className="font-bold text-slate-900 mb-2">{card.title}</h4>
            <p className="text-sm text-slate-500">{card.desc}</p>
          </div>
        ))}
      </div>

      {/* Seção de Opções */}
      <div className="text-center mb-12 font-secondFont">
        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
          Sem cronograma genérico. Sem achismo. Sem perda de tempo.
        </h3>
        <p className="text-slate-500 uppercase tracking-wide text-sm font-bold mt-4">
          Opções da mentoria
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16 font-secondFont">
        {/* Plano Turbo */}
        <div className="bg-[#102a43] text-white p-8 rounded-2xl flex items-center gap-6 shadow-xl">
          <Rocket className="w-12 h-12 text-primaryLight shrink-0" />
          <div>
            <h4 className="text-xl font-bold">Turbo (6 semanas)</h4>
            <p className="text-slate-300 text-sm">
              Direcionamento intensivo para destravar sua preparação
            </p>
          </div>
        </div>

        {/* Plano Extensivo */}
        <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl flex items-center gap-6 font-secondFont">
          <TrendingUp className="w-12 h-12 text-primaryDark shrink-0" />
          <div>
            <h4 className="text-xl font-bold text-slate-900">
              Extensivo (12 semanas)
            </h4>
            <p className="text-slate-500 text-sm">
              Acompanhamento completo para evolução consistente
            </p>
          </div>
        </div>
      </div>

      {/* Footer e CTA */}
      <div className="text-center space-y-8 font-secondFont">
        <p className="text-slate-600 max-w-2xl mx-auto">
          A constância e a estratégia são o que levam à aprovação. <br />
          <span className="font-bold text-slate-900">
            Aqui, você não estuda sozinho — você tem direção
          </span>
        </p>

        <ButtonReflexo
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={18}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.768.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.793.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.718 2.006-1.412.248-.694.248-1.288.173-1.412-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.896a9.825 9.825 0 012.893 6.994c-.002 5.45-4.436 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.158 11.892c0 2.096.547 4.142 1.588 5.94L0 24l6.305-1.654a11.882 11.882 0 005.732 1.463h.005c6.554 0 11.89-5.335 11.892-11.892a11.821 11.821 0 00-3.466-8.413" />
            </svg>
          }
          link={content.texts.links.ctaWhatsapp}
          label="Quero entrar na mentoria"
          colorMode={colorMode}
          className={`clickevent`}
        />
      </div>
    </section>
  );
};

export default MentoriaOAB;
