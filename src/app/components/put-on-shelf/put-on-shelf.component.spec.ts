import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutOnShelfComponent } from './put-on-shelf.component';

describe('PutOnShelfComponent', () => {
  let component: PutOnShelfComponent;
  let fixture: ComponentFixture<PutOnShelfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PutOnShelfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PutOnShelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
