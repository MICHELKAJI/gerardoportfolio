import { NgClass } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ModaleComponent } from '../modale/modale.component';


gsap.registerPlugin(ScrollToPlugin);

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ NgClass, ModaleComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isScrolled= false;

  @HostListener('window:scroll', [])
  onWindowScrolled(){
    this.isScrolled = window.scrollY >50;
  }

  scrollTo(targetId: string) {
    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: `#${targetId}`,
        offsetY: 80 // ajuste si t'as une navbar
      },
      ease: 'power2.inOut'
    });
  }

}
