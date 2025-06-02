import { Component, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements AfterViewInit {
  form = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  ngAfterViewInit(): void {
    gsap.from('form', {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: 'form',
        start: 'top 80%',
      }
    });
  }

  onSubmit() {
    // Ajoute ici l'envoi avec EmailJS, service backend ou autre
    console.log('Formulaire envoyé :', this.form);
  }

}
