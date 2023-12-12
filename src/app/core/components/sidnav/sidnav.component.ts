import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidnav',
  standalone: true,
  imports: [],
  templateUrl: './sidnav.component.html',
  styleUrl: './sidnav.component.scss',
})
export class SidnavComponent {
  @Output() changed = new EventEmitter<number>();
}
