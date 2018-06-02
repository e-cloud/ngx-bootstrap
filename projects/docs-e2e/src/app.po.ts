// tslint:disable-next-line:no-implicit-dependencies
import { browser, by, element } from 'protractor';

// tslint:disable:prefer-function-over-method
export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
