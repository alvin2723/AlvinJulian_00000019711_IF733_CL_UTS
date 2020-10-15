import { Component, OnInit } from '@angular/core';
import { Barang } from '../home/barang.model';
import { BarangService } from '../home/barang.service';
import { IonItemSliding, ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  barang: Barang[];
  public visible: boolean = false;
  selectedArray: any = [];
  index: any;
  toastController: any;
  constructor(private barangService: BarangService, private router: Router) { }

  ngOnInit() {
    this.barang = this.barangService.getSemuaBarang();
  }
  ionViewWillEnter() {
    this.barang = this.barangService.getSemuaBarang();

  }
  reload() {
    this.barang = this.barangService.getSemuaBarang();
  }
  async addToast() {
    const toast = await this.toastController.create({
      message: 'Barang Berhasil Dihapus',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }
  delete(id, slidingItem: IonItemSliding) {
    this.barangService.hapusBarang(id);
    slidingItem.close();
    this.addToast();
    this.router.navigate(['/admin']);
    this.reload();

  }

  multiple() {
    this.visible = !this.visible;
  }
  add() {
    this.router.navigate(['/tambah']);
  }

  multipleDelete() {

    for (let i = 0; i < this.selectedArray.length; i++) {
      if (this.selectedArray[i] == true) {
        this.barangService.hapusBarang(this.barang[i].id);

      }

    }
    this.router.navigate(['/admin']);
    this.reload();

  }

}
