const Car = require('../models/car');
const HttpError = require('../models/http-error');




const carByNumber = async (req,res,next) =>{
    const carId = req.params.cid
    let car;
    try{
     car = await Car.findOne({carnumber:carId});
     if(!car)
     {
        let error = new HttpError('cant find car for this number',404);
        return next(error);        
     }
    }catch(err)
    {
        let errorr = new HttpError('Somthing went wrong',500);
          return next(errorr);
    }
    res.json(car);
}

const allCars = async (req,res,next) =>{
   const cars= await Car.find();
   if(cars.length ===0)
   {
      let error = new HttpError('there is no cars in the db',404);
      return next(error);        
   }
    res.json(cars);
};

const addCar= async (req,res,next) =>{
    const {carnumber,company,type,year,ownername,openBagDate,image }= req.body;
    console.log(company);
    const car = await Car.findOne({carnumber:carnumber});
    if(car)
    {
        let error = new HttpError('there is carbag for that car number',402);
        return next(error);        
    }
    const createdCar=new Car({
        carnumber,
        company,
        type,
        year,
        ownername,
        openBagDate,
        image: req.file.path
    })
    try{
    await createdCar.save();
    } catch(err)
    {
        const error = new HttpError('Creating car faild, please try again.',500);
        return next(error);
    }
    res.status(200).json(createdCar)
}

exports.carByNumber= carByNumber;
exports.allCars = allCars;
exports.addCar = addCar;