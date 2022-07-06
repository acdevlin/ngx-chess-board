import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { DataService } from "./data.service";
import {
    MoveChange,
    NgxChessBoardComponent,
    PieceIconInput
} from 'ngx-chess-board';
import {
    ColorInput,
    PieceTypeInput
} from 'ngx-chess-board/src/lib/utils/inputs/piece-type-input';
import { FenComponent } from './components/fen/fen.component';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
    title = 'ngx-chess-demo';
    lightTileColor: string;

    subscription: Subscription;

    constructor(private data: DataService) { }

    ngOnInit() {
        this.subscription = this.data.currentLightTileColor.subscribe(lightTileColor => this.lightTileColor = lightTileColor)
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }


}
