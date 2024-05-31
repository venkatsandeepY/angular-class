import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTestAppComponent } from './my-test-app.component';

describe('MyTestAppComponent', () => {
  let component: MyTestAppComponent;
  let fixture: ComponentFixture<MyTestAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyTestAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyTestAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
