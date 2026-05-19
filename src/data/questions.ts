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
    text: "¿Cuál es el siguiente número en la sucesión: 2, 5, 10, 17, ...?",
    options: ["24", "25", "26", "27"],
    correctAnswer: 2
  },
  {
    id: 14,
    text: "Si el radio de un círculo es 7, ¿cuál es su circunferencia aproximada? (pi = 3.14)",
    options: ["21.98", "43.96", "49.00", "153.86"],
    correctAnswer: 1
  },
  {
    id: 15,
    text: "La razón entre niños y niñas es 3:5. Si hay 15 niños, ¿cuántas niñas hay?",
    options: ["20", "25", "30", "35"],
    correctAnswer: 1
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
    text: "Si 2x - 5 = x + 7, ¿cuánto vale x?",
    options: ["10", "12", "14", "16"],
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
    text: "¿Cuál es el siguiente término en la serie 1, 4, 9, 16, ...?",
    options: ["20", "25", "30", "36"],
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
    text: "Si todos los A son B, y todos los B son C, ¿cuál conclusión es válida?",
    options: ["Todos los C son A", "Algunos B no son C", "Todos los A son C", "Ningún C es B"],
    correctAnswer: 2
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
  },
  {
    id: 41,
    text: "¿Cuál es el valor de x en la ecuación 2(x - 3) = 14?",
    options: ["8", "9", "10", "11"],
    correctAnswer: 2
  },
  {
    id: 42,
    text: "Si el 25% de un número es 40, ¿cuál es el número?",
    options: ["100", "120", "160", "200"],
    correctAnswer: 2
  },
  {
    id: 43,
    text: "Simplifica la expresión: 5a + 3b - 2a + 4b",
    options: ["7a + 7b", "3a + 7b", "3a - b", "7a - b"],
    correctAnswer: 1
  },
  {
    id: 44,
    text: "¿Cuál es la media aritmética de 8, 12, 15 y 5?",
    options: ["10", "11", "9", "12"],
    correctAnswer: 0
  },
  {
    id: 45,
    text: "Encuentra el valor de: √144 + √81",
    options: ["19", "20", "21", "22"],
    correctAnswer: 2
  },
  {
    id: 46,
    text: "En un mapa, 2 cm representan 50 km. ¿Cuántos km representan 5 cm?",
    options: ["100", "125", "150", "175"],
    correctAnswer: 1
  },
  {
    id: 47,
    text: "¿Cuál es el volumen de un cubo de lado 4?",
    options: ["16", "32", "48", "64"],
    correctAnswer: 3
  },
  {
    id: 48,
    text: "Si x = 3 e y = -2, ¿cuál es el valor de x² + 2y?",
    options: ["13", "5", "7", "1"],
    correctAnswer: 1
  },
  {
    id: 49,
    text: "¿Cuál es el MCD de 24 y 36?",
    options: ["6", "8", "12", "18"],
    correctAnswer: 2
  },
  {
    id: 50,
    text: "Un ángulo recto mide:",
    options: ["45°", "90°", "180°", "270°"],
    correctAnswer: 1
  },
  {
    id: 51,
    text: "Factoriza la expresión: x² - 9",
    options: ["(x - 3)(x + 3)", "(x - 9)(x + 1)", "(x - 3)²", "(x + 3)²"],
    correctAnswer: 0
  },
  {
    id: 52,
    text: "¿Cuántos segundos hay en 2 horas y 15 minutos?",
    options: ["7200", "7500", "8100", "8400"],
    correctAnswer: 2
  },
  {
    id: 53,
    text: "Si un pantalón cuesta $800 y tiene el 20% de descuento, ¿cuánto pagarás?",
    options: ["$600", "$640", "$720", "$780"],
    correctAnswer: 1
  },
  {
    id: 54,
    text: "¿Cuál es la pendiente de la recta y = 3x - 5?",
    options: ["3", "-5", "5", "-3"],
    correctAnswer: 0
  },
  {
    id: 55,
    text: "En una urna hay 10 esferas numeradas del 1 al 10. ¿Cuál es la probabilidad de sacar un número primo?",
    options: ["3/10", "4/10", "5/10", "6/10"],
    correctAnswer: 1
  },
  {
    id: 56,
    text: "¿Cuál es el área de un rombo cuyas diagonales miden 10 y 8?",
    options: ["40", "80", "20", "60"],
    correctAnswer: 0
  },
  {
    id: 57,
    text: "Si 3x + 2 = 17, ¿cuánto vale x?",
    options: ["5", "6", "4", "7"],
    correctAnswer: 0
  },
  {
    id: 58,
    text: "¿Cuál es la moda del conjunto {2, 3, 3, 4, 5, 5, 5, 6}?",
    options: ["3", "4", "5", "6"],
    correctAnswer: 2
  },
  {
    id: 59,
    text: "¿Cuál es la suma de 3/4 + 1/2?",
    options: ["4/6", "5/4", "1", "3/2"],
    correctAnswer: 1
  },
  {
    id: 60,
    text: "¿Cuál es la mediana del conjunto {10, 2, 38, 24, 11}?",
    options: ["10", "11", "24", "17"],
    correctAnswer: 1
  },
  {
    id: 61,
    text: "Resuelve el sistema: x + y = 10, x - y = 4. ¿Cuánto vale x?",
    options: ["6", "7", "8", "3"],
    correctAnswer: 1
  },
  {
    id: 62,
    text: "¿Cuál es la distancia entre los puntos (1, 2) y (4, 6)?",
    options: ["3", "4", "5", "7"],
    correctAnswer: 2
  },
  {
    id: 63,
    text: "Si un dado se lanza dos veces, ¿cuál es la probabilidad de obtener dos seis?",
    options: ["1/6", "1/12", "1/36", "1/18"],
    correctAnswer: 2
  },
  {
    id: 64,
    text: "¿Cuál es el dominio de la función f(x) = 1/x?",
    options: ["Todos los reales", "x > 0", "x != 0", "x >= 1"],
    correctAnswer: 2
  },
  {
    id: 65,
    text: "Si 5 obreros terminan una obra en 12 días, ¿cuánto tardarán 10 obreros?",
    options: ["6 días", "24 días", "8 días", "10 días"],
    correctAnswer: 0
  },
  {
    id: 66,
    text: "¿Cuál es el valor de log10(1000)?",
    options: ["1", "2", "3", "4"],
    correctAnswer: 2
  },
  {
    id: 67,
    text: "En un triángulo, dos lados miden 7 y 10. ¿Cuál no puede ser la medida del tercer lado?",
    options: ["4", "12", "15", "18"],
    correctAnswer: 3
  },
  {
    id: 68,
    text: "¿Cuál es el volumen de un cilindro con radio 3 y altura 5? (en términos de pi)?",
    options: ["15pi", "30pi", "45pi", "75pi"],
    correctAnswer: 2
  },
  {
    id: 69,
    text: "Si f(x) = 3x - 2 y g(x) = x + 5, ¿cuánto vale f(g(2))?",
    options: ["19", "21", "23", "25"],
    correctAnswer: 0
  },
  {
    id: 70,
    text: "¿Qué porcentaje de 200 es 50?",
    options: ["20%", "25%", "30%", "40%"],
    correctAnswer: 1
  },
  {
    id: 71,
    text: "Simplifica: (x^3 * x^5) / x^2",
    options: ["x^6", "x^8", "x^10", "x^4"],
    correctAnswer: 0
  },
  {
    id: 72,
    text: "La suma de los primeros 10 números naturales es:",
    options: ["45", "50", "55", "60"],
    correctAnswer: 2
  },
  {
    id: 73,
    text: "Si un ángulo de un triángulo isósceles mide 100°, ¿cuánto miden los otros dos?",
    options: ["40° y 40°", "80° y 80°", "50° y 50°", "30° y 50°"],
    correctAnswer: 0
  },
  {
    id: 74,
    text: "¿Cuál es el punto medio entre A(2, 4) y B(8, 10)?",
    options: ["(5, 7)", "(4, 6)", "(6, 8)", "(10, 14)"],
    correctAnswer: 0
  },
  {
    id: 75,
    text: "Si x/3 = 12, ¿cuánto vale x/4?",
    options: ["3", "4", "9", "36"],
    correctAnswer: 2
  },
  {
    id: 76,
    text: "Al lanzar una moneda tres veces, ¿cuál es la probabilidad de obtener 3 águilas?",
    options: ["1/4", "1/6", "1/8", "1/3"],
    correctAnswer: 2
  },
  {
    id: 77,
    text: "Si 2^x = 32, ¿cuánto vale x?",
    options: ["4", "5", "6", "7"],
    correctAnswer: 1
  },
  {
    id: 78,
    text: "Un artículo cuesta $116 con IVA (16%). ¿Cuál es el precio sin IVA?",
    options: ["$100", "$96", "$104", "$110"],
    correctAnswer: 0
  },
  {
    id: 79,
    text: "En una progresión aritmética, a1=3 y d=5. ¿Cuál es el décimo término?",
    options: ["45", "48", "50", "53"],
    correctAnswer: 1
  },
  {
    id: 80,
    text: "¿Cuál es el área lateral de un cubo de arista 2?",
    options: ["8", "16", "24", "32"],
    correctAnswer: 1
  }
];
