import AbstractView from './AbstractView.js'

export default class extends AbstractView {
    constructor(params) {
        super(params)
        this.setTitle('Home')
    }

    async getHtml() {
        return `
            <h1>Página inicial</h1>
            <p>
                Projeto de api rest de cálculo.
            </p>
            <h2>Aluno:</h2>
            <p>
                Marcos Vinicius.
            </p>
            
        `
    }
}