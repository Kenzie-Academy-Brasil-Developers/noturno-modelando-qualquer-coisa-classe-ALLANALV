const containerComent = document.querySelector('.container_Comentario')


const btn = document.getElementById('button');
const btnrest2 = document.getElementById('button_rest2');

const aviso = document.createElement('p');
containerComent.appendChild(aviso);
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
        const validation = this.cardapio.some((value) => value.toLowerCase() === pedido.toLowerCase());

        if (validation === false) {
            pedido = ''
            aviso.innerText = 'sinto muito não temos esse item no cardápio!'
        } else {
            aviso.innerText = 'Obrigado pela confiança e pelo feedback!'
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

const valoresFastFood = ['Burguer Queen', 'centro da cidade', 'comidas rapidas', '20 anos', 'todos dias da semana', '9:00 até 22:00', ['Marmita de frango', 'hamburguer', 'porção de batata', 'espetinhos']]
let fastFood = new Restaurant(...valoresFastFood)


const dadosRestaurantes = [{ ...saborBrasileiro }, { ...fastFood }]

btn.addEventListener('click', (event) => {
    event.preventDefault();
    const inputPedido = document.getElementById('pedidoCliente');
    const inputCritica = document.getElementById('criticaCliente');

    saborBrasileiro.fazerPedido(inputPedido.value);
    saborBrasileiro.darFeedBack(inputCritica.value)
    console.log(saborBrasileiro)

    inputPedido.value = ''
    inputCritica.value = ''
});

btnrest2.addEventListener('click', (event) => {
    event.preventDefault();

    const inputPedidoFastFood = document.getElementById('pFastFood');
    const inputCriticaFastFood = document.getElementById('cFastFood');
    console.log(inputPedidoFastFood)
    console.log(inputCriticaFastFood)

    fastFood.fazerPedido(inputPedidoFastFood.value);
    fastFood.darFeedBack(inputCriticaFastFood.value);
    console.log(fastFood)

    inputPedidoFastFood.value = ''
    inputCriticaFastFood.value = ''
});