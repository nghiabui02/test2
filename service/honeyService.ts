import {princess} from "../unility/honey";
export class princessService{
    list: princess[] = [];
    add(idBae: princess) {
        this.list.push(idBae)
    }
    findPrincess(nameBae: string) {
        console.log('Cong chua co ten can tim la: ');
        let princessFind = []
        this.list.map(item => {
            if (item.nameBae === nameBae) {
                princessFind.push(item)
            }
        })
        if (princessFind.length === 0) {
            console.log('Khong co ai ten ' + nameBae);
        } else {
            console.table(princessFind)
        }
    }
    edit(idPrincess:string, editPrincess: princess){
        for (let i = 0; i < this.list.length; i++) {
            if(this.list[i].idBae==idPrincess){
                this.list[i]= editPrincess
            }
        }
    }
    delete(idPrincess: string){
        this.list = this.list.filter(item => item.idBae !==idPrincess);
    }
    show(){
        console.table(this.list)
    }
}