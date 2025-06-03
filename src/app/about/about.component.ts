import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  @ViewChild('skillsContainer') skillsContainer!: ElementRef;

  skills = [
    { name: 'UI/UX Design', level: 90 },
    { name: 'Angular', level: 85 },
    { name: 'React', level: 80 },
    { name: 'TailwindCSS', level: 95 },
    { name: 'Figma', level: 90 }
  ];

  ngOnInit() {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngAfterViewInit() {
    this.animateSkills();
  }

  private animateSkills() {
    // Animation pour l'image
    gsap.from('.rounded-full', {
      scrollTrigger: {
        trigger: '#about',
        start: 'top 80%',
      },
      scale: 0.8,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });

    // Animation pour le texte
    gsap.from('.text-gray-800, .text-gray-600', {
      scrollTrigger: {
        trigger: '#about',
        start: 'top 80%',
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out'
    });

    // Animation pour les barres de compétences
    const skillBars = document.querySelectorAll('.bg-orange-500');
    skillBars.forEach((bar, index) => {
      const width = bar.getAttribute('style')?.match(/\d+/)?.[0] || '0';
      gsap.set(bar, { width: 0 });
      
      gsap.to(bar, {
        scrollTrigger: {
          trigger: '#about',
          start: 'top 70%',
        },
        width: `${width}%`,
        duration: 1.5,
        delay: index * 0.2,
        ease: 'power2.out'
      });
    });
  }
}
