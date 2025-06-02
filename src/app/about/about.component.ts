import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ NgFor],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  skills = [
    { name: 'UX', level: 90 },
    { name: 'Website Design', level: 80 },
    { name: 'App Design', level: 75 },
    { name: 'Graphic Design', level: 85 },
  ];
}
