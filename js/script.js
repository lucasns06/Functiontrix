/* Calculadora equação de segundo grau */
function eq(){
    var a = parseFloat(document.getElementById("num1").value);
    var b = parseFloat(document.getElementById("num2").value);
    var c = parseFloat(document.getElementById("num3").value);
    var delta = b*b - 4*a*c;
    
  if ( a == 0)
    {
        document.getElementById("idResposta").innerText = `Esta é uma equação de 1º grau`;
        document.getElementById("idResposta").style.color = "red";
    }
    else if( b == 0 || c == 0)
        {
                document.getElementById("idResposta").innerText = `Equação de 2º grau incompleta`;
                document.getElementById("idResposta").style.color = "red";
        }else
            {
            if( delta < 0 )
                {
                    document.getElementById("idResposta").innerText = `Ɇ Raiz Real
                    (não possui soluções reais)`;
                    document.getElementById("idResposta").style.color = "red";
                }else
                    {
                    if( delta == 0)
                        {
                        raiz1 = (-b + Math.sqrt(delta) )/ (2*a);
                        document.getElementById("idResposta").innerText = `Raiz Dupla: ${raiz1}
                        S = { ${raiz1}, ${raiz1} }
                        
                        (As duas raizes são iguais)`;
                        document.getElementById("idResposta").style.color = "black";
                        }else
                            {
                            var raiz1 = (-b + Math.sqrt(delta) )/ (2*a);
                            var raiz2 = (-b - Math.sqrt(delta) )/ (2*a);
                            document.getElementById("idResposta").innerText = `1-Raiz: ${raiz1} 
                            2-Raiz: ${raiz2}  

                            S = { ${raiz1}, ${raiz2} }`;
                            document.getElementById("idResposta").style.color = "black";    
                            }
                    }
            }
}
function limpar(){
    document.getElementById("idResposta").innerText = "";
}
/* Temas da página */
function claro(){
    var body = document.querySelector(".bodyCalculadora");

    body.style.transition= "background-color 0.5s";
    body.style.backgroundColor = "#F7F9FF";
    body.style.color = "#151515";

}
function escuro(){
    var body = document.querySelector(".bodyCalculadora");

    body.style.transition= "background-color 0.5s";
    body.style.backgroundColor = "#151515";
    body.style.color = "#FFFFFF";
}
/* Calculadora basica */
function insert(num)
{
   var numero = document.getElementById('idResposta2').innerHTML;
   document.getElementById('idResposta2').innerHTML = numero + num;
}
function limpar2(){
    document.getElementById("idResposta2").innerHTML = "";
}
function back(){
   var resultado = document.getElementById("idResposta2").innerHTML;
   document.getElementById("idResposta2").innerHTML = resultado.substring(0, resultado.length -1 );
}
function calculo(){
    var resultado = document.getElementById("idResposta2").innerHTML;
    if(resultado)
    {
        document.getElementById("idResposta2").innerHTML = eval(resultado);
    }
}