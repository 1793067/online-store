import {makeAutoObservable} from "mobx"; //mobx следит за изменением отданных в него переменных и при их изменении перерендеривает их

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name:"freezer"},
            {id: 2, name: "smartphone"},
            {id: 4, name: "oven"},
            {id: 5, name: "conditioner"}
        ];

        this._brands = [
            {id: 1, name:"Microsoft"},
            {id: 2, name: "Apple"},
            {id: 3, name: "Xiaomi"},
            {id: 4, name: "Samsung"}
        ];

        this._device = [
            {id: 4, name: "12 pro", price: 10000, rating: 0, img: "D:\learning_Stack\projects\online_store\server\static\c1f11e1f-b063-47e8-b664-0b7aebdeceb5.jpeg-b063-47e8-b664-0b7aebdeceb5.jpeg"},
            {id: 5, name: "Surface Laptop 4 13,5 Intel", price: 10000, rating: 0, img: "D:\learning_Stack\projects\online_store\server\static\c00e4d96-be6a-4e60-a60a-4b3d4f70d8ef.jpeg"},
            {id: 7, name: "SmartWatch 3 Sony SWR50", price: 10000, rating: 0, img: "D:\learning_Stack\projects\online_store\server\static\e4c06863-5077-4461-9d39-51bc959c2bd1.jpeg"}
        ]

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

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }
}