class CalculadoraSalario {

    calculaSalario(salario, cargo){
        let salarioFinal = 0;
        switch (cargo) {
            case 'desenvolvedor':
              return(salario >= 3000 ? salario * 0.8 : salario * 0.9)
              break;
            default:
              console.log(`Erro, cargo não reconhecido.`);
              return 0;
          }
          
    }

}

module.exports = CalculadoraSalario;