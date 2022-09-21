const Tour = require("../models/Tour")
const { getTourService } = require("../services/tourServices")


exports.getTour =  async (req, res, next)=>{
    try{
      // const tours = await Tour.find({$or: [{_id: "732683127c7332732893"}, {name: "Dhaka"}] })
      // const tours = await Tour.find({name: {$ne: "Dhaka"} })
      // const tours = await Tour.find({name: {$gt: "Dhaka"} })
      // const tours = await Tour.find({name: {$gte: "Dhaka"} })
      // const tours = await Tour.find({name: {$in: ["Dhaka", "Chittagong"]} })
      // const tours = await Tour.find({}, 'name description');
      const tours = await getTourService()
  
      res.status(200).json({
        status: 'success',
        data: tours
      })
    }
    catch(error){
      res.status(400).json({
        status: 'fail',
        messages: "can't get the data",
        error: error.message
      })
    }
  }

  exports.createTour =  async (req, res, next)=>{

    try{
  
      // const result = await Tour.create(req.body) apni jodi create korte can taile eita use korte paren
  
      // data save to database
    //   const tour = new Tour(req.body)
    //   const result =  await tour.save()
    const result = await createTourService(req.body)
    result.logger()
       res.status(200).json({
         status: 'success',
         message: 'Data inserted successfully',
         data: result
       })
    }catch(error){
      res.status(400).json({
        status: 'fail',
        message: 'Data is not inserted',
        error: error.message
      })
    }
  }
exports.updateTour = async(req, res, next) =>{
  try{
const {id} = req.params;
const result = await Tour.updateOne({_id: id}, {$set: req.body}, {runValidators: true})
res.status(200).json({
  status: "success",
  message: "successfully updated the tour"
})
  }
  catch(error){
    res.status(400).json({
      status: 'fail',
      message: "Couldn't update the tour",
      error: error.message
    })
  }
}