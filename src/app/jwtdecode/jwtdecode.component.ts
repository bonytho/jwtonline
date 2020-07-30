import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';

declare var $;
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

  ngOnInit(): void {
    // this.jwtToken =
    //   'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjMxcDRCYWVjb0FZano3YWI2NjRMcy1TcUZiYyIsImtpZCI6IjMxcDRCYWVjb0FZano3YWI2NjRMcy1TcUZiYyJ9.eyJpc3MiOiJodHRwczovL3VhdC1hcGkuZGlnaXRhbHZhdWx0LmNsb3VkL0lETS9pbXMiLCJhdWQiOiJodHRwczovL3VhdC1hcGkuZGlnaXRhbHZhdWx0LmNsb3VkL0lETS9pbXMvcmVzb3VyY2VzIiwiZXhwIjoxNTk2MTI4NDUxLCJuYmYiOjE1OTYxMjQ4NTEsImNsaWVudF9pZCI6ImZwc2ludi51YXQucm8iLCJzY29wZSI6WyJvZmZsaW5lX2FjY2VzcyIsInJlYWQiLCJzZWN1cml0eWFwaV9hbGwiLCJ3cml0ZSJdLCJzdWIiOiJib255LnRob21hc0BqY2kuY29tIiwiYXV0aF90aW1lIjoxNTk2MTI0ODUxLCJpZHAiOiJMb2NhbCIsInN1YmlkIjoiYmI1Mzg4NTgtMGQyNy00NzA5LTg5NGEtZWJkN2RkMzljMzhiIiwib3JnIjoiSU5WLkNTIiwicm9sZSI6IkFETUlOIiwiYW1yIjpbIlNlY3VyaXR5IEFQSSJdfQ.QFucInk8WFo90_PRFqAU90Ur4E87Hwz6mjpcg_30T1sDgPKYQWGyA6-bIeHwTmclOM5byRiSiNPm2cuQivNqZoBV_cShsDXzNTzMfSkRio7QCt5l8I7a_KOGFLVEN6vzn2RQh3BIOV6I36qpEe-JjgVj5k2VXLPJcNSIehaqGbNBjC-U3jDrQMhhBKc4hkOlA6SqNA9Jd7GmlWQGBZVz_yM7IibvqcepijNBYthWVelhdHfoIoZZhjW_dP2MpCXYtlOqw-eA7TCeIu4d58vT9kETSFuHkM7gm_DKivZRHRgQF5TTHhp0PDzoKDYRIXlCNGCYoo-786bHZ27PoQQJRQ';
    // this.decodeToken();
  }

  ngAfterViewInit(): void {
    // this.jwtTokenRaw.nativeElement.innerHTML = this.jwtToken | '';
  }

  tokenChanged(): void {
    let isChanged = false;
    const jwtToken = this.jwtTokenRaw.nativeElement.innerHTML;

    // if (document.getElementById('rawHeader') != null) {
    //   this.jwtToken =
    //     document.getElementById('rawHeader').innerHTML +
    //     document.getElementById('rawPayload').innerHTML +
    //     document.getElementById('rawSign').innerHTML;
    // } else {
    //   this.jwtToken = jwtToken;
    // }

    if (jwtToken !== this.jwtToken) {
      this.jwtToken = jwtToken;
      isChanged = true;
    }
    if (this.jwtToken !== '') {
      this.decodeToken();
    } else {
      this.decodedData = [];
    }
  }

  formatTokenRaw(): void {
    const header = document.createElement('span');
    const payload = document.createElement('span');
    const signature = document.createElement('span');
    header.style.color = '#b00';
    header.id = 'rawHeader';
    payload.style.color = '#00b';
    payload.id = 'rawPayload';
    signature.style.color = '#090';
    signature.id = 'rawSign';
    header.innerHTML = this.jwtToken.split('.')[0] + '.';
    payload.innerHTML = this.jwtToken.split('.')[1] + '.';
    signature.innerHTML = this.jwtToken.split('.')[2];
    const raw = document.getElementById('jwtToken');
    raw.innerHTML = '';
    raw.appendChild(header);
    raw.appendChild(payload);
    raw.appendChild(signature);
  }

  decodeToken(): void {
    this.decodedData = [];
    try {
      const splitted = this.jwtToken.split('.');
      if (splitted.length !== 3) {
        throw new Error('Invalid JWT');
      }
      for (let i = 0; i < 2; i++) {
        this.decodedData[i] = JSON.stringify(
          JSON.parse(window.atob(splitted[i])),
          undefined,
          2
        );
      }
    } catch (error) {
      console.error(error.message);
      this.decodedData = [];
    }
  }
}
