import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailbarangPage } from './detailbarang.page';

describe('DetailbarangPage', () => {
  let component: DetailbarangPage;
  let fixture: ComponentFixture<DetailbarangPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailbarangPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailbarangPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
