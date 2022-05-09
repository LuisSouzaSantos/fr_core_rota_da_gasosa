export class BaseAdministratorItem {

    private id: number;
    private name: String;
    private visible: boolean;

    constructor(id: number, name: String, visible: boolean){
        this.id = id;
        this.name = name;
        this.visible = visible;
    }

    getId() {
        return this.id;
    }

    getName(){
        return this.name;
    }

    getVisible(){
        return this.visible;
    }

}