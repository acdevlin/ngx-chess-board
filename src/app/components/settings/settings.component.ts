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
    lightTileColorSubscription: Subscription;

    darkTileColor: string;
    darkTileColorSubscription: Subscription;

    constructor(private data: DataService) { }

    ngOnDestroy(): void {
        this.lightTileColorSubscription.unsubscribe();
        this.darkTileColorSubscription.unsubscribe();
    }

    ngOnInit(): void {
        this.lightTileColorSubscription = this.data.currentLightTileColor.subscribe(lightTileColor => this.lightTileColor = lightTileColor);
        this.darkTileColorSubscription = this.data.currentDarkTileColor.subscribe(darkTileColor => this.darkTileColor = darkTileColor);

    }

    updateLightTileColor(color: string) {
        this.lightTileColor = color;
        this.data.updateLightTileColor(this.lightTileColor);
    }

    updateDarkTileColor(color: string) {
        this.darkTileColor = color;
        this.data.updateDarkTileColor(this.darkTileColor);
    }
}
