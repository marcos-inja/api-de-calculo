import AbstractView from './AbstractView.js'

export default class extends AbstractView {
    constructor(params) {
        super(params)
        this.setTitle('Documentação')
    }

    async getHtml() {
        return `
        <div class="conteiner">
            <h1>Documentação</h1>
            <p>Tudo o que você precisa saber!</p>
        </div>
        `
    }
}