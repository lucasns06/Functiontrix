<h1 align="center">Functiontrix</h1>

- Site feito no primeiro módulo do curso de Desenvolvimento de Sistemas
<img src="img\ReadmeImagens\tela_inicial.png">

<h1 align="center">Produtos</h1>

<img src="img\ReadmeImagens\produtos.png">

## Conteúdo
Site feito com o intuito de aprender conceitos de HTML, CSS e JavaScript.

> Comandos de css que eu mais usei durante a criação do site:
```css
.classedocontainer{
  background-color: #000000;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
```
> JavaScript, calculo de Equação de segundo grau
```js
function eq(){
    var a = parseFloat(document.getElementById("num1").value);
    var b = parseFloat(document.getElementById("num2").value);
    var c = parseFloat(document.getElementById("num3").value);
    var delta = b*b - 4*a*c;
    //bhaskara
    var raiz1 = (-b + Math.sqrt(delta) )/ (2*a);
    var raiz2 = (-b - Math.sqrt(delta) )/ (2*a);
    document.getElementById("idResposta").innerText = `1-Raiz: ${raiz1} 
    2-Raiz: ${raiz2}
    S = { ${raiz1}, ${raiz2} }`;
```
