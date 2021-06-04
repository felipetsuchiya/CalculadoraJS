var v1, v2, op;
function insert(num) {
  var numero = document.getElementById("visor").innerHTML;
  document.getElementById("visor").innerHTML = numero + num;
}
function clean() {
  document.getElementById("visor").innerHTML = "";
}
function back() {
  var result = document.getElementById("visor").innerHTML;
  document.getElementById("visor").innerHTML = result.substring(0, result.length - 1  );
}

function operacao(conta) {
  if (document.getElementById('visor').innerHTML != ''){
    v1 = parseFloat(document.getElementById('visor').innerHTML);
    document.getElementById('visor').innerHTML = '';
    op = conta; 
  } else {
    alert('Insira um valor para efetuar a operação');
  }
}
function igual() {
  if (document.getElementById('visor').innerHTML != ''){
    v2 = parseFloat(document.getElementById('visor').innerHTML);
    switch (op) {
      case "+":
        document.getElementById('visor').innerHTML = v1 + v2;
        break;
      case "-":
        document.getElementById('visor').innerHTML = v1 - v2;
        break;
      case "x":
        document.getElementById('visor').innerHTML = v1 * v2;
        break;
      case "/":
        document.getElementById('visor').innerHTML = v1 / v2;
        break;
    }
  } else {
    alert('Insira um valor para efetuar a operação');
  }
}

function felipe() {
    alert('Desenvolvido por Felipe Tsuchiya zika demais slc')
}