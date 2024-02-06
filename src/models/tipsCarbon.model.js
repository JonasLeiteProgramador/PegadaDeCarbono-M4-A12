import { v4 as uuidv4 } from 'uuid';
class tipsCarbon{
    constructor(description,author){
        this.id = uuidv4();
        this.description = description 
        this.autor = author
    }
}

export { tipsCarbon }