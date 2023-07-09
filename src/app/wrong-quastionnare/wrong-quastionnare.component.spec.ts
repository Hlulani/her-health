import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrongQuastionnareComponent } from './wrong-quastionnare.component';

describe('WrongQuastionnareComponent', () => {
  let component: WrongQuastionnareComponent;
  let fixture: ComponentFixture<WrongQuastionnareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrongQuastionnareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrongQuastionnareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
