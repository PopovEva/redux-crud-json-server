import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { addDataAsync, deleteDataAsync, getDataAsync, selectCars, updateDataAsync } from './carSlice'
import { Car } from '../../models/Car'


const ComCar = () => {
  const dispatch = useAppDispatch()
  const cars = useAppSelector(selectCars)
  const [brand, setBrand] = useState<string>("")
  const [year, setYear] = useState<string>("")
  const [selectedCarId, setSelectedCarId] = useState<number | null>(null);

  useEffect(() => {
    dispatch(getDataAsync());
  }, [dispatch]);

  const handleAddCar = () => {
    dispatch(addDataAsync({ brand, year }));
    setBrand('');
    setYear('');
  };

  const handleUpdate = (car:Car) =>{
    setBrand(car.brand);
    setYear(car.year);
    setSelectedCarId(car.id || null);
  }

  const handleUpdateSubmit = () => {
    if (selectedCarId) {
      dispatch(updateDataAsync({ id: selectedCarId, brand, year }));
      setBrand('');
      setYear('');
      setSelectedCarId(null);
    }
  };
  

  return (
    <div> Car Componenta:
      <h1>Car List</h1>
      {/* <button onClick={()=> dispatch(getDataAsync())}>get Data</button> */}
      {cars.length?(
      cars.map((car,index)=>(<div key={`${car.id}-${index}`}>{car.brand}{car.year}
      <button onClick={()=>dispatch(deleteDataAsync(""+car.id))}>Delete</button>
      <button onClick={() => handleUpdate(car)}>Edit</button>
      </div>))
      ):(<p>No cars available</p>)}

      <h2>{selectedCarId ? "Update Car" : "Add new one"}</h2>
      Brand:<input value={brand}  onChange={(e)=>setBrand(e.target.value)}/>
      Year:<input value={year} onChange={(e)=>setYear(e.target.value)}/>
      {selectedCarId?(
        <button onClick={handleUpdateSubmit}>Update</button>)
        :(<button onClick={handleAddCar}>Add</button>)}
      
    </div>
  )
}

export default ComCar