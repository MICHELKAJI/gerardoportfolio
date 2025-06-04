import { Component, Output, EventEmitter, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import gsap from 'gsap';




@Component({
  selector: 'app-contactmodale',
  standalone: true,
  imports: [FormsModule, NgClass],
  templateUrl: './contactmodale.component.html',
  styleUrl: './contactmodale.component.css'
})
export class ContactmodaleComponent {
  @ViewChild('modal') modal!: ElementRef;
  @Output() closeModalEvent = new EventEmitter<void>();
  @ViewChild('box') box!: ElementRef;

  isVisible = false;
  form = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  showModal() {
    this.isVisible = true;
    if (this.modal?.nativeElement && this.box?.nativeElement) {
      // Animation de l'overlay
      gsap.fromTo(
        this.modal.nativeElement,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" }
      );

      // Animation de la boîte modale
      gsap.fromTo(
        this.box.nativeElement,
        { 
          opacity: 0,
          scale: 0.8,
          y: 20
        },
        { 
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.4,
          ease: "back.out(1.7)"
        }
      );
    }
  }
  
  closeModal() {
    if (this.modal?.nativeElement && this.box?.nativeElement) {
      // Animation de fermeture de la boîte modale
      gsap.to(this.box.nativeElement, {
        opacity: 0,
        scale: 0.8,
        y: 20,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          // Animation de l'overlay
          gsap.to(this.modal.nativeElement, {
            opacity: 0,
            duration: 0.2,
            ease: "power2.in",
            onComplete: () => {
              this.isVisible = false;
              this.closeModalEvent.emit();
            }
          });
        }
      });
    } else {
      this.isVisible = false;
      this.closeModalEvent.emit();
    }
  }

  async onSubmit() {
    try {
      // Ici, vous pouvez ajouter la logique pour envoyer le formulaire
      console.log('Formulaire soumis:', this.form);
      // Réinitialiser le formulaire
      this.form = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
      // Fermer le modal
      this.closeModal();
    } catch (error) {
      console.error('Erreur lors de l\'envoi du formulaire:', error);
    }
  }


}
