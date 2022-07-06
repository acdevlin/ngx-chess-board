import { ChangeDetectionStrategy, Component, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';
import { DataService } from "../../data.service";
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent implements OnInit, OnDestroy {

    lightTileColor: string;
    subscription: Subscription;

    constructor(private data: DataService) { }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    ngOnInit(): void {
        this.subscription = this.data.currentLightTileColor.subscribe(lightTileColor => this.lightTileColor = lightTileColor);
    }

    updateLightTileColor(color: string) {
        this.lightTileColor = color;
        this.data.updateLightTileColor(this.lightTileColor);
    }
}
