"use client";

import l1 from "../public/png/laptop1.webp";
import l3 from "../public/png/laptop3.webp";
import l2 from "../public/png/laptop2.webp";
import l4 from "../public/png/laptop4.webp";
import l5 from "../public/png/laptop5.webp";
import k1 from "../public/png/keyboard1.jpg";
import k3 from "../public/png/keyboard3.webp";
import k4 from "../public/png/keyboard4.webp";
import k5 from "../public/png/keyboard5.webp";
import m2 from "../public/png/monitor2.webp";
import m1 from "../public/png/monitor1.webp";
import m3 from "../public/png/monitor3.webp";
import m4 from "../public/png/monitor4.webp";
import m5 from "../public/png/monitor5.webp";
import p1 from "../public/png/processor1.jpg";
import p2 from "../public/png/processor2.jpg";
import p3 from "../public/png/processor3.jpg";
import p4 from "../public/png/processor4.jpg";
import p5 from "../public/png/processor5.jpg";
import g1 from "../public/png/graphic1.png";
import g2 from "../public/png/graphic2.jpg";
import g3 from "../public/png/graphic3.webp";
import g4 from "../public/png/graphic6.jpg";
import g5 from "../public/png/graphic7.webp";

import { atom, selector } from "recoil";
import { Laptop, Monitor } from "lucide-react";
const itemsInCart = atom({
  key: "itemsInCart",
  default: 1,
});

