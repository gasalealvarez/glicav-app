import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRazaComponent } from './modal-raza.component';

describe('ModalRazaComponent', () => {
  let component: ModalRazaComponent;
  let fixture: ComponentFixture<ModalRazaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalRazaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRazaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
