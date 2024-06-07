function eq(){
    var a = parseFloat(document.getElementById("num1").value);
    var b = parseFloat(document.getElementById("num2").value);
    var c = parseFloat(document.getElementById("num3").value);
    var delta = (b*b) - 4*a*c;
    
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
                        }
                        else
                        {
                            if( delta == 0)
                            {
                                raiz1 = (-b + Math.sqrt(delta) )/ (2*a);
                                raiz2 = (-b - Math.sqrt(delta) )/ (2*a);
                                document.getElementById("idResposta").innerText = `Raiz Dupla: ${raiz1}
                                S = { ${raiz1}, ${raiz2} }
                                
                                (As duas raizes são iguais)`;
                                document.getElementById("idResposta").style.color = "black";
                            }
                            else
                                {
                                 var raiz1 = (-b + Math.sqrt(delta) )/ (2*a);
                                 var raiz2 = (-b - Math.sqrt(delta) )/ (2*a);
                                    var maior = Math.max(raiz1,raiz2);
                                    var menor = Math.min(raiz1,raiz2);
                                    document.getElementById("idResposta").innerText = `1-Raiz: ${raiz1} 
                                    2-Raiz: ${raiz2}  

                                    S = { ${menor}, ${maior} }`;
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
