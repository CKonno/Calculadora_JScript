function calculadora() {
    const operacao = Number(prompt('Escolha uma operação:\n 1 - Soma (+) \n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão real (/)\n 5 - Divisão inteira (%)\n 6 - Potenciação(**)'));

    if (!operacao || operacao >= 7) {
        alert('Erro - operação inválida');
        calculadora();
    }
    else {
        let a = Number(prompt('Insira o primeiro valor!'));
        let b = Number(prompt('Insira o segundo valor!'));
        let resultado;

        if (!a || !b) {
            alert('Erro - Parâmetros inválidos');
            calculadora();
        }
        else {
            function soma(){
                resultado = a + b;
                alert(`${a} + ${b} = ${resultado}`);
                novaOperacao();
            };

            function subtracao(){
                resultado = a - b;
                alert(`${a} - ${b} = ${resultado}`);
                novaOperacao();
            };

            function multiplicacao(){
                resultado = a * b;
                alert(`${a} * ${b} = ${resultado}`);
                novaOperacao();
            };


            function divisaoReal(){
                resultado = a / b;
                alert(`${a} / ${b} = ${resultado}`);
                novaOperacao();
            };

            function divisaoInteira(){
                resultado = a % b;
                alert(`O resto da divisão entre ${a} e ${b} é igual a ${resultado}`);
                novaOperacao();
            };

            function potenciacao(){
                resultado = a ** b;
                alert(`${a} elevado a ${b} é igual a ${resultado}`);
                novaOperacao();
            };

            function novaOperacao(){
                let opcao = prompt('Deseja fazer uma nova operação?\n1 - Sim\n2 - Não');
                if (opcao == 1){
                    calculadora();
                }
                else if (opcao == 2 ) {
                    alert('Até mais!');
                }
                else {
                    alert('Digite uma opção válida!');
                    novaOperacao();
                }
            }
        }
        /*
        if (operacao == 1) {
            soma();
        }
        else if (operacao == 2) {
            subtracao();
        }
        else if (operacao == 3) {
            multiplicacao();
        }
        else if (operacao == 4) {
            divisaoReal();
        }
        else if (operacao == 5) {
            divisaoInteira();
        }
        else if (operacao == 6) {
            potenciacao();
        }  */

        switch(operacao){
            case 1:
                soma();
                break;
            case 2:
                subtracao();
                break;
            case 3:
                multiplicacao();
            case 4:
                divisaoReal();
                break;
            case 5:
                divisaoInteira();
                break;
            case 6: 
                potenciacao();
                break;            
        }
    }
}


calculadora();