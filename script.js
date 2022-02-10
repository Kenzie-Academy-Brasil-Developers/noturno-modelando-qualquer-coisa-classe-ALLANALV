const body = document.querySelector('body')
const inputPedido = document.querySelector('input');
const inputCritica = document.getElementById('criticaCliente');
const btn = document.getElementById('button');

class Restaurant {
    constructor(nome, endereco, experiencia, especialidade, dias, horario, cardapio) {
        this.nome = nome;
        this.endereco = endereco;
        this.especialidade = especialidade;
        this.experiencia = experiencia;
        this.dias = dias;
        this.horario = horario;
        this.cardapio = cardapio
    }

    fazerPedido = (pedido) => {
        const aviso = document.createElement('p');
        body.appendChild(aviso)
        const validation = this.cardapio.some((value) => value.toLowerCase() === pedido.toLowerCase());

        if (validation === false) {
            pedido = ''
            aviso.innerText = 'sinto muito não temos esse item no cardápio'
        } else {
            aviso.innerText = 'Obrigado pelo feedback'
        }

        this.pagarConta(pedido)
        return pedido
    }

    pagarConta = (string) => {
        this.pagamento = null
        if (string === undefined || string === '') {
            this.pagamento = null
        } else {
            this.pagamento = 15.00
        }
    }

    darFeedBack = (critica) => {
        this._feedback = critica
        if (critica === undefined || typeof critica !== 'string' || critica === '') {
            this._feedback = 'Não há feedback'
        }
    }

    get feedback() {
        return this._feedback
    }

}

const valoressaborBraisleiro = ['Sabor Brasileiro', 'Bairro das Laranjeiras', '10 anos', 'Comida típica Nordestina', 'Segunda à Sabado', '12:00 até 21:00', ['Acarajé', 'Vatapá', 'Moqueca', 'Tapioca', 'Buxada de bodé']]
let saborBrasileiro = new Restaurant(...valoressaborBraisleiro,);

const valoresFastFood = ['Burguer Queen', 'centro da cidade', 'comidas rapidas', '20 anos', 'todos dias da semana', '9:00 até 22:00', ['Marmita de frango', 'hamburgue', 'porção de batata', 'espetinhos']]
let fastFood = new Restaurant(...valoresFastFood)


const dadosRestaurantes = [{ ...saborBrasileiro }, { ...fastFood }]
console.log(dadosRestaurantes);

btn.addEventListener('click', (event) => {
    event.preventDefault();

    fastFood.fazerPedido(inputPedido.value);
    fastFood.darFeedBack(inputCritica.value);
    console.log(fastFood)

    inputPedido.value = ''
    inputCritica.value = ''
})



