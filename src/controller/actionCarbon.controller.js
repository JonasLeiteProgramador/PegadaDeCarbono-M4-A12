let sustainableActions = [
    { action: "Utilizar transporte público, bicicleta ou caminhar em vez de usar o carro", category: "Transporte", volunteerActionName: "Maria" },
    { action: "Reciclar plásticos, metais e papel", category: "Reciclagem", volunteerActionName: "João" },
    { action: "Reduzir o consumo de carne e adotar uma dieta mais baseada em vegetais", category: "Alimentação", volunteerActionName: "Ana" },
    { action: "Desligar luzes e aparelhos eletrônicos quando não estiverem em uso", category: "Energia", volunteerActionName: "Carlos" },
    { action: "Plantar árvores ou participar de projetos de reflorestamento", category: "Reflorestamento", volunteerActionName: "Julia" },
    { action: "Usar lâmpadas LED de baixo consumo energético", category: "Energia", volunteerActionName: "Miguel" },
    { action: "Reaproveitar embalagens e materiais", category: "Reciclagem", volunteerActionName: "Larissa" },
    { action: "Adotar práticas de compostagem para resíduos orgânicos", category: "Reciclagem", volunteerActionName: "Pedro" },
    { action: "Participar de limpezas comunitárias em áreas naturais", category: "Preservação", volunteerActionName: "Isabela" },
    { action: "Investir em produtos duráveis e de alta qualidade", category: "Consumo Consciente", volunteerActionName: "Gabriel" },
    { action: "Economizar água em casa fechando torneiras enquanto não estiverem em uso", category: "Água", volunteerActionName: "Amanda" },
    { action: "Optar por produtos locais e sazonais", category: "Consumo Consciente", volunteerActionName: "Lucas" },
    { action: "Desenvolver um jardim ou horta em casa", category: "Agricultura Sustentável", volunteerActionName: "Eduarda" },
    { action: "Utilizar sacolas reutilizáveis em vez de sacolas plásticas descartáveis", category: "Consumo Consciente", volunteerActionName: "Rafaela" },
    { action: "Participar de programas de reciclagem eletrônica", category: "Reciclagem", volunteerActionName: "Matheus" },
    { action: "Apoiar e comprar de empresas sustentáveis e certificadas", category: "Consumo Consciente", volunteerActionName: "Luiz" },
    { action: "Reduzir o desperdício de alimentos através do planejamento de refeições", category: "Alimentação", volunteerActionName: "Fernanda" },
    { action: "Usar energia solar ou eólica em casa, se possível", category: "Energia", volunteerActionName: "André" },
    { action: "Promover a conscientização sobre práticas sustentáveis nas redes sociais", category: "Educação Ambiental", volunteerActionName: "Camila" },
    { action: "Participar de eventos com foco em sustentabilidade na comunidade", category: "Engajamento Comunitário", volunteerActionName: "Vinícius" },
]
import { actionCarbon } from "../models/actionCarbon.model.js"

let allActions = () => {
    return sustainableActions
}


let createAction = (action, category, volunteerActionName) => {
    let newAction = new actionCarbon(action, category, volunteerActionName)
    sustainableActions.push(newAction)
    return newAction
}

let updateAction = (id,volunteerActionName) =>{
    const action = sustainableActions.findIndex(data => data.id === id)
    if(action){  
     const actionUpdate = sustainableActions[action].volunteerActionName = volunteerActionName 
     return actionUpdate

    }else{
        return 'Ação não encontrada!'
    }


}


export {allActions, createAction,updateAction}
