import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  imports: [],
  templateUrl: './welcome.html',
  styleUrl: './welcome.css',
})
export class Welcome {
  title : string = 'Welcome to Angular Learnings';
  subtitle : string = 'Learning Angular to strengthen my frontend skills.';
  description : string = 'A collection of insights, tips, and practical experiences gained while working with Angular, a popular front-end framework. This resource covers essential concepts like components, modules, services, routing, and data binding, along with best practices for building scalable and maintainable web applications. Ideal for beginners and intermediate developers looking to strengthen their Angular skills.';
}
