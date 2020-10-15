import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Barang } from './barang.model';
import { BarangService } from './barang.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  barang: Barang[];
  public visible: boolean = true;
  constructor(private barangService: BarangService) { }

  ngOnInit() {
    this.barang = this.barangService.getSemuaBarang();

  }
  ionViewWillEnter() {
    this.barang = this.barangService.getSemuaBarang();
    // if (this.barang.length <= 1) {
    //   this.presentToast();

    // }
  }
  listorgrid() {
    this.visible = !this.visible;
  }

}
