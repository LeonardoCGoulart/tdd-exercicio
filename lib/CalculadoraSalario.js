class CalculadoraSalario {

    calculaSalario(salario, cargo){ // função responsável por retornar o salário líquido de acordo com salário_base e cargo
        switch (cargo) {
            case 'desenvolvedor':
              return(salario >= 3000 ? salario * 0.80 : salario * 0.90) // se ganhar >= 3000 desconto de 20%, senão apenas 10%
            case 'DBA':
                return(salario >= 2000 ? salario * 0.75 : salario * 0.85) // se ganhar >= 2000 desconto de 25%, senão apenas 15%
            case 'testador':
                return(salario >= 2000 ? salario * 0.75 : salario * 0.85) // se ganhar >= 2000 desconto de 25%, senão apenas 15%
            case 'gerente':
                return(salario >= 5000 ? salario * 0.70 : salario * 0.80) // se ganhar >= 5000 desconto de 30%, senão apenas 20%
            default:
              console.log(`Erro, cargo não reconhecido.`); // o cargo recebido não foi encontrado no sistema
              return 0;
          }     
    }

}

module.exports = CalculadoraSalario;