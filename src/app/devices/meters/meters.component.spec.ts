import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MetersComponent } from './meters.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';

describe('MetersComponent', () => {
  let component: MetersComponent;
  let fixture: ComponentFixture<MetersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ MetersComponent ],
      imports: [
        MatTableModule,
        MatIconModule,
        MatButtonModule,
        MatPaginatorModule,
        MatMenuModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
