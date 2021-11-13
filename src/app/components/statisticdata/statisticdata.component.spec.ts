import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticdataComponent } from './statisticdata.component';

describe('StatisticdataComponent', () => {
  let component: StatisticdataComponent;
  let fixture: ComponentFixture<StatisticdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
