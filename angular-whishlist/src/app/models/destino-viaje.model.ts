import * as uuid from 'uuid';

export class DestinoViaje{
    id: string = uuid.v4();
    private selected: boolean = false;
    public servicios: string[];

    constructor(public nombre: string, public url: string, public votes: number = 0){
        this.servicios = ['desayuno', 'sauna', 'spa'];
    }

    isSelected(): boolean {
        return this.selected;
    }

    setSelected(selected: boolean) {
        this.selected = selected;
    }

    voteUp() {
        this.votes++;
    }

    voteDown() {
        this.votes--;
    }
}