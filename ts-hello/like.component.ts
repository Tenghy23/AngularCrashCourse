export class LikeComponent {
    constructor(private _likesCount: number, private _isSelected: boolean){
    }

    onClick() {
        this.likesCount = (this.isSelected) ? -1 : 1;
        this.isSelected = !this.isSelected;
    }

    get likesCount() {
        return this._likesCount;
    }

    get isSelected() {
        return this._isSelected;
    }
}