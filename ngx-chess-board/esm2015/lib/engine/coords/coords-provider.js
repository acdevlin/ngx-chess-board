export class CoordsProvider {
    constructor() {
        this.defaultXCoords = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        this.defaultYCoords = [8, 7, 6, 5, 4, 3, 2, 1];
        this.currentXCoords = [...this.defaultXCoords];
        this.currentYCoords = [...this.defaultYCoords];
    }
    get xCoords() {
        return this.currentXCoords;
    }
    get yCoords() {
        return this.currentYCoords;
    }
    reverse() {
        this.currentXCoords = this.currentXCoords.reverse();
        this.currentYCoords = this.currentYCoords.reverse();
    }
    reset() {
        this.init();
    }
    init() {
        this.currentXCoords = [...this.defaultXCoords];
        this.currentYCoords = [...this.defaultYCoords];
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29vcmRzLXByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL0tvbXB1dGVyL0Rlc2t0b3AvTm93eSBmb2xkZXIvY2hlc3MtYm9hcmQvcHJvamVjdHMvbmd4LWNoZXNzLWJvYXJkL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9lbmdpbmUvY29vcmRzL2Nvb3Jkcy1wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE9BQU8sY0FBYztJQUEzQjtRQUNxQixtQkFBYyxHQUFhLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRXBFLG1CQUFjLEdBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFN0QsbUJBQWMsR0FBYSxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3BELG1CQUFjLEdBQWEsQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQXVCaEUsQ0FBQztJQXJCRyxJQUFJLE9BQU87UUFDUCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDL0IsQ0FBQztJQUVELElBQUksT0FBTztRQUNQLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUMvQixDQUFDO0lBRUQsT0FBTztRQUNILElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNwRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDeEQsQ0FBQztJQUVELEtBQUs7UUFDRCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVPLElBQUk7UUFDUixJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDb29yZHNQcm92aWRlciB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGRlZmF1bHRYQ29vcmRzOiBzdHJpbmdbXSA9IFsnYScsICdiJywgJ2MnLCAnZCcsICdlJywgJ2YnLCAnZycsICdoJ107XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBkZWZhdWx0WUNvb3JkczogbnVtYmVyW10gPSBbOCwgNywgNiwgNSwgNCwgMywgMiwgMV07XHJcblxyXG4gICAgcHJpdmF0ZSBjdXJyZW50WENvb3Jkczogc3RyaW5nW10gPSBbLi4udGhpcy5kZWZhdWx0WENvb3Jkc107XHJcbiAgICBwcml2YXRlIGN1cnJlbnRZQ29vcmRzOiBudW1iZXJbXSA9IFsuLi50aGlzLmRlZmF1bHRZQ29vcmRzXTtcclxuXHJcbiAgICBnZXQgeENvb3JkcygpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFhDb29yZHM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHlDb29yZHMoKTogbnVtYmVyW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRZQ29vcmRzO1xyXG4gICAgfVxyXG5cclxuICAgIHJldmVyc2UoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50WENvb3JkcyA9IHRoaXMuY3VycmVudFhDb29yZHMucmV2ZXJzZSgpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFlDb29yZHMgPSB0aGlzLmN1cnJlbnRZQ29vcmRzLnJldmVyc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNldCgpIHtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50WENvb3JkcyA9IFsuLi50aGlzLmRlZmF1bHRYQ29vcmRzXTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRZQ29vcmRzID0gWy4uLnRoaXMuZGVmYXVsdFlDb29yZHNdO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==