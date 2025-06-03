import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';

@Component({
  selector: 'app-herosection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './herosection.component.html',
  styleUrl: './herosection.component.css'
})
export class HerosectionComponent implements OnInit {
  @ViewChild('heroContent') heroContent!: ElementRef;

  ngOnInit() {
    // Animation initiale
    setTimeout(() => {
      this.animateHeroContent();
    }, 100);
  }

  private animateHeroContent() {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from("p.text-3xl", {
      y: 50,
      opacity: 0,
      duration: 0.8
    })
    .from("h2.text-amber-300", {
      y: 30,
      opacity: 0,
      duration: 0.6
    }, "-=0.4")
    .from("h2.text-6xl", {
      y: 40,
      opacity: 0,
      duration: 0.8
    }, "-=0.3")
    .from("h2.text-3xl.mb-5", {
      y: 30,
      opacity: 0,
      duration: 0.6
    }, "-=0.3")
    .from("p.mb-10", {
      y: 30,
      opacity: 0,
      duration: 0.6
    }, "-=0.4")
    .from("button", {
      y: 20,
      opacity: 0,
      duration: 0.5,
      clearProps: "all"
    }, "-=0.3");
  }
}
