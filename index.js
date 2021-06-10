alert("___________") 
alert(" ")
alert("       Casa Noturna bonye")
alert("___________")

alert("")
alert("tipos de ingressos")
alert("")
alert("Básico / Vip / Extremo")
alert("")
alert("(Básico) ->  (número 121)")
alert(" (Vip) ->    (número 157)")
alert("(Extremo) -> (número 184)")
alert("")

alert("cada ingresso te permite acesso a áreas diferentes, quanto maior o preço, maiores são seus benefícios")
alert("")

var a = prompt("qual o ingresso você quer ?")

alert("")

var y = 0
prompt (" quantas pulseiras deseja? ")
while (y <= 7 ){
alert ("pulseira confirmada")
if (y==7)
break;
y++;
}
alert("")

if ( y > 7) {
  alert("esta é uma casa exclusiva então a compra de ingressos é limitada, cada pessoa só pode adquirir 7 ingressos mas como você é convidado especial, está liberado!"
  )
}else{
  (y <= 7)
  alert("tudo certo, prossiga para o próximo caixa!")
}

alert("")

Produto = a;

switch (Produto) {
    case "basico":
        alert("O ingresso escolhido é nosso ingresso mais simples, só permite acesso a pista, e seu preço é R$ 150,00");
        break;
    case "vip":
        alert("O ingresso escolhido é o nosso ingresso intermediário, que te fornece acesso ao camarote, e seu preço é R$ 320,00 ");
        break;
    case "extremo":
        alert("O ingresso escolhido é nosso ingresso especial que fornece acesso exclusivo ao camarim do cantor da noite, e seu preço é R$ 1150,00");
    }

alert("")

var r1 = 150
var r2 = 320
var r3 = 1150

var codigo = prompt("poderia me informar o número da sua pulseira ?")

alert("")

switch(codigo){
  case ("121"):
  alert("o valor total ficou em R$ " + r1 * y + " reais")
  break;
    case ("157"):
  alert("o valor total ficou em R$ " + r2 * y + " reais")
  break;
    case ("184"):
  alert("o valor total ficou em R$ " + r3 * y + " reais")
  ;
}

 alert("")

var b = prompt ("gostaria de efetuar a compra ?")

console.log("")

  if(b == "sim") {
        console.log("ok, primeiramente selecione o método de pagamento ");

        console.log("")

var c = prompt ("transferência bancária, pix ou cartão crédito/débito ??")

console.log("")

switch (c) {

  case "transferência bancária":
  console.log("sistema: opção -> transferência selecionada")
  break;
  case "pix":
  console.log("sistema: opção -> pix selecionada")
  break;
  case "cartão":
  console.log("sistema: opção -> cartão selecionada")
  break;
}

console.log("")

var e = prompt ("gostaria de parcelar ?")
  
console.log("")

 switch (e) {
  
    case "não":
        console.log ("ok, prossiga para o pagamento");
        break;
        
    case "sim":
        console.log ("ok, prossiga para o pagamento ,lembrando que o parcelamento na nossa casa até 6x é sem juros!");
        break;
  }

  console.log("")

  "senha do cartão é 6457"

  var f = prompt ("digite a senha do cartão *.*.**.*678");

console.log("")

if (f == 6457){
  console.log("compra aprovada, pode entrar")

  console.log("")

do {
  console.log("obrigado pela preferência...")
} while (f === 6457)

console.log("")

}else if ( f  != 6457) {
  console.log("senha incorreta, transação cancelada")
}

console.log("")

for (var c = 3;c > 1;c--){
  console.log("")
}

 var i = prompt ("operação realizada...fechando o app");

        
  }else{ 
    (b != "não")
        console.log ("muito obrigado, tenha uma boa noite!");
        }

console.log("")

for (var c = 3;c > 1;c--){
  console.log("")
}

var i = console.log ("operação realizada...fechando o app");