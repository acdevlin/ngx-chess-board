export class HistoryMove {
    constructor(move, piece, color, captured) {
        this.move = move;
        this.piece = piece;
        this.color = color;
        this.x = captured;
    }
    setGameStates(check, stalemate, mate) {
        this.check = check;
        this.stalemate = stalemate;
        this.mate = mate;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlzdG9yeS1tb3ZlLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL0tvbXB1dGVyL0Rlc2t0b3AvTm93eSBmb2xkZXIvY2hlc3MtYm9hcmQvcHJvamVjdHMvbmd4LWNoZXNzLWJvYXJkL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9oaXN0b3J5LW1vdmUtcHJvdmlkZXIvaGlzdG9yeS1tb3ZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sT0FBTyxXQUFXO0lBU3BCLFlBQVksSUFBWSxFQUFFLEtBQWEsRUFBRSxLQUFhLEVBQUUsUUFBaUI7UUFDckUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUM7SUFDdEIsQ0FBQztJQUVELGFBQWEsQ0FBQyxLQUFjLEVBQUUsU0FBa0IsRUFBRSxJQUFhO1FBQzNELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7Q0FFSiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBIaXN0b3J5TW92ZSB7XG4gICAgbW92ZTogc3RyaW5nO1xuICAgIHBpZWNlOiBzdHJpbmc7XG4gICAgY29sb3I6IHN0cmluZztcbiAgICB4OiBib29sZWFuO1xuICAgIGNoZWNrOiBib29sZWFuO1xuICAgIHN0YWxlbWF0ZTogYm9vbGVhbjtcbiAgICBtYXRlOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IobW92ZTogc3RyaW5nLCBwaWVjZTogc3RyaW5nLCBjb2xvcjogc3RyaW5nLCBjYXB0dXJlZDogYm9vbGVhbikge1xuICAgICAgICB0aGlzLm1vdmUgPSBtb3ZlO1xuICAgICAgICB0aGlzLnBpZWNlID0gcGllY2U7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy54ID0gY2FwdHVyZWQ7XG4gICAgfVxuXG4gICAgc2V0R2FtZVN0YXRlcyhjaGVjazogYm9vbGVhbiwgc3RhbGVtYXRlOiBib29sZWFuLCBtYXRlOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2hlY2sgPSBjaGVjaztcbiAgICAgICAgdGhpcy5zdGFsZW1hdGUgPSBzdGFsZW1hdGU7XG4gICAgICAgIHRoaXMubWF0ZSA9IG1hdGU7XG4gICAgfVxuXG59XG4iXX0=