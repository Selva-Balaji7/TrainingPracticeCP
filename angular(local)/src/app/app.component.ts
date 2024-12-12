import { RouterOutlet } from '@angular/router';
import { ToggleImageComponent } from './toggleimage/toggleimage.component';
import { Component } from '@angular/core';
import { ChangeimageComponent } from './changeimage/changeimage.component';
import { VehicleComponent } from './vehicle/vehicle.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ToggleImageComponent,ChangeimageComponent,VehicleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngproj';
}
