

class CaixaDaLanchonete {
    
    calcularValorDaCompra(metodoDePagamento, itens) {    
                       
        var i = "";
        var y = "";
        var rs = "R$ ";
        var lista = [["cafe","Café", 3],["chantily","Chantily",1.5],["suco","Suco Natural", 6.2], ["sanduiche", "Sanduiche", 6.5],
            ["queijo", "Queijo", 2], ["salgado", "Salgado", 7.25], ["combo1", '1 Suco e 1 Sanduiche', 9.5], ["combo2" ,'1 Café e 1 Sanduiche', 7.5]];        
        var calculo = '';
        var resultado = '';
        var valor = '';
        var soma = '';
        var string = 0;
        var laco = '';
        var compra = "";
        var comparador = false;

        
        if (metodoDePagamento == "dinheiro" || metodoDePagamento == "debito" || metodoDePagamento == "credito") {
            if ( itens == "") {
                resultado = "Não há itens no carrinho de compra!";
            }else{                
                for (y = 0; y < itens.length; y++) {
                    laco = itens[y];
                    compra = laco.split(",");
                    for (i = 0 ; i < lista.length; i++) {
                        if (compra[0] == lista[i][0]) {
                            calculo = compra[1]*lista[i][2];
                            comparador = true;
                            if ( compra[1] == 0 ) {
                                return "Quantidade inválida!";
                            }
                        }                      
                    }
                    if (comparador == false ) {
                        return 'Item inválido!';
                    }
                    calculo = Number(calculo);
                    soma = Number(soma);
                    soma = soma + calculo;
                }
                switch (metodoDePagamento) {
                    case "dinheiro" :
                        soma = soma - soma/20;                                                              
                        break;                                
                    case "credito" :
                        soma = 103/100*soma;                                                               
                        break;
                    case "debito" :
                        break;
                }
                soma = parseFloat(soma).toFixed(2);
                string = soma.toString();
                valor = string.replace(".", ",");
                resultado = rs + valor;
            }                  
        } else {
            resultado = "Forma de pagamento inválida!";
        }

        return resultado;          
    } 
}
export { CaixaDaLanchonete };
