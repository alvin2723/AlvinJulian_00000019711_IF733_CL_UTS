import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Barang } from './barang.model';

@Injectable({
  providedIn: 'root'
})
export class BarangService {
  semuaBarang = [];
  private barang: Barang[] = [
    {
      id: 'b1',
      jenis: 'cpu',
      merek: 'AMD',
      model: 'Ryzen 5 3600X',
      baseClock: '23',
      boostClock: '23',
      coreCount: 5,
      threadCount: 8,
      chipset: null,
      speed: null,
      ukuran: null,
      prosesorMerek: null,
      harga: '123',
      stok: 1,
      imageUrl: ['https://c1.neweggimages.com/ProductImage/19-113-568-V11.jpg', 'https://plecom.imgix.net/iil-197819-636551.jpg?fit=fillmax&fill=solid&fill-color=ffffff&auto=format&w=1000&h=1000'],

    },
    {
      id: 'b2',
      jenis: 'ram',
      merek: 'ASUS',
      model: 'EVO X',
      baseClock: null,
      boostClock: null,
      coreCount: null,
      threadCount: null,
      chipset: null,
      speed: '123',
      ukuran: '232',
      prosesorMerek: null,
      harga: '123',
      stok: 12,
      imageUrl: ['https://www.guru3d.com/index.php?ct=news&action=file&id=32892', 'https://www.tweaktown.com/images/news/5/9/59237_02_geil-reveal-asus-certified-evo-rog-rgb-ram_full.jpg']

    },
    {
      id: 'b3',
      jenis: 'gpu',
      merek: 'AMD',
      model: 'Radeon RX 5700',
      baseClock: null,
      boostClock: null,
      coreCount: null,
      threadCount: null,
      chipset: null,
      speed: null,
      ukuran: null,
      prosesorMerek: null,
      harga: '123',
      stok: 12,
      imageUrl: ['https://m.media-amazon.com/images/I/81XjKeC5uLL.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJ7UMDv4mkfEw1YUV_sSedjHW6n_2_HeWR3Q&usqp=CAU'],

    },
    {
      id: 'b4',
      jenis: 'motherboard',
      merek: 'GIGABYTE',
      model: 'B450 GAMING X',
      baseClock: null,
      boostClock: null,
      coreCount: null,
      threadCount: null,
      chipset: 'sdfsdf',
      speed: null,
      ukuran: null,
      prosesorMerek: 'sdsdf',
      harga: '123',
      stok: 12,
      imageUrl: ['https://cdn.alza.co.uk/ImgW.ashx?fd=f3&cd=AG450m7', 'https://images-na.ssl-images-amazon.com/images/I/71XwAAmjQlL._SL1000_.jpg'],

    },

  ];

  constructor() { }



  getSemuaBarang() {
    this.semuaBarang = [];
    let j = 0;

    for (let i = 0; i < this.barang.length; i++) {
      if (this.barang[i].stok > 0) {
        this.semuaBarang[j] = this.barang[i];
        j++;
      }
    }
    return [...this.semuaBarang];
  }

  getBarang(barangId: string) {
    return {
      ...this.barang.find(barang => {
        return barang.id === barangId;
      })
    }
  }

  hapusBarang(itemId) {
    this.barang = this.barang.filter(item => {
      return item.id !== itemId;
    });
  }
  tambahBarang(data: FormGroup) {
    const barangId = "b" + (parseInt(this.barang[this.barang.length - 1].id.substring(1)) + 1).toString;
    let barangBaru = {

      id: 'b' + (parseInt(this.barang[this.barang.length - 1].id.substring(1)) + 1).toString(),
      jenis: data.value.jenis,
      merek: data.value.merek,
      model: data.value.model,
      baseClock: data.value.baseClock,
      boostClock: data.value.boostClock,
      coreCount: data.value.coreCount,
      threadCount: data.value.threadCount,
      chipset: data.value.chipset,
      speed: data.value.speed,
      ukuran: data.value.ukuran,
      prosesorMerek: data.value.prosesorMerek,
      harga: data.value.harga,
      stok: data.value.stok,
      imageUrl: [data.value.imageUrl1, data.value.imageUrl2],

    };

    this.barang.push(barangBaru);
  }
  editBarang(barangId, imageUrl1, imageUrl2, merek, model, harga, stok, baseClock, boostClock, coreCount, threadCount, speed, ukuran, chipset, prosesorMerek) {
    return {
      ...this.barang.find(barang => {
        if (barang.id === barangId) {
          barang.imageUrl = [imageUrl1, imageUrl2];
          barang.merek = merek;
          barang.model = model;
          barang.harga = harga;
          barang.stok = stok;
          barang.baseClock = baseClock;
          barang.boostClock = boostClock;
          barang.coreCount = coreCount;
          barang.threadCount = threadCount;
          barang.speed = speed;
          barang.ukuran = ukuran;
          barang.chipset = chipset;
          barang.prosesorMerek = prosesorMerek;
        }
      })
    };
  }
}
