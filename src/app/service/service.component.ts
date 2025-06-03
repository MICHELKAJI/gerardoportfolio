import { NgFor } from '@angular/common';
import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [ NgFor],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent  implements AfterViewInit {
  services = [
    {
      title: 'UI/UX',
      icon: 'assets/icons/uiux.svg',
      description: 'Création d’expériences utilisateurs intuitives et esthétiques.',
    },
    {
      title: 'Web Design',
      icon: 'assets/icons/webdesign.svg',
      description: 'Design responsive et adapté à tous les supports.',
    },
    {
      title: 'App Design',
      icon: 'assets/icons/appdesign.svg',
      description: 'Interfaces mobiles modernes et performantes.',
    },
    {
      title: 'Graphic Design',
      icon: 'assets/icons/graphicdesign.svg',
      description: 'Création visuelle, branding et supports de communication.',
    },
  ];

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    gsap.from(this.el.nativeElement.querySelectorAll('.service-card'), {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 1,
      ease: 'power2.out',
    });
  }
  
}
