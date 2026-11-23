import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsersGrid } from './users-grid';

describe('UsersGrid', () => {
  let component: UsersGrid;
  let fixture: ComponentFixture<UsersGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersGrid],
    }).compileComponents();

    fixture = TestBed.createComponent(UsersGrid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
