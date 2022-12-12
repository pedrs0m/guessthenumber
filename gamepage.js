// geração do valor aleatório
var y = Math.floor(Math.random() *10 + 1);
// contagem de tentativas
var x = document.getElementById("guessField").value;
// até acerto    
   function submit()
   {if(x==y)
    {
      alert("PARABÉNS!!!" +playername+" , você acertou em" +guess+ "tentativa(s)!!!")
      guess = 1;
    }
    else if (x > y)
    {
      guess++;
      alert("Uepa, Respota Errado !!! tenta um numero menor ")
    }
    else
    {
      guess++;
      alert("Uepa, Respota Errado !!! tenta um numero maior ")
    }}
// função para o número enviado pelo usuário
function playAgain()
{
    y = Math.floor(Math.random() *10 + 1);
}
