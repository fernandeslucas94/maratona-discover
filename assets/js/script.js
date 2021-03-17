/* == Show and Hide Modal == */
const modal = {
    open() {
        document.querySelector('.modal-overlay').classList.add('active')
    },

    close() {
        document.querySelector('.modal-overlay').classList.remove('active')
    },
}

// == Transações == 
const transactions = [
    {
    id: 1,
    description: 'Luz',
    amount: -50000,
    date: '23/01/2021'
    },

    {
    id: 2,
    description: 'Website',
    amount: 500000,
    date: '23/01/2021'
    },

    {
    id: 3,
    description: 'Internet',
    amount: -20000,
    date: '23/01/2021'
    },
]


/* == In and Out values == */
const Transaction = {
    incomes() {
        // somar as entradas
    },
    expenses() {
        // somar as saídas
    },
    total() {
        // subtrair as saídas das entradas
    },
}

// Captar itens do objeto Transactions e inserir no HTML
