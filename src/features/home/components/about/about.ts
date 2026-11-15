// src/features/home/components/about/data/about.ts

export type Lang = "pt" | "en";

type AboutCopy = {
  eyebrow: string;
  title: string;
  introduction: string;
  story: string;
  perspective: string;
  continuity: string;
  personal: string;
  photoAlt: string;
  photoCaption: string;
  signatureRole: string;
  educationLabel: string;
  education: string;
  linksLabel: string;
  resume: string;
};

export const aboutCopy: Record<Lang, AboutCopy> = {
  pt: {
    eyebrow: "A pessoa por trás dos projetos",
    title: "Prazer, Marcos.",
    introduction:
      "Sou Marcos Vinícius Reis, desenvolvedor Full Stack. Sempre gostei de lógica, mas não me imaginava trabalhando só com números. O que me interessava era entender um problema e encontrar uma forma de resolvê-lo.",
    story:
      "Depois do ensino médio, cheguei a me matricular em Direito. Mudei de caminho quando percebi o que realmente me motivava: tecnologia, negócios e pessoas.",
    perspective: "Gosto da parte em que entender o negócio muda a solução.",
    continuity:
      "Os primeiros projetos vieram enquanto eu procurava um estágio. Um amigo com uma agência de marketing precisava de um site, e eu me ofereci para desenvolver. Aquela primeira oportunidade virou uma parceria que continua até hoje.",
    personal:
      "Fora do trabalho, é fácil me encontrar jogando futebol. Quando criança, eu era tímido, e o esporte me ajudou a me enturmar. Hoje divido o tempo livre entre futebol, vôlei, futevôlei e uma boa série. E no futebol eu me garanto.",
    photoAlt: "Marcos Vinícius Reis usando terno",
    photoCaption: "São Luís, Maranhão",
    signatureRole: "Desenvolvedor Full Stack",
    educationLabel: "Formação",
    education: "Sistemas de Informação pelo Instituto Federal do Maranhão.",
    linksLabel: "Perfis profissionais e currículo",
    resume: "Currículo",
  },

  en: {
    eyebrow: "The person behind the projects",
    title: "Hi, I'm Marcos.",
    introduction:
      "I'm Marcos Vinícius Reis, a Full-Stack Developer. I've always enjoyed logic, but I couldn't picture myself working only with numbers. What interested me was understanding a problem and finding a way to solve it.",
    story:
      "After high school, I even enrolled in law school. I changed direction when I realized what actually motivated me: technology, business and people.",
    perspective:
      "I enjoy the moment when understanding the business changes the solution.",
    continuity:
      "My first projects came while I was looking for an internship. A friend who ran a marketing agency needed a website, and I offered to build it. That first opportunity became a partnership that continues to this day.",
    personal:
      "Outside work, you'll often find me playing football. I was shy as a child, and sport helped me connect with people. These days, I split my free time between football, volleyball, footvolley and a good TV series. And I can hold my own on the football pitch.",
    photoAlt: "Marcos Vinícius Reis wearing a suit",
    photoCaption: "São Luís, Maranhão, Brazil",
    signatureRole: "Full-Stack Developer",
    educationLabel: "Education",
    education: "Information Systems at the Federal Institute of Maranhão.",
    linksLabel: "Professional profiles and résumé",
    resume: "Résumé",
  },
};
