import style from '../assets/css/RenderProducts.module.css'

export default function newProduct(cod, description, size){
    const newRow = document.createElement('tr')
    const structure = `
    <tr class=${style.tr}>
    <td data-cod data-num class=${style.td}>${cod}</td>
    <td data-description data-des class=${style.td}>${description}</td>
    <td data-size data-siz class=${style.td}>${size}</td>
    <td data-control data-act class=${style.td}>
    <ul class=${style.tabela__botoescontrole}>
    <li><a class="botao-simples botao-simples--editar" href="/editar">Editar</a></li>
    <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
    </ul>
    </td>
    </tr>
    ` 
    newRow.innerHTML = structure
    newRow.dataset.id = cod
    return newRow
}