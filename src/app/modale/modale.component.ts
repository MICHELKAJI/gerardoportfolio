import { NgClass } from '@angular/common';
import { Component, Output, EventEmitter, ElementRef, ViewChild,  } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-modale',
  standalone: true,
  imports: [NgClass],
  templateUrl: './modale.component.html',
  styleUrl: './modale.component.css'
})
export class ModaleComponent {
  @ViewChild('modal') modal!: ElementRef;
  @Output() closeModalEvent = new EventEmitter<void>();
  @ViewChild('box') box!:ElementRef

  isVisible = false;

  showModal() {
    this.isVisible = true;
    if (this.modal?.nativeElement) {
      gsap.fromTo(
        this.modal.nativeElement,
        { opacity: 0, x: "-100%" }, // Commence à gauche (hors écran)
        { opacity: 1, x: "0%", duration: 0.5, ease: "power3.out" } // Arrive au centre
      );
    }
  }
  
  closeModal() {
    if (this.modal?.nativeElement) {
      gsap.to(this.modal.nativeElement, {
        opacity: 0,
        x: "-100%", // Glisse vers la gauche
        duration: 0.4,
        ease: "power3.in",
        onComplete: () => {
          this.isVisible = false;
          this.closeModalEvent.emit(); // Notifie le parent
        }
      });
    } else {
      this.isVisible = false;
      this.closeModalEvent.emit();
    }
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
