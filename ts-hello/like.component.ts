export class LikeComponent {
    constructor(public likesCount: number, public isSelected: boolean){
    }

    onClick() {
        this.likesCount = (this.isSelected) ? -1 : 1;
        this.isSelected = !this.isSelected;
    }

    // get likesCount() {
    //     return this.likesCount;
    // }

    // get isSelected() {
    //     return this.isSelected;
    // }
}