const itemAdded = atom({
  key: "itemAdded",
  default: [],
});
const price = atom({
  key: "price",
  default: 0,
});
const OriginalPrice = atom({
  key: "OriginalPrice",
  default: 0,
});
const CatrgoryItem = atom({
  key: "CatrgoryItem",
  default: [],
});
const category = atom({
  key: "Category",
  default: "",
});
const minPrice = atom({
  key: "minprice",
  default: 0,
});
const maxPrice = atom({
  key: "maxprice",
  default: 200000,
});
const data = atom({
  key: "data",
  default: [
    {
      id: 1,
      category: "Laptop",
      name: "Asus Tuf Gaming F15",
      src: l1,
      LongName:
        "ASUS TUF Gaming F15 - AI Powered Gaming Intel Core i5 11th Gen 11260H - (8 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce RTX 2050/144 Hz/70 TGP) FX506HF-HN075W Gaming Laptop  (15.6 Inch, Graphite Black, 2.30 kg)",
      OrPrice: 103990,
      Price: 85990,
      percent: "17% off",
    },
    {
      id: 2,
      category: "Monitor",
      LongName:
        "Acer 23.8 inch Full HD LED Backlit VA Panel Gaming Monitor (QG241Y)  (Response Time: 1 ms, 100 Hz Refresh Rate)",
      name: "Acer 23.8 inch Full HD LED",
      src: m1,
      OrPrice: 11800,
      Price: 7999,
      percent: "32% off",
    },
    {
      id: 3,
      category: "Laptop",
      name: "DELL G15",
      LongName:
        "DELL G15 Intel Core i5 12th Gen 12500H - (8 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce RTX 3050/120 Hz) G15-5520 Gaming Laptop  (15.6 Inch, Dark Shadow Grey, 2.57 kg, With MS Office)",
      src: l2,
      OrPrice: 99786,
      Price: 72500,
      percent: "27% off",
    },
    {
      id: 4,
      category: "Monitor",
      LongName:
        "ZEBRONICS 24 inch Full HD VA Panel Wall Mountable Monitor (ZEB-A24FHD LED)  (Response Time: 14 ms, 75 Hz Refresh Rate)",
      name: "ZEBRONICS 24 inch Full HD ",
      src: m2,
      OrPrice: 24999,
      Price: 7999,
      percent: "68% off",
    },
    {
      id: 5,
      category: "Keyboard",
      LongName:
        "RPM Euro Games Gaming Keyboard With 87 Keys & RGB Backlit | With Suspension Keys Wired USB Gaming Keyboard  (Black)",
      name: "RPM Euro Games Gaming Keyboard",
      src: k1,
      OrPrice: 1490,
      Price: 702,
      percent: "52% off",
    },
    {
      id: 6,
      category: "GPU",
      LongName:
        "ZOTAC NVIDIA GAMING GEFORCE RTX 3050 ECO 8 GB GDDR6 Graphics Card",
      name: "ZOTAC NVIDIA RTX 3050",
      src: g1,
      OrPrice: 41070,
      Price: 23500,
      percent: "42% off",
    },
    {
      id: 7,
      LongName:
        "Acer Nitro 5 Intel Core i5 11th Gen 11400H - (8 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce GTX 1650) AN515-57 Gaming Laptop  (15.6 inch, Shale Black, 2.2 kg)",
      name: "Acer Nitro 5",
      src: l3,
      category: "Laptop",
      OrPrice: 123999,
      Price: 89990,
      percent: "27% off",
    },
    {
      id: 8,
      LongName:
        "Lenovo LOQ Intel Core i7 13th Gen 13620H - (16 GB/512 GB SSD/Windows 11 Home/8 GB Graphics/NVIDIA GeForce RTX 4060) 15IRH8 Gaming Laptop  (15.6 Inch, Storm Grey, 2.4 kg, With MS Office)",
      name: "Lenovo LOQ",
      src: l4,
      category: "Laptop",
      OrPrice: 133790,
      Price: 99990,
      percent: "25% off",
    },
    {
      id: 9,
      LongName:
        "Acer Predator Neo (2023) Intel Core i7 13th Gen 13700HX - (16 GB/1 TB SSD/Windows 11 Home/6 GB Graphics/NVIDIA GeForce RTX 4050) PHN16-71-757P Gaming Laptop  (16 Inch, Obsidian Black, 2.6 Kg)",
      name: "Acer Predator Neo (2023)",
      src: l5,
      category: "Laptop",
      OrPrice: 104990,
      Price: 129999,
      percent: "19% off",
    },
    {
      id: 10,
      category: "Monitor",
      LongName:
        "ZEBRONICS 32 inch Curved Full HD VA Panel 80 cm, Wall Mountable, Slim Gaming Monitor (ZEB-AC32FHD LED)  (Response Time: 12 ms, 165 Hz Refresh Rate)",
      name: "ZEBRONICS 32 inch Curved",
      src: m3,
      OrPrice: 44999,
      Price: 14999,
      percent: "66% off",
    },
    {
      id: 11,
      category: "Monitor",
      LongName:
        "MarQ by Flipkart 27 inch Full HD IPS Panel Gaming Monitor (27FHDMIQII2G)  (AMD Free Sync, Response Time: 1 ms, 165 Hz Refresh Rate)",
      name: "MarQ by Flipkart 27 inch",
      src: m4,
      OrPrice: 21999,
      Price: 11999,
      percent: "45% off",
    },
    {
      id: 12,
      category: "Monitor",
      LongName:
        "MSI 23.8 inch Full HD IPS Panel Wide Color Gamut, Anti-Flicker & Less Blue Light Esports Gaming Monitor (G2422)  (AMD Free Sync, Response Time: 1 ms, 170 Hz Refresh Rate)",
      name: "MSI 23.8 inch Full HD ",
      src: m5,
      OrPrice: 22200,
      Price: 9999,
      percent: "54% off",
    },
    {
      id: 13,
      category: "Keyboard",
      LongName:
        "EVOFOX Warhammer Floating Keycaps, 19 Anti Ghosting Keys and LED Backlit Wired USB Gaming Keyboard (Black)",
      name: "EVOFOX Warhammer",
      src: k3,
      OrPrice: 1499,
      Price: 1099,
      percent: "26% off",
    },
    {
      category: "Keyboard",
      id: 14,
      LongName:
        "Ant Esports MK 1500 Mini / 60% Pro RGB, Type-C Charging, 1000 mAh battery, Membrane Wireless Gaming Keyboard (White)",
      name: "Ant Esports MK 1500 Mini",
      src: k4,
      OrPrice: 3999,
      Price: 1312,
      percent: "67% off",
    },
    {
      category: "Keyboard",
      id: 15,
      LongName:
        "Aula F3287 Mechanical / Rainbow Backlight, Anti-ghosting, Blue switch, TKL Wired USB Gaming Keyboard  (Grey, White)",
      name: "Aula F3287 Mechanical ",
      src: k5,
      OrPrice: 6999,
      Price: 2199,
      percent: "68% off",
    },
    {
      id: 16,
      category: "Processor",
      LongName:
        "AMD Ryzen 5 5600G 3.9 GHz Upto 4.4 GHz AM4 Socket 6 Cores 12 Threads 3 kB L2 16 kB L3 Desktop Processor  (Grey)",
      name: "AMD Ryzen 5 5600G ",
      src: p3,
      OrPrice: 34500,
      Price: 13755,
      percent: "60% off",
    },
    {
      id: 17,
      category: "Processor",
      LongName:
        "Intel i3 10TH GEN 10105F 3.7 GHz LGA 1200 Socket 4 Cores Desktop Processor (Blue)",
      name: "Intel i3-10105F 3.7 GHz",
      src: p4,
      OrPrice: 12000,
      Price: 7241,
      percent: "39% off",
    },
    {
      id: 18,
      category: "Processor",
      LongName:
        "amd Ryzen 9 5900X 3.7 GHz Upto 4.8 GHz AM4 Socket 12 Cores 24 Threads Desktop Processor (Silver)",
      name: "amd Ryzen 9 5900X",
      src: p1,
      OrPrice: 75000,
      Price: 32159,
      percent: "57% off",
    },
    {
      id: 19,
      category: "Processor",
      LongName:
        "Intel i5-11400F 4.4 GHz Upto 2.6 GHz LGA 1200 Socket 6 Cores 12 Threads Desktop Processor  (Blue)",
      name: "Intel i5-11400F 4.4 GHz",
      src: p2,
      OrPrice: 22000,
      Price: 11970,
      percent: "45% off",
    },
    {
      id: 20,
      category: "Processor",
      LongName:
        "Intel i7-12700 4.9 GHz Upto 4.9 GHz LGA1700 Socket 12 Cores 20 Threads Desktop Processor  (Blue)",
      name: "Intel i7-12700 4.9 GHz ",
      src: p5,
      OrPrice: 48000,
      Price: 27536,
      percent: "42% off",
    },
    {
      id: 21,
      category: "GPU",
      LongName:
        "ZOTAC NVIDIA GAMING GEFORCE GTX1650 DUAL FAN 4 GB GDDR6 Graphics Card",
      name: "ZOTAC NVIDIA GAMING GEFORCE GTX1650",
      src: g2,
      OrPrice: 22385,
      Price: 11973,
      percent: "46% off",
    },
    {
      id: 22,
      category: "GPU",
      LongName:
        "ZOTAC NVIDIA GeForce RTX 3060 Twin Edge 12 GB GDDR6 Graphics Card",
      name: "ZOTAC NVIDIA GeForce RTX 3060 ",
      src: g3,
      OrPrice: 44400,
      Price: 27950,
      percent: "37% off",
    },
    {
      id: 23,
      category: "GPU",
      LongName: "ASUS AMD Radeon DUAL RX560 4 GB GDDR5 Graphics Card",
      name: "ASUS AMD Radeon DUAL RX560",
      src: g4,
      OrPrice: 19999,
      Price: 9999,
      percent: "49% off",
    },
    {
      id: 24,
      category: "GPU",
      LongName:
        "GIGABYTE AMD Radeon GV-R66XTGAMING OC-8GD 8 GB GDDR6 Graphics Card",
      name: "GIGABYTE AMD Radeon GV-R68XT",
      src: g5,
      OrPrice: 114423,
      Price: 94489,
      percent: "17% off",
    },
  ],
});
const SelectPrice= atom({
  key: "SelectPrice",
  default: [500,1000,2000,5000,10000,30000,50000,100000]
})
const SelectPrice1= atom({
  key: "SelectPrice",
  default: [500,1000,2000,5000,10000,30000,50000,100000]
})

export default itemsInCart;
export {
  SelectPrice,
  SelectPrice1,
  maxPrice,
  minPrice,
  itemAdded,
  data,
  price,
  OriginalPrice,
  CatrgoryItem,
  category,
};
