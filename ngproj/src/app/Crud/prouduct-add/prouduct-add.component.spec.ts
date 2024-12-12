import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProuductAddComponent } from './prouduct-add.component';

describe('ProuductAddComponent', () => {
  let component: ProuductAddComponent;
  let fixture: ComponentFixture<ProuductAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProuductAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProuductAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
