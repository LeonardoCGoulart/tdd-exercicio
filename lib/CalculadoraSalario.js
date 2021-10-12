class CalculadoraSalario {

    calculaSalario(salario, cargo){
        return(salario >= 3000 ? 4000.00:1800.00);
    }

}

module.exports = CalculadoraSalario;