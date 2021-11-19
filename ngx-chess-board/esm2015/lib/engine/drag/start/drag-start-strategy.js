import { AnimationDragStartProcessor } from './animation-drag-start-processor';
export class DragStartStrategy {
    constructor() {
        this.dragStartProcessor = new AnimationDragStartProcessor();
    }
    process(event) {
        this.dragStartProcessor.dragStarted(event);
    }
    setDragStartProcessor(processor) {
        this.dragStartProcessor = processor;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy1zdGFydC1zdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9Lb21wdXRlci9EZXNrdG9wL05vd3kgZm9sZGVyL2NoZXNzLWJvYXJkL3Byb2plY3RzL25neC1jaGVzcy1ib2FyZC9zcmMvIiwic291cmNlcyI6WyJsaWIvZW5naW5lL2RyYWcvc3RhcnQvZHJhZy1zdGFydC1zdHJhdGVneS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUkvRSxNQUFNLE9BQU8saUJBQWlCO0lBSTFCO1FBQ0ksSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksMkJBQTJCLEVBQUUsQ0FBQztJQUNoRSxDQUFDO0lBRU0sT0FBTyxDQUFDLEtBQW1CO1FBQzlCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELHFCQUFxQixDQUFDLFNBQTZCO1FBQy9DLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxTQUFTLENBQUM7SUFDeEMsQ0FBQztDQUVKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2RrRHJhZ1N0YXJ0IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XHJcbmltcG9ydCB7IEFuaW1hdGlvbkRyYWdTdGFydFByb2Nlc3NvciB9IGZyb20gJy4vYW5pbWF0aW9uLWRyYWctc3RhcnQtcHJvY2Vzc29yJztcclxuaW1wb3J0IHsgRGVmYXVsdERyYWdTdGFydFByb2Nlc3NvciB9IGZyb20gJy4vZGVmYXVsdC1kcmFnLXN0YXJ0LXByb2Nlc3Nvcic7XHJcbmltcG9ydCB7IERyYWdTdGFydFByb2Nlc3NvciB9IGZyb20gJy4vZHJhZy1zdGFydC1wcm9jZXNzb3InO1xyXG5cclxuZXhwb3J0IGNsYXNzIERyYWdTdGFydFN0cmF0ZWd5IHtcclxuXHJcbiAgICBwcml2YXRlIGRyYWdTdGFydFByb2Nlc3NvcjogRHJhZ1N0YXJ0UHJvY2Vzc29yO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZHJhZ1N0YXJ0UHJvY2Vzc29yID0gbmV3IEFuaW1hdGlvbkRyYWdTdGFydFByb2Nlc3NvcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwcm9jZXNzKGV2ZW50OiBDZGtEcmFnU3RhcnQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRyYWdTdGFydFByb2Nlc3Nvci5kcmFnU3RhcnRlZChldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RHJhZ1N0YXJ0UHJvY2Vzc29yKHByb2Nlc3NvcjogRHJhZ1N0YXJ0UHJvY2Vzc29yKSB7XHJcbiAgICAgICAgdGhpcy5kcmFnU3RhcnRQcm9jZXNzb3IgPSBwcm9jZXNzb3I7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==