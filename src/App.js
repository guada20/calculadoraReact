import React, { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState('');

  const calcular = (operacion) => {
    const numero1 = parseFloat(num1);
    const numero2 = parseFloat(num2);

    if (isNaN(numero1) || isNaN(numero2)) {
      alert('Ingrese un número válido');
      return;
    }

    let res;
    switch (operacion) {
      case 'suma':
        res = numero1 + numero2;
        break;
      case 'resta':
        res = numero1 - numero2;
        break;
      case 'multiplicar':
        res = numero1 * numero2;
        break;
      case 'division':
        res = numero1 / numero2;
        break;
      case 'residuo':
        res = numero1 % numero2;
        break;
      case 'potencia':
        res = Math.pow(numero1, numero2);
        break;
      case 'raiz_cuadrada':
        if (numero1 < 0) {
          alert('No se puede calcular la raíz cuadrada de un número negativo.');
          return;
        }
        res = Math.sqrt(numero1);
        break;
      default:
        alert('Operación no reconocida');
        return;
    }
    setResultado(`Resultado: ${res}`);
  };

  return (
    <div>
      <h1>CALCULADORA ❤</h1>
      <br />
      <label htmlFor="num1">Número 1 </label>
      <input type="number" id="num1" value={num1} onChange={(e) => setNum1(e.target.value)} />
      <br />
      <label htmlFor="num2">Número 2 </label>
      <input type="number" id="num2" value={num2} onChange={(e) => setNum2(e.target.value)} />
      <br />
      <button onClick={() => calcular('suma')}>Sumar</button>
      <br />
      <button onClick={() => calcular('resta')}>Restar</button>
      <br />
      <button onClick={() => calcular('multiplicar')}>Multiplicar</button>
      <br />
      <button onClick={() => calcular('division')}>Dividir</button>
      <br />
      <button onClick={() => calcular('residuo')}>Residuo</button>
      <br />
      <button onClick={() => calcular('potencia')}>Potencia</button>
      <br />
      <button onClick={() => calcular('raiz_cuadrada')}>Raíz Cuadrada</button>
      <br />
      <div className="resultado">
        <p>{resultado}</p>
      </div>
    </div>
  );
}

export default App;