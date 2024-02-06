import { v4 as uuidv4 } from 'uuid';

class actionCarbon {
    constructor(action,category,volunteerActionName){
        this.id = uuidv4()
        this.action = action;
        this.category = category; 
        this.volunteerActionName = volunteerActionName

    }
}

export { actionCarbon}