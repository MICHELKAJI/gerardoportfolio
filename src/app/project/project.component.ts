import { NgFor } from '@angular/common';
import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [ NgFor],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent implements AfterViewInit {
  categories = ['All', 'UI UX', 'Website Design', 'App Design', 'Graphic Design'];
  activeCategory = 'All';

  projects = [
    {
      title: 'AirCalling Landing Page Design',
      category: 'UI UX',
      image: '/images/kivuPNG.PNG',
    },
    {
      title: 'Crypto App UI',
      category: 'App Design',
      image: '/images/lacasa.PNG',
    },
    {
      title: 'Restaurant Website',
      category: 'Website Design',
      image: '/images/Sparkcode.PNG',
    },
    {
      title: 'Offre d\'emploi',
      category: 'Graphic Design',
      image: '/images/dumiya recrute.jpg',
    },
    {
      title: 'Télephone',
      category: 'Graphic Design',
      image: '/images/SPARK 30C.jpg',
    },
    // Ajoute autant de projets que tu veux...
  ];

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    gsap.from(this.el.nativeElement.querySelectorAll('.project-card'), {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.2,
      ease: 'power2.out',
    });
  }

  get filteredProjects() {
    return this.activeCategory === 'All'
      ? this.projects
      : this.projects.filter(p => p.category === this.activeCategory);
  }

  setCategory(cat: string) {
    this.activeCategory = cat;

    // Relancer les animations GSAP
    setTimeout(() => {
      gsap.from(this.el.nativeElement.querySelectorAll('.project-card'), {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
      });
    });
  }

}
