import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController, AlertController, LoadingController } from '@ionic/angular';
import { BarangService } from 'src/app/home/barang.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  public jenis: string = null;
  itemBaru: FormGroup;
  constructor(private barangService: BarangService,
    private router: Router,
    private toastController: ToastController,
    private alertController: AlertController,
    public loadingController: LoadingController) { }

  ngOnInit() {
    this.itemBaru = new FormGroup({
      imageUrl1: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      imageUrl2: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      jenis: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      merek: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      model: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      harga: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      stok: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      baseClock: new FormControl(null, {
        updateOn: 'change',

      }),
      boostClock: new FormControl(null, {
        updateOn: 'change',
      }),
      coreCount: new FormControl(null, {
        updateOn: 'change',
      }),
      threadCount: new FormControl(null, {
        updateOn: 'change',
      }),
      speed: new FormControl(null, {
        updateOn: 'change',
      }),
      ukuran: new FormControl(null, {
        updateOn: 'change',
      }),
      chipset: new FormControl(null, {
        updateOn: 'change',
      }),
      prosesorMerek: new FormControl(null, {
        updateOn: 'change',
      }),

    })
  }
  async notifTambah() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Tambah Barang',
      message: 'Apakah Data Barang Sudah Benar?',
      buttons: [
        {
          text: 'Tidak',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Ya',
          handler: () => this.onSubmit()
        }
      ]
    });

    await alert.present();
  }

  async addToast() {
    const toast = await this.toastController.create({
      message: 'Barang Berhasil Ditambahkan',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Menambahkan Barang . . .',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

  }

  onSubmit() {
    this.presentLoading().then(() => {
      this.barangService.tambahBarang(this.itemBaru);
      this.router.navigate(['/admin']);
      this.addToast();

    });

  }


}
