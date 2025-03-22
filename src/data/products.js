import smartphone from "./images/smartphone.jpg";
import earphones from "./images/earphones.jpg";
import wirelessEarbuds from "./images/wirelessEarbuds.jpg";
import camera from "./images/camera.jpg";
import lens from "./images/lens.jpg";
import sdCard from "./images/sdCard.jpg";
import laptop from "./images/laptop.jpg";
import smartwatch from "./images/smartwatch.jpg";
import mouse from "./images/mouse.jpg";
import keyboard from "./images/keyboard.jpg";
import tv from "./images/tv.jpg";
import gamingController from "./images/gamingController.jpg";
import xbox from "./images/xbox.png";
import ps5 from "./images/ps5.jpg";
import tablet from "./images/tablet.jpg";
import charger from "./images/charger.jpg";
import chargingCable from "./images/chargingCable.jpg";
import pendrive from "./images/pendrive.jpg";
import powerbank from "./images/powerbank.jpg";
import router from "./images/router.jpg";
import macMini from "./images/macMini.jpg";
import smartAC from "./images/smartAC.jpg";
import vrBox from "./images/vrBox.jpg";

const products = [
  { id: 1, category: "personal", name: "Smartphone", price: "699", image: smartphone, stock: 5, details: "Latest 5G smartphone with a 6.5-inch AMOLED display, 128GB storage, 8GB RAM, and a 5000mAh battery." },
  { id: 2, category: "wearables", name: "Earphones", price: "29", image: earphones, stock: 3, details: "High-quality wired earphones with noise isolation, deep bass, and an in-line microphone for calls." },
  { id: 3, category: "wearables", name: "Wireless Earbuds", price: "99", image: wirelessEarbuds, stock: 7, details: "Bluetooth 5.2 earbuds with active noise cancellation, touch controls, IPX4 water resistance, and 24-hour battery life." },
  { id: 4, category: "photo", name: "Camera", price: "499", image: camera, stock: 4, details: "Mirrorless camera with a 24MP sensor, 4K video recording, interchangeable lens support, and Wi-Fi connectivity." },
  { id: 5, category: "photo", name: "Lens", price: "199", image: lens, stock: 6, details: "50mm f/1.8 prime lens with fast autofocus, perfect for portrait and low-light photography." },
  { id: 6, category: "accessories", name: "SD Card", price: "20", image: sdCard, stock: 8, details: "128GB high-speed SD card with 170MB/s read speed, ideal for 4K video and DSLR cameras." },
  { id: 7, category: "personal", name: "Laptop", price: "999", image: laptop, stock: 2, details: "Ultrabook with Intel i7 processor, 16GB RAM, 512GB SSD, 15.6-inch Full HD display, and backlit keyboard." },
  { id: 8, category: "wearables", name: "Smartwatch", price: "199", image: smartwatch, stock: 10, details: "Fitness smartwatch with heart rate monitoring, SpO2 tracking, GPS, AMOLED display, and 7-day battery life." },
  { id: 9, category: "accessories", name: "Mouse", price: "49", image: mouse, stock: 1, details: "Wireless ergonomic mouse with adjustable DPI, silent clicks, and rechargeable battery." },
  { id: 10, category: "accessories", name: "Keyboard", price: "69", image: keyboard, stock: 5, details: "Mechanical keyboard with RGB backlighting, blue switches, and anti-ghosting keys for gaming." },
  { id: 11, category: "electronics", name: "TV", price: "799", image: tv, stock: 4, details: "55-inch 4K UHD smart TV with HDR10, Dolby Atmos, and built-in voice assistant." },
  { id: 12, category: "gaming", name: "Gaming Controller", price: "59", image: gamingController, stock: 9, details: "Wireless gaming controller with adaptive triggers, customizable buttons, and haptic feedback." },
  { id: 13, category: "gaming", name: "Xbox", price: "499", image: xbox, stock: 7, details: "Next-gen Xbox with 4K gaming, 1TB SSD, 120Hz refresh rate, and Game Pass support." },
  { id: 14, category: "gaming", name: "PlayStation 5", price: "599", image: ps5, stock: 3, details: "PS5 with ultra-fast SSD, Ray Tracing support, 4K HDR gaming, and DualSense controller." },
  { id: 15, category: "personal", name: "Tablet", price: "299", image: tablet, stock: 6, details: "10.5-inch tablet with stylus support, 128GB storage, 7000mAh battery, and Snapdragon processor." },
  { id: 16, category: "accessories", name: "Charger", price: "25", image: charger, stock: 8, details: "30W fast charger with Power Delivery and USB-C support, compatible with multiple devices." },
  { id: 17, category: "accessories", name: "Charging Cable", price: "15", image: chargingCable, stock: 2, details: "Durable 1.5m nylon-braided USB-C cable with fast charging support up to 60W." },
  { id: 18, category: "accessories", name: "Pendrive", price: "12", image: pendrive, stock: 9, details: "64GB USB 3.1 pendrive with metal casing and fast read speeds of up to 150MB/s." },
  { id: 19, category: "accessories", name: "Powerbank", price: "35", image: powerbank, stock: 4, details: "20000mAh power bank with fast charging, dual USB ports, and LED battery indicator." },
  { id: 20, category: "networking", name: "Router", price: "89", image: router, stock: 7, details: "Dual-band Wi-Fi 6 router with high-speed connectivity, 4 antennas, and parental control features." },
  { id: 21, category: "personal", name: "Mac Mini", price: "799", image: macMini, stock: 5, details: "Apple M1-powered Mac Mini with 256GB SSD, 8-core CPU, and macOS Big Sur." },
  { id: 22, category: "home", name: "Smart AC", price: "1200", image: smartAC, stock: 3, details: "Wi-Fi-enabled Smart AC with AI cooling, inverter technology, and energy-saving mode." },
  { id: 23, category: "gaming", name: "VR Box", price: "1999", image: vrBox, stock: 6, details: "Immersive VR headset with 4K display, motion tracking, and built-in spatial audio." },
];

export default products;
