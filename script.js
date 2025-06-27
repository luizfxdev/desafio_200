// Função para calcular a soma dos dígitos pares de uma string numérica
function sumEvenDigits(numStr) {
  let sum = 0;
  // Percorre cada caractere da string
  for (const char of numStr) {
    const digit = parseInt(char, 10);
    // Verifica se o dígito é par e não é NaN
    if (!isNaN(digit) && digit % 2 === 0) {
      sum += digit;
    }
  }
  return sum;
}
// Função para encontrar o portal com a maior soma de dígitos pares
function findCorrectPortal(portals) {
  const sums = portals.map(portal => sumEvenDigits(portal));
  // Encontra o índice do maior valor no array de somas
  const maxSum = Math.max(...sums);
  const index = sums.indexOf(maxSum);
  return { index, sums };
}
// Função principal que é executada quando o DOM é carregado
function main() {
  // Elementos do DOM
  const calculateBtn = document.getElementById('calculate');
  const resetBtn = document.getElementById('reset');
  const portal1Input = document.getElementById('portal1');
  const portal2Input = document.getElementById('portal2');
  const portal3Input = document.getElementById('portal3');
  const calculationDiv = document.getElementById('calculation');
  const resultDiv = document.getElementById('result');
  // Função para calcular e mostrar os resultados
  function calculate() {
    // Obtém os valores dos inputs
    const portals = [portal1Input.value, portal2Input.value, portal3Input.value];
    // Valida se todos os campos estão preenchidos
    if (portals.some(portal => portal === '')) {
      alert('Por favor, preencha todos os portais com sequências numéricas.');
      return;
    }
    // Encontra o portal correto e calcula as somas
    const { index, sums } = findCorrectPortal(portals);
    // Mostra os cálculos
    calculationDiv.innerHTML = `
            <p>Portal 1 (${portals[0]}): Soma dos pares = ${sums[0]}</p>
            <p>Portal 2 (${portals[1]}): Soma dos pares = ${sums[1]}</p>
            <p>Portal 3 (${portals[2]}): Soma dos pares = ${sums[2]}</p>
            <p>Maior soma encontrada: ${Math.max(...sums)}</p>
        `;
    // Mostra o resultado
    resultDiv.textContent = `Portal correto: ${index + 1} (índice ${index})`;
  }
  // Função para resetar os campos
  function reset() {
    portal1Input.value = '483729';
    portal2Input.value = '576342';
    portal3Input.value = '918264';
    calculationDiv.innerHTML = '';
    resultDiv.textContent = '';
  }
  // Adiciona os event listeners
  calculateBtn.addEventListener('click', calculate);
  resetBtn.addEventListener('click', reset);
}
// Espera o DOM carregar para executar o código principal
document.addEventListener('DOMContentLoaded', main);
