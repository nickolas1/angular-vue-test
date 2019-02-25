import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'fake-legacy-angular-app';
  messageForVue = undefined;
  vueCount = undefined;
  onCountChanged(event) {
    this.vueCount = event.detail[0]
  }
}
