const last  = list => list[list.length - 1]
const table = document.querySelector('.table')
  .getElementsByTagName('tbody')[0]
const form  = document.querySelector('#form')
const iter  = document.querySelector('#iterations')
const num   = document.querySelector('#number')
const indr  = document.querySelector('#ind-real')
const indx  = document.querySelector('#ind-x')
const indh  = document.querySelector('#ind-h')
  
function computeTaylor(x, h, iterations) {
  const INITIAL = { fxi: 0, fxi1: 0, er: 100, ea: null }
  const ve = Math.log(x + h)
  
  return [...Array(iterations)]
    .reduce((acc, curr, i) => {
      const { fxi: _fxi, fxi1: _fxi1 } = last(acc)
      
      let fxi  = (Math.pow(-1, i) * Math.pow(h, i + 1)) /
        (i + 1 * Math.pow(x, i + 1))
      let fxi1 = _fxi + fxi
      let er   = Math.abs((ve - fxi1) / ve) * 100
      let ea   = Math.abs((fxi1 - _fxi1) / fxi1) * 100
      
      return acc.concat({ fxi, fxi1, er, ea })
    }, [INITIAL])
}

function renderTable(event) {
  event.preventDefault()
  
  let iterations = parseInt(iter.value, 10)
  let n = parseFloat(num.value, 10)
  let x = Math.floor(n)
  let h = n - x
  
  table.innerHTML = computeTaylor(x, h, iterations)
    .map(({ fxi, fxi1, er, ea }, i) => {
      let sign = Math.pow(-1, i + 1) === -1? '-' : ''
      let exp  = i > 1? `<sup>${i}</sup>` : ''
      let f    = i > 0?
        `${sign}h${exp}/${i > 1? i : ''}x${exp}`
        :  `ln(${x})`
      
      return `<tr>
        <th>${i}</th>
        <td><span class="frac">${f}</span></td>
        <td>${!fxi?  0  : fxi.toFixed(5)}</td>
        <td>${!fxi1? 0  : fxi1.toFixed(5)}</td>
        <td>${!er?   0  : er.toFixed(5)}</td>
        <td>${!ea?  '-' : ea.toFixed(5)}</td>
      </tr>`
    }).join('\n')
  
  indr.textContent = Math.log(n).toFixed(5)
  indx.textContent = x
  indh.textContent = h.toFixed(2)
}

form.addEventListener('submit', renderTable)

console.log(computeTaylor(1, 3, 5))