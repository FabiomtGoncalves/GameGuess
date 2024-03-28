import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernamepopupComponent } from './usernamepopup.component';

describe('UsernamepopupComponent', () => {
  let component: UsernamepopupComponent;
  let fixture: ComponentFixture<UsernamepopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsernamepopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsernamepopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
