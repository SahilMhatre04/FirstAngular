import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  titles = ['mobiles','laptops','computers']
  @Input() number:any 
  @Input() brandname:any
}
