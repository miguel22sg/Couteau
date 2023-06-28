import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlackamericaPage } from './blackamerica.page';

describe('BlackamericaPage', () => {
  let component: BlackamericaPage;
  let fixture: ComponentFixture<BlackamericaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BlackamericaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
