import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ZoneVizComponent } from './zone-viz/zone-viz.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, ZoneVizComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'comfen-zone';
}
