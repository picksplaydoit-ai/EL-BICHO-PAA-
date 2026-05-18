export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number; // 0 for A, 1 for B, 2 for C, 3 for D
  type?: 'numerical' | 'conceptual';
}

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "¿Cuál es la probabilidad de obtener un número par al lanzar un dado?",
    options: ["1/2", "1/3", "1/4", "2/3"],
    correctAnswer: 0
  },
  {
    id: 2,
    text: "En una bolsa hay 3 pelotas rojas, 4 azules y 5 verdes. ¿Cuál es la probabilidad de sacar una azul?",
    options: ["1/4", "1/3", "1/2", "2/3"],
    correctAnswer: 1
  },
  {
    id: 3,
    text: "Resuelve la inecuación: 3x + 5 > 20",
    options: ["x > 3", "x > 5", "x < 5", "x < 3"],
    correctAnswer: 1
  },
  {
    id: 4,
    text: "Resuelve: 2x - 7 <= 9",
    options: ["x <= 8", "x >= 8", "x <= 7", "x >= 7"],
    correctAnswer: 0
  },
  {
    id: 5,
    text: "Si f(x) = 2x + 3, ¿cuánto vale f(5)?",
    options: ["10", "11", "12", "13"],
    correctAnswer: 3
  },
  {
    id: 6,
    text: "Si f(x) = x² - 1, ¿cuánto vale f(4)?",
    options: ["12", "15", "16", "17"],
    correctAnswer: 1
  },
  {
    id: 7,
    text: "En un triángulo rectángulo los catetos miden 5 y 12. ¿Cuánto mide la hipotenusa?",
    options: ["11", "12", "13", "14"],
    correctAnswer: 2
  },
  {
    id: 8,
    text: "Un triángulo rectángulo tiene hipotenusa 10 y un cateto 6. ¿Cuánto mide el otro cateto?",
    options: ["6", "7", "8", "9"],
    correctAnswer: 2
  },
  {
    id: 9,
    text: "¿Cuánto suman los ángulos internos de un triángulo?",
    options: ["90°", "180°", "270°", "360°"],
    correctAnswer: 1
  },
  {
    id: 10,
    text: "¿Cuánto suman los ángulos internos de un pentágono?",
    options: ["360°", "540°", "720°", "900°"],
    correctAnswer: 1
  },
  {
    id: 11,
    text: "Si un ángulo mide 140°, ¿cuánto mide su suplementario?",
    options: ["30°", "40°", "50°", "60°"],
    correctAnswer: 1
  },
  {
    id: 12,
    text: "Dos ángulos suplementarios suman:",
    options: ["90°", "180°", "270°", "360°"],
    correctAnswer: 1
  },
  {
    id: 13,
    text: "Resuelve: 8 + 4 x 3",
    options: ["36", "20", "24", "32"],
    correctAnswer: 1
  },
  {
    id: 14,
    text: "Resuelve: (10 - 2)²",
    options: ["16", "32", "64", "128"],
    correctAnswer: 2
  },
  {
    id: 15,
    text: "¿Cuál es el valor de: 2³ + 5²",
    options: ["29", "31", "33", "35"],
    correctAnswer: 2
  },
  {
    id: 16,
    text: "¿Cuál es el perímetro de un rectángulo de lados 8 y 11?",
    options: ["19", "30", "38", "88"],
    correctAnswer: 2
  },
  {
    id: 17,
    text: "¿Cuál es el área de un rectángulo de base 14 y altura 6?",
    options: ["64", "72", "84", "96"],
    correctAnswer: 2
  },
  {
    id: 18,
    text: "¿Cuál es el área de un triángulo de base 16 y altura 7?",
    options: ["46", "52", "56", "64"],
    correctAnswer: 2
  },
  {
    id: 19,
    text: "Si 4 cuadernos cuestan 120 pesos, ¿cuánto costarán 10 cuadernos?",
    options: ["250", "280", "300", "320"],
    correctAnswer: 2
  },
  {
    id: 20,
    text: "Si un automóvil recorre 180 km con 12 litros de gasolina, ¿cuántos kilómetros recorrerá con 20 litros?",
    options: ["250", "280", "300", "320"],
    correctAnswer: 2
  },
  {
    id: 21,
    text: "¿Cuál de los siguientes números es divisible entre 3?",
    options: ["245", "351", "442", "517"],
    correctAnswer: 1
  },
  {
    id: 22,
    text: "¿Cuál de los siguientes números es divisible entre 5?",
    options: ["234", "678", "915", "742"],
    correctAnswer: 2
  },
  {
    id: 23,
    text: "¿Cuál de los siguientes números es divisible entre 9?",
    options: ["729", "814", "652", "437"],
    correctAnswer: 0
  },
  {
    id: 24,
    text: "¿Cuál de los siguientes números es divisible entre 10?",
    options: ["415", "720", "638", "579"],
    correctAnswer: 1
  },
  {
    id: 25,
    text: "Resuelve: 3(4 + 5)²",
    options: ["162", "243", "324", "405"],
    correctAnswer: 1
  },
  {
    id: 26,
    text: "Si f(x) = 3x - 4, ¿cuánto vale f(8)?",
    options: ["18", "20", "22", "24"],
    correctAnswer: 1
  },
  {
    id: 27,
    text: "Resuelve la inecuación: 5x - 10 > 25",
    options: ["x > 5", "x > 6", "x < 6", "x < 5"],
    correctAnswer: 1
  },
  {
    id: 28,
    text: "En una bolsa hay 8 pelotas negras y 12 blancas. ¿Cuál es la probabilidad de sacar una negra?",
    options: ["1/5", "2/5", "3/5", "4/5"],
    correctAnswer: 1
  },
  {
    id: 29,
    text: "Un triángulo rectángulo tiene catetos de 9 y 12. ¿Cuánto mide la hipotenusa?",
    options: ["13", "14", "15", "16"],
    correctAnswer: 2
  },
  {
    id: 30,
    text: "Resuelve: 6² - 4²",
    options: ["18", "20", "22", "24"],
    correctAnswer: 1
  },
  {
    id: 31,
    text: "¿Cuál es el perímetro de un cuadrado de lado 13?",
    options: ["39", "42", "52", "56"],
    correctAnswer: 2
  },
  {
    id: 32,
    text: "¿Cuál es el área de un círculo de radio 5?",
    options: ["10pi", "15pi", "20pi", "25pi"],
    correctAnswer: 3
  },
  {
    id: 33,
    text: "Si 6 lápices cuestan 54 pesos, ¿cuánto costarán 15 lápices?",
    options: ["115", "125", "135", "145"],
    correctAnswer: 2
  },
  {
    id: 34,
    text: "¿Cuál es el valor de: 18 ÷ (3 x 2)",
    options: ["2", "3", "6", "9"],
    correctAnswer: 1
  },
  {
    id: 35,
    text: "Si un ángulo mide 125°, ¿cuánto mide su suplementario?",
    options: ["45°", "50°", "55°", "65°"],
    correctAnswer: 2
  },
  {
    id: 36,
    text: "¿Cuál es la probabilidad de sacar una carta roja de una baraja?",
    options: ["1/4", "1/3", "1/2", "3/4"],
    correctAnswer: 2
  },
  {
    id: 37,
    text: "Resuelve: 2² + 4(5)",
    options: ["20", "22", "24", "26"],
    correctAnswer: 2
  },
  {
    id: 38,
    text: "Si f(x) = x² + 2, ¿cuánto vale f(6)?",
    options: ["36", "38", "40", "42"],
    correctAnswer: 1
  },
  {
    id: 39,
    text: "Resuelve: 7x - 9 >= 26",
    options: ["x >= 5", "x >= 4", "x <= 5", "x <= 4"],
    correctAnswer: 0
  },
  {
    id: 40,
    text: "¿Cuál de los siguientes números es divisible entre 2 y entre 5?",
    options: ["135", "240", "327", "411"],
    correctAnswer: 1
  }
];
