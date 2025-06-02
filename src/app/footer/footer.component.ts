import { Component } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();

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
