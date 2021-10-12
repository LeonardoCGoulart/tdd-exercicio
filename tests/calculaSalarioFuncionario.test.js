const CalculadoraSalario = require("../lib/CalculadoraSalario");
describe('calculaSalarioFuncionario', () => {

    // testes referentes ao Desenvolvedor

    test('cargo desenvolvedor com salario >= 3000', () => {
        calc = new CalculadoraSalario();
        const funcionario = {
            nome: "Mario",
            email: "mario@hotmail.com",
            salario: 4500.00,
            cargo: "desenvolvedor"
        };
        const salarioFinal = calc.calculaSalario(funcionario.salario, funcionario.cargo);
        expect(salarioFinal).toBe(3600.00); // 20% de redução
    });

    test('cargo desenvolvedor com salario < 3000', () => {
        calc = new CalculadoraSalario();
        const funcionario = {
            nome: "Mario",
            email: "mario@hotmail.com",
            salario: 1000.00,
            cargo: "desenvolvedor"
        };
        const salarioFinal = calc.calculaSalario(funcionario.salario, funcionario.cargo);
        expect(salarioFinal).toBe(900.00); // 10% de redução
    });



});
