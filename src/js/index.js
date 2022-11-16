 const mediaBimestral = 7
 const nome = prompt('Olá aluno, Qual é o seu nome?')

 const boletimEscolar = (notaDoPrimeiroBimestre, notaDoSegundoBimestre, notaDoTerceiroBimestre, notaDoQuartoBimestre) => {
     alert('Olá ' + nome + ', nós vamos dar uma olhada nas suas notas, para ver se você passou de ano ok?')
     notaDoPrimeiroBimestre = parseFloat(prompt('Qual foi a sua nota no primeiro bimestre?'))
     notaDoSegundoBimestre = parseFloat(prompt('Qual foi a sua nota no segundo bimestre?'))
     notaDoTerceiroBimestre = parseFloat(prompt('Qual foi a sua nota no terceiro bimestre?'))
     notaDoQuartoBimestre = parseFloat(prompt('Qual foi a sua nota no quarto bimestre?'))

     const somaDasNotas = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4
     alert('Sua média final ficou: ' + somaDasNotas)
     if(somaDasNotas >= mediaBimestral) {
         alert('Parabéns ' + nome + ', você passou de ano! Aproveite as férias.')
     } else if(somaDasNotas < mediaBimestral) {
         alert('Infelizmente suas notas não foram suficientes para passar de ano.')
     }
 }
 boletimEscolar()
