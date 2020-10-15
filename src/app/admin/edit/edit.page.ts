import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ModalController, LoadingController, ActionSheetController, ToastController } from '@ionic/angular';
import { Barang } from 'src/app/home/barang.model';
import { BarangService } from 'src/app/home/barang.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  loadedBarang: Barang;
  editImageUrl1: string;
  editImageUrl2: string;
  editMerek: string;
  editModel: string;
  editHarga: string;
  editStok: number;
  editBaseClock: string;
  editBoostClock: string;
  editCoreCount: number;
  editThreadCount: number;
  editSpeed: string;
  editUkuran: string;
  editChipset: string;
  editProsesorMerek: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private barangService: BarangService,
    private router: Router,
    private alertController: AlertController,
    private modalCtrl: ModalController,
    private loadingController: LoadingController,
    private actionSheetCtrl: ActionSheetController,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('barangId')) { return; }
      else {
        const barangId = paramMap.get('barangId');
        this.loadedBarang = this.barangService.getBarang(barangId);

        this.editImageUrl1 = this.loadedBarang.imageUrl[0];
        this.editImageUrl2 = this.loadedBarang.imageUrl[1];
        this.editMerek = this.loadedBarang.merek;

        this.editModel = this.loadedBarang.model;
        this.editHarga = this.loadedBarang.harga;
        this.editStok = this.loadedBarang.stok;
        this.editBaseClock = this.loadedBarang.baseClock;
        this.editBoostClock = this.loadedBarang.boostClock;
        this.editCoreCount = this.loadedBarang.coreCount;
        this.editThreadCount = this.loadedBarang.threadCount;
        this.editSpeed = this.loadedBarang.speed;
        this.editUkuran = this.loadedBarang.ukuran;
        this.editChipset = this.loadedBarang.chipset;
        this.editProsesorMerek = this.loadedBarang.prosesorMerek;
      }
    });

  }
  async notifEdit() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Ubah Barang',
      message: 'Apakah Anda ingin Mengubah Barang?',
      buttons: [
        {
          text: 'Tidak',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Ya',
          handler: () => this.editBarang()
        }
      ]
    });

    await alert.present();
  }
  async editToast() {
    const toast = await this.toastController.create({
      message: 'Barang Berhasil Diubah',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Mengubah Data Barang . . .',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

  }


  editBarang() {
    this.presentLoading().then(() => {
      this.barangService.editBarang(
        this.loadedBarang.id,
        this.editImageUrl1,
        this.editImageUrl2,
        this.editMerek,
        this.editModel,
        this.editHarga,
        this.editStok,
        this.editBaseClock,
        this.editBoostClock,
        this.editCoreCount,
        this.editThreadCount,
        this.editSpeed,
        this.editUkuran,
        this.editChipset,
        this.editProsesorMerek,
      );
      this.router.navigate(['/admin']);
      this.editToast();
    })
  }


}
