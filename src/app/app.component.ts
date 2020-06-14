import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular9-i18n';
  clickCount = 0;
  textInTsFile = $localize`Hi!`;
  currentDate = new Date();

  increase() {
    this.clickCount ++;
  }
}
