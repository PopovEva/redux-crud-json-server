import axios from "axios"
import { Car } from "../../models/Car"

const SERVER="http://localhost:3000/cars"

export function fetchData() {
  return axios<Car[]>(SERVER)
}

export function addData(car:Car) {
  return axios.post<Car>(SERVER,car)
}

export function deleteData(id:String) {
  return axios.delete<Car>(SERVER+"/"+id)
}

export function updateData(car:Car) {
  return axios.put<Car>(`${SERVER}/${car.id}`, car)
}
