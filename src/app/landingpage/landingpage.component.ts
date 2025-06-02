import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HerosectionComponent } from '../herosection/herosection.component';
import { AboutComponent } from '../about/about.component';
import { ServiceComponent } from '../service/service.component';
import { ProjectComponent } from '../project/project.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [HeaderComponent, HerosectionComponent, AboutComponent, ServiceComponent, ProjectComponent, ContactComponent, FooterComponent],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingpageComponent {

}
