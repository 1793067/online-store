import {makeAutoObservable} from "mobx"; //mobx следит за изменением отданных в него переменных и при их изменении перерендеривает их

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name:"freezer"},
            {id: 2, name: "smartphone"},
            {id: 4, name: "oven"},
            {id: 5, name: "conditioner"},
            {id: 6, name: "gas stolve"},
            {id: 7, name: "headphones"},
            {id: 8, name: "watch"}
        ];

        this._brands = [
            {id: 1, name:"Microsoft"},
            {id: 2, name: "Apple"},
            {id: 3, name: "Xiaomi"},
            {id: 4, name: "Samsung"},
            {id: 5, name: "Huawei"},
            {id: 6, name: "Asus"},
            {id: 7, name: "Lenovo"},
            {id: 8, name: "Intel"},
            {id: 9, name: "Philips"},
            {id: 10, name: "Sony"},
            {id: 11, name: "Haier"},
            {id: 12, name: "Bosch"},
            {id: 13, name: "Logitech"},
            {id: 14, name: "Garmin"},
            {id: 15, name: "Casio"},
            {id: 16, name: "Panasonic"}
        ];

        this._devices = [
            {id: 4, name: "12 pro", price: 10000, rating: 0, img: "https://new-retail.ru/upload/iblock/6c4/x6c4665d1da0fce7397aa2d8373f95162.jpg.pagespeed.ic.Di90CR_Q4J.jpg"},
            {id: 5, name: "Surface Laptop 4 13,5 Intel", price: 10000, rating: 0, img: "https://new-retail.ru/upload/iblock/6c4/x6c4665d1da0fce7397aa2d8373f95162.jpg.pagespeed.ic.Di90CR_Q4J.jpg"},
            {id: 7, name: "SmartWatch 3 Sony SWR50", price: 10000, rating: 0, img: "https://new-retail.ru/upload/iblock/6c4/x6c4665d1da0fce7397aa2d8373f95162.jpg.pagespeed.ic.Di90CR_Q4J.jpg"},
            {id: 8, name: "12 pro", price: 10000, rating: 0, img: "https://new-retail.ru/upload/iblock/6c4/x6c4665d1da0fce7397aa2d8373f95162.jpg.pagespeed.ic.Di90CR_Q4J.jpg"},
            {id: 9, name: "Surface Laptop 4 13,5 Intel", price: 10000, rating: 0, img: "https://new-retail.ru/upload/iblock/6c4/x6c4665d1da0fce7397aa2d8373f95162.jpg.pagespeed.ic.Di90CR_Q4J.jpg"},
            {id: 10, name: "SmartWatch 3 Sony SWR50", price: 10000, rating: 0, img: "https://new-retail.ru/upload/iblock/6c4/x6c4665d1da0fce7397aa2d8373f95162.jpg.pagespeed.ic.Di90CR_Q4J.jpg"}
        ]
        
        this._selectedType = {};
        this._selectedBrand = {};

        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands =  brands
    }

    setDevices(devices) {
        this._devices =  devices
    }

    setSelectedType(type)  {
        //выделяем  тип устройства при нажатии
        this._selectedType = type;
    }

    setSelectedBrand(brand)  {
        //выделяем  тип устройства при нажатии
        this._selectedBrand = brand;
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }

    get selectedType() {
        return this._selectedType
    }

    get selectedBrand() {
        return this._selectedBrand
    }
}