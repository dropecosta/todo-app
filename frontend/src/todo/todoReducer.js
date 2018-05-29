
const INITIAL_STATE = { 
    description: '', 
    list: [{
        description: 'Ler livro',
        list: [
            {
            _id: 1,
            description: 'Pagar fatura cartão',
            done: true
        }, {
            _id: 2,
            description: 'Reunião com a equipe',
            done: false
        }, {
            _id: 3,
            description: 'consulta médica',
            done: false
        }]
    }] 
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
        case 'TODO_SEARCHED':
            return { ...state, list: action.payload.data }
        default:
            return state
    }
}