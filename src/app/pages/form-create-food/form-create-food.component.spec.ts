import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreateFoodComponent } from './form-create-food.component';

describe('FormCreateFoodComponent', () => {
  let component: FormCreateFoodComponent;
  let fixture: ComponentFixture<FormCreateFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCreateFoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCreateFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
