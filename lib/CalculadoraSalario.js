class CalculadoraSalario {

    // configurações de salario e cargo
    dados_desenvolvedor = {
        salario_teto: 3000,
        porcentagem_acima_salario_teto: 20, // 20% de redução do salário caso acima do salario teto
        porcentagem_abaixo_salario_teto: 10, // 10% de redução do salário caso abaixo do salario teto
    };

    dados_DBA = {
        salario_teto: 2000,
        porcentagem_acima_salario_teto: 25, // 25% de redução do salário caso acima do salario teto
        porcentagem_abaixo_salario_teto: 15, // 15% de redução do salário caso abaixo do salario teto
    };

    dados_testador = {
        salario_teto: 2000,
        porcentagem_acima_salario_teto: 25, // 25% de redução do salário caso acima do salario teto
        porcentagem_abaixo_salario_teto: 15, // 15% de redução do salário caso abaixo do salario teto
    };

    dados_gerente = {
        salario_teto: 5000,
        porcentagem_acima_salario_teto: 30, // 30% de redução do salário caso acima do salario teto
        porcentagem_abaixo_salario_teto: 20, // 20% de redução do salário caso abaixo do salario teto
    };

    calculaSalario(salario, cargo){ // função responsável por retornar o salário líquido de acordo com salário_base e cargo
        switch (cargo) {
            case 'desenvolvedor':
              return(salario >= this.dados_desenvolvedor.salario_teto ? salario * (1 - this.dados_desenvolvedor.porcentagem_acima_salario_teto/100) : salario * (1 - this.dados_desenvolvedor.porcentagem_abaixo_salario_teto/100)) 
            case 'DBA':
                return(salario >= this.dados_DBA.salario_teto ? salario * (1 - this.dados_DBA.porcentagem_acima_salario_teto/100) : salario * (1 - this.dados_DBA.porcentagem_abaixo_salario_teto/100)) 
            case 'testador':
                return(salario >= this.dados_testador.salario_teto ? salario * (1 - this.dados_testador.porcentagem_acima_salario_teto/100) : salario * (1 - this.dados_testador.porcentagem_abaixo_salario_teto/100)) 
            case 'gerente':
                return(salario >= this.dados_gerente.salario_teto ? salario * (1 - this.dados_gerente.porcentagem_acima_salario_teto/100) : salario * (1 - this.dados_gerente.porcentagem_abaixo_salario_teto/100))  
            default:
              console.log(`Erro, cargo não reconhecido.`); // o cargo recebido não foi encontrado no sistema
              return 0;
          }  
    }

}

module.exports = CalculadoraSalario;