import { Component, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `<router-outlet />`
})
export class App {
  title: WritableSignal<string> = signal('Slideshow-in-Angular');
}