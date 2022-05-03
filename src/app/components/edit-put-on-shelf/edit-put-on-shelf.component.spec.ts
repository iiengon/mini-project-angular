import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPutOnShelfComponent } from './edit-put-on-shelf.component';

describe('EditPutOnShelfComponent', () => {
  let component: EditPutOnShelfComponent;
  let fixture: ComponentFixture<EditPutOnShelfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPutOnShelfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPutOnShelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
