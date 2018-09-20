import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameMachineComponent } from './game-machine.component';

describe('GameMachineComponent', () => {
  let component: GameMachineComponent;
  let fixture: ComponentFixture<GameMachineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameMachineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
