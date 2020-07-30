import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-jwtdecode',
  templateUrl: './jwtdecode.component.html',
  styleUrls: ['./jwtdecode.component.css'],
})
export class JwtdecodeComponent implements AfterViewInit, OnInit {
  @ViewChild('jwtToken') jwtTokenRaw: ElementRef;

  jwtToken: string;
  decodedData: Array<any> = [];

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.jwtTokenRaw.nativeElement.innerHTML = this.jwtToken;
  }

  tokenChanged(): void {
    console.log('this.tokenChanged');
    let isChanged = false;
    const jwtToken = this.jwtTokenRaw.nativeElement.innerHTML;
    if (jwtToken !== this.jwtToken) {
      this.jwtToken = jwtToken;
      isChanged = true;
    }
    if (this.jwtToken !== '') {
      this.decodeToken();
    }
  }

  formatTokenRaw(): void {}

  decodeToken(): void {
    try {
      const splitted = this.jwtToken.split('.');
      if (splitted.length !== 3) {
        throw new Error('Invalid JWT');
      }
      this.formatTokenRaw();
      for (let i = 0; i < 2; i++) {
        this.decodedData[i] = JSON.stringify(
          JSON.parse(window.atob(splitted[i])),
          undefined,
          2
        );
      }
      console.log(this.decodedData);
    } catch (error) {
      console.error(error.message);
    }
  }
}
