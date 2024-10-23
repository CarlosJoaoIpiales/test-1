import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterMeterComponent } from './register-meter.component';

describe('RegisterMeterComponent', () => {
    let component: RegisterMeterComponent;
    let fixture: ComponentFixture<RegisterMeterComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ RegisterMeterComponent ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(RegisterMeterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});