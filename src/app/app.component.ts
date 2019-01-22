import { Component } from '@angular/core';
import {HotkeysService, Hotkey} from 'angular2-hotkeys';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hotkeys';
  constructor(private _hotkeysService: HotkeysService) {
    this._hotkeysService.add(new Hotkey('meta+shift+g', (event: KeyboardEvent): boolean => {
        console.log('Typed hotkey');
        return false; // Prevent bubbling
    }));
    this._hotkeysService.add(new Hotkey(['meta+shift+g', 'alt+shift+s'], (event: KeyboardEvent, combo: string): ExtendedKeyboardEvent => {
      console.log('Combo: ' + combo); // 'Combo: meta+shift+g' or 'Combo: alt+shift+s'
      const e: ExtendedKeyboardEvent = event;
      e.returnValue = false; // Prevent bubbling
      return e;
    }));
    this._hotkeysService.add(new Hotkey('g g', (event: KeyboardEvent): boolean => {
      alert('g g');
      return false;
    }));
    this._hotkeysService.add(new Hotkey('?', (event: KeyboardEvent): boolean => {
      alert('?');
      return false;
    }));
    this._hotkeysService.add(new Hotkey('alt+d', (event: KeyboardEvent): boolean => {
      alert('alt+d');
      return false;
    }));
    this._hotkeysService.add(new Hotkey('ctrl+d', (event: KeyboardEvent): boolean => {
      alert('ctrl+d');
      return false;
    }));
    this._hotkeysService.add(new Hotkey('alt+y', (event: KeyboardEvent): boolean => {
      window.location.href = 'http://www.yenmin.com/';
      return false;
    }));
    this._hotkeysService.add(new Hotkey('alt+ctrl+s', (event: KeyboardEvent): boolean => {
      this.btn_click();
      return false;
    }));
    this._hotkeysService.add(new Hotkey('alt+g', (event: KeyboardEvent): boolean => {
      window.location.href  = 'https://www.google.co.in/';
      return false;
    }));
    this._hotkeysService.add(new Hotkey('f5', (event: KeyboardEvent): boolean => {
      alert('Page refresh');
      return false;
    }));
    this._hotkeysService.add(new Hotkey('shift+1', (event: KeyboardEvent): boolean => {
      document.getElementById('tab1').click();
      return false;
    }));
    this._hotkeysService.add(new Hotkey('shift+2', (event: KeyboardEvent): boolean => {
      document.getElementById('tab2').click();
      return false;
    }));
    this._hotkeysService.add(new Hotkey('shift+3', (event: KeyboardEvent): boolean => {
      document.getElementById('tab3').click();
      return false;
    }));
    this._hotkeysService.add(new Hotkey('f12', (event: KeyboardEvent): boolean => {
      alert('Dont Inspect');
      return false;
    }));
  }
  btn_click() {
    console.log();
    alert('Test Click');
  }
  openCity(evt, cityName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }
    tablinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' active', '');
    }
    document.getElementById(cityName).style.display = 'block';
    evt.currentTarget.className += ' active';
  }
}
