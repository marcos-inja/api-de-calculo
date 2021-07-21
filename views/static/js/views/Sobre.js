import AbstractView from './AbstractView.js'

export default class extends AbstractView {
    constructor(params) {
        super(params)
        this.setTitle('Sobre')
    }

    async getHtml() {
        return `
        <div class="conteiner">
            <h1>Sobre</h1>
            <p>Informações sobre o autor.</p>
        </div>
        `
    }
}