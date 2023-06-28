import { ComponentFixture, TestBed } from '@angular/core/testing';
import { YOPage } from './yo.page';

describe('YOPage', () => {
  let component: YOPage;
  let fixture: ComponentFixture<YOPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(YOPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
