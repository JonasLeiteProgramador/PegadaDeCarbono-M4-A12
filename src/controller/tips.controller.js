import { tipsCarbon } from "../models/tipsCarbon.model.js";


let  allTipsCarbon = [
    { description: "Opte por meios de transporte mais sustentáveis, como caminhar, andar de bicicleta, usar transporte público ou veículos elétricos.", author: "Alice" },
    { description: "Adote práticas de economia de energia em casa, como usar lâmpadas LED, desligar aparelhos eletrônicos quando não estiverem em uso e escolher eletrodomésticos energeticamente eficientes.", author: "Bob" },
    { description: "Reduza o consumo de carne, especialmente de carne vermelha, e opte por alimentos locais e sazonais para diminuir a pegada de carbono associada à produção de carne e ao transporte de alimentos.", author: "Charlie" },
    { description: "Faça a separação e reciclagem adequada de resíduos. Além disso, composte resíduos orgânicos para reduzir a quantidade de resíduos enviados para aterros sanitários.", author: "Diana" },
    { description: "Adote práticas para economizar água, como consertar vazamentos, usar dispositivos economizadores e coletar água da chuva para uso em atividades domésticas.", author: "Eva" },
    { description: "Prefira produtos feitos com materiais sustentáveis e ecologicamente corretos, incluindo roupas, eletrônicos, móveis e outros itens do dia a dia.", author: "Frank" },
    { description: "Participe de projetos de reflorestamento ou plante árvores em sua comunidade para absorver dióxido de carbono e melhorar a qualidade do ar.", author: "Grace" },
    { description: "Reduza a frequência de viagens de avião sempre que possível, já que as viagens aéreas contribuem significativamente para as emissões de carbono.", author: "Henry" },
    { description: "Eduque-se e conscientize os outros sobre a importância de reduzir a pegada de carbono, pois pequenas ações coletivas podem ter um grande impacto.", author: "Ivy" },
    { description: "Opte por fornecedores de energia que utilizem fontes renováveis, como solar, eólica ou hidrelétrica, para incentivar o desenvolvimento de formas mais limpas de energia.", author: "Jack" }
  ];
  


  let getAllTips = () =>{
    return allTipsCarbon
  }




  let createTip = (description,author) =>{
    let newTip = new tipsCarbon(description,author)
    allTipsCarbon.push(newTip)
    return newTip
  }

  export {getAllTips,createTip }