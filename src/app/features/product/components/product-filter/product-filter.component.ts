import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';

import { ThemePalette } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector: 'app-product-filter',
  standalone: true,
  imports: [
    FormsModule,
    MatIconModule,
    MatSliderModule,
    MatButtonModule,
    MatDividerModule,
    MatSidenavModule,
    MatCheckboxModule,
  ],
  templateUrl: './product-filter.component.html',
  styleUrl: './product-filter.component.scss',
})
export class ProductFilterComponent {
  allComplete: boolean = false;

  @Input() filterIsOpened!: boolean;

  @Output() filterIsOpenedChange = new EventEmitter<boolean>();

  // add
  task: Task = {
    name: 'Indeterminate',
    completed: false,
    color: 'primary',
    subtasks: [
      { name: 'Alptis', completed: false, color: 'primary' },
      { name: 'April', completed: false, color: 'accent' },
      { name: 'Axa', completed: false, color: 'warn' },
      { name: 'CNP Assurances', completed: false, color: 'primary' },
      { name: 'SPVE Assurances', completed: false, color: 'primary' },
    ],
  };

  constructor() {}

  onChange() {
    const changed = !this.filterIsOpened;
    this.filterIsOpenedChange.emit(changed);
  }

  updateAllComplete() {
    this.allComplete =
      this.task.subtasks != null &&
      this.task.subtasks.every((t) => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return (
      this.task.subtasks.filter((t) => t.completed).length > 0 &&
      !this.allComplete
    );
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach((t) => (t.completed = completed));
  }
}
