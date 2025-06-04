import { NgClass } from '@angular/common';
import { Component, Output, EventEmitter, ElementRef, ViewChild, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-modale',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modale.component.html',
  styleUrl: './modale.component.css'
})
export class ModaleComponent implements OnInit {
  @ViewChild('modal') modal!: ElementRef;
  @Output() closeModalEvent = new EventEmitter<void>();
  @ViewChild('box') box!: ElementRef;

  isVisible = false;
  formData = {
    name: '',
    email: '',
    message: ''
  };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    gsap.registerPlugin(ScrollTrigger);
  }

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

  async onSubmit() {
    try {
      // Ici, vous pouvez ajouter la logique pour envoyer le formulaire
      console.log('Formulaire soumis:', this.formData);
      // Réinitialiser le formulaire
      this.formData = {
        name: '',
        email: '',
        message: ''
      };
      // Fermer le modal
      this.closeModal();
    } catch (error) {
      console.error('Erreur lors de l\'envoi du formulaire:', error);
    }
  }

  async downloadCV() {
    try {
      const response = await this.http.get('/images/CV_2025-06-02_Gérard_Tukia.pdf', { responseType: 'blob' }).toPromise();
      if (response) {
        const blob = new Blob([response], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'CV_Gerardo_Tukia.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      }
    } catch (error) {
      console.error('Erreur lors du téléchargement:', error);
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
