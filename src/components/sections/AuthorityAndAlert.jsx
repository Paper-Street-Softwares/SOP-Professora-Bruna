import React from "react";
import SectionHeaderNovo from "../sectionElements/SectionHeaderNovo";
import SectionArea from "../sectionElements/SectionArea";
import SectionWrapper from "../sectionElements/SectionWrapper";
import content from "../../content/content";
import { motion } from "framer-motion";
import { Award, Star, Trophy, CheckCircle2 } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../cards/CardsAuthorityAndAlert";

function AuthorityAndAlert() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const cardsData = [
    { title: "TRT Sergipe", position: "6ª colocada", delay: 0 },
    { title: "TRT Rio Grande do Norte", position: "10ª colocada", delay: 0.1 },
    { title: "TRT Distrito Federal", position: "22ª colocada", delay: 0.2 },
  ];

  const fullList = [
    { position: "1ª colocada", exam: "TRT Campinas" },
    { position: "6ª colocada", exam: "TRT Sergipe" },
    { position: "10ª colocada", exam: "TRT Rio Grande do Norte" },
    { position: "22ª colocada", exam: "TRT Distrito Federal" },
    { position: "35ª colocada", exam: "TRT Pernambuco" },
    { position: "60ª colocada", exam: "TRT Maranhão" },
    { position: "94ª colocada", exam: "TRT Santa Catarina" },
    { position: "202ª colocada", exam: "TRT Paraíba" },
  ];

  return (
    <SectionArea>
      <SectionWrapper>
        <SectionHeaderNovo
          miniTitle={content.texts.authorityAlert.miniTag}
          title={content.texts.authorityAlert.title}
          subtitle={content.texts.authorityAlert.subtitle}
        />

        <div className="relative">
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-[500px] bg-primary/5 -skew-y-6 transform origin-top-left -z-10" />
          <div className="absolute right-0 rounded-full top-40 w-96 h-96 bg-primaryLight/5 -z-10" />

          <motion.div
            className="max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Highlight Banner */}
            <motion.div
              variants={itemVariants}
              className="relative mb-10 group"
            >
              <div className="absolute inset-0 transition-opacity duration-500 opacity-25 bg-gradient-to-r from-primaryDark to-primaryDark rounded-2xl group-hover:opacity-40" />
              <div className="relative overflow-hidden border-t border-b bg-primaryDark border-primaryLight/30 sm:border rounded-2xl">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
                <div className="relative z-10 flex flex-col items-center justify-center px-6 py-10 text-center sm:px-12 sm:py-14">
                  <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-primaryLight/10 ring-1 ring-primaryLight/30">
                    <Trophy className="w-8 h-8 text-primaryLight" />
                  </div>
                  <h3 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl font-mainFont">
                    1º Lugar – TRT Campinas
                  </h3>
                  <p className="text-xl font-medium tracking-wide text-primaryLight/90 text-corOutrosTextosBranca">
                    Oficial de Justiça Avaliador Federal
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Top 3 Cards */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 gap-6 mb-16 md:grid-cols-2 desktop1:grid-cols-3 font-secondFont"
            >
              {cardsData.map((card, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <Card className="h-full border-border/60 bg-white/50 hover:border-primaryLight/30 transition-all duration-300 overflow-hidden relative md:w-[350px] desktop1:w-[300px]">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                      <Award className="w-24 h-24 opacity-50 text-primaryDark" />
                    </div>
                    <CardHeader className="relative z-10 pb-2">
                      <CardTitle className="text-lg desktop1:text-[15px] font-bold text-primaryDark font-secondFont">
                        {card.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <div className="flex items-center gap-2">
                        <Star className="w-5 h-5 text-primaryLight fill-primaryLight" />
                        <span className="text-2xl font-bold desktop1:text-xl text-primaryDark">
                          {card.position}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Detailed List Section */}
            <motion.div
              variants={itemVariants}
              className="border-t border-border/60"
            >
              <div className="mb-10 text-center">
                <p className="text-muted-foreground">
                  Entre 2022 e 2025, minhas aprovações incluem:
                </p>
              </div>

              <div className="max-w-4xl p-6 mx-auto bg-white border rounded-2xl border-border/50 md:p-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
                  {fullList.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-4 p-2 transition-colors rounded-lg group hover:bg-secondary/50"
                    >
                      <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 transition-all rounded-full bg-primary/5 group-hover:bg-primaryDark/10 group-hover:scale-110">
                        <CheckCircle2 className="w-4 h-4 transition-colors text-primaryDark group-hover:text-primaryDark" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold transition-colors text-primaryDark group-hover:text-primaryDark">
                          {item.position}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {item.exam}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}

export default AuthorityAndAlert;
