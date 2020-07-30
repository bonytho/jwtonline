import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JwtdecodeComponent } from './jwtdecode.component';

describe('JwtdecodeComponent', () => {
  let component: JwtdecodeComponent;
  let fixture: ComponentFixture<JwtdecodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JwtdecodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JwtdecodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
