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

    // testes referentes ao DBA

    test('cargo DBA com salario >= 2000', () => {
        calc = new CalculadoraSalario();
        const funcionario = {
            nome: "Joao",
            email: "joao@hotmail.com",
            salario: 2500.00,
            cargo: "DBA"
        };
        const salarioFinal = calc.calculaSalario(funcionario.salario, funcionario.cargo);
        expect(salarioFinal).toBe(1875.00); // 25% de redução
    });

    test('cargo DBA com salario < 2000', () => {
        calc = new CalculadoraSalario();
        const funcionario = {
            nome: "Joao",
            email: "joao@hotmail.com",
            salario: 1000.00,
            cargo: "DBA"
        };
        const salarioFinal = calc.calculaSalario(funcionario.salario, funcionario.cargo);
        expect(salarioFinal).toBe(850.00); // 15% de redução
    });

    // testes referentes ao testador

    test('cargo testador com salario >= 2000', () => {
        calc = new CalculadoraSalario();
        const funcionario = {
            nome: "Pedro",
            email: "pedro@hotmail.com",
            salario: 2500.00,
            cargo: "testador"
        };
        const salarioFinal = calc.calculaSalario(funcionario.salario, funcionario.cargo);
        expect(salarioFinal).toBe(1875.00); // 25% de redução
    });

    test('cargo testador com salario < 2000', () => {
        calc = new CalculadoraSalario();
        const funcionario = {
            nome: "Pedro",
            email: "pedro@hotmail.com",
            salario: 1000.00,
            cargo: "testador"
        };
        const salarioFinal = calc.calculaSalario(funcionario.salario, funcionario.cargo);
        expect(salarioFinal).toBe(850.00); // 15% de redução
    });



});
