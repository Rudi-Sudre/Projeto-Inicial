const perguntas = [
    {
     pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
      respostas: [
        "let",
        "var",
        "const"
      ],
      correta: 2
    },
    {
    pergunta: "Qual é o operador de comparação estrita em JavaScript?",
      respostas: [
        "==",
        "===",
        "!="
      ],
      correta: 1
    },
    {
      pergunta: "O que o método 'charAt()' faz em JavaScript?",
      respostas: [
        "Retorna o valor booleano",
        "Retorna o caractere em uma posição específica",
        "Realiza uma comparação de strings"
      ],
      correta: 1
    },
    {
      pergunta: "O que é o conceito de 'hoisting' em JavaScript?",
      respostas: [
        "Elevar objetos no DOM",
        "Elevar declarações de variáveis e funções",
        "Elevar eventos de clique"
      ],
      correta: 1
    },
    {
      pergunta: "Como você chama uma função em JavaScript?",
      respostas: [
        "runFunction()",
        "callFunction()",
        "invokeFunction()"
      ],
      correta: 2
    },
    {
    pergunta: "Qual é a forma correta de comentar uma única linha em JavaScript?",
      respostas: [
        "// Comentário",
        "/* Comentário */",
        "# Comentário"
      ],
      correta: 0
    },
    {
    pergunta: "Qual é o método usado para converter uma string para um número inteiro em JavaScript?",
      respostas: [
        "parseInt()",
        "toFloat()",
        "convertToInteger()"
      ],
      correta: 0
    },
    {
    pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Data Object Model",
        "Document Object Model",
        "Dynamic Object Model"
      ],
      correta: 1
    },
    {
    pergunta: "Como você declara uma array em JavaScript?",
      respostas: [
        "array = []",
        "array()",
        "let array = {}"
      ],
      correta: 0
    },
    {
    pergunta: "Qual é a finalidade do operador 'typeof' em JavaScript?",
      respostas: [
        "Verificar o tipo de dado de uma variável",
        "Concatenar strings",
        "Comparar valores"
      ],
      correta: 0
    },
  ];
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de' + totalDePerguntas
  
  // loop ou laço de repetição
    for (const item of perguntas) 
  {
    const quizItem = template.content.cloneNode(true)
     quizItem.querySelector ('h3').textContent=item.pergunta
  
     for (let resposta of item.respostas){
     const dt = quizItem.querySelector('dl dt').cloneNode(true)
     dt.querySelector('span').textContent=resposta
     dt.querySelector('input').setAttribute('name', 'pergunta-' +  perguntas.indexOf(item))
     dt.querySelector('input').value=item.respostas.indexOf(resposta)
  
     dt.querySelector('input').onchange = (event) => {
     const estaCorreta = event.target.value == item.correta
  
     corretas.delete(item)
     if (estaCorreta){
     corretas.add(item)
     }
      mostrarTotal.textContent = corretas.size + ' de  ' + totalDePerguntas 
     } 
  
  
    quizItem.querySelector('dl').appendChild(dt)
  
  }
    quizItem.querySelector ('dl dt').remove() 
  
  // coloca a pergunta na tela
   quiz.appendChild(quizItem)
  }