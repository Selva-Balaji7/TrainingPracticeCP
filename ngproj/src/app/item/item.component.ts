import { Component } from '@angular/core';
import { ItemsservicesService } from '../shared/services/itemsservices.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item',
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  itemObj =new ItemsservicesService();
  

}
