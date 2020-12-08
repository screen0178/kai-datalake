const router = require("express").Router()

const Raw = require("../model/rawdata")

router.post("/raw", async (req, res) => {
  
  const raw = new Raw(req.body)
  await raw.save()

  .then(raw => {
    res.json({ data: raw})
  }).catch(err => {
    res.status(400).json({ err })
  })
})
  
  
router.get("/raw", (req, res) => {

  Raw.find()

  .then(raw => {
      res.json(raw)
  }).catch(err => {
      res.status(500).json({ err })
  })
})

router.get("/raw/:id", (req, res) => {

  Raw.findById(req.params.id)

  .then(raw => {
    (raw) ? res.json(raw) : res.status(404).json({message: "Not found with id " + req.params.id});
  }).catch(err => {
      res.status(500).json({ err ,message: "Error retrieving data with id " + req.params.id})
  })
})

router.put("/raw/:id", (req, res) => {

  Raw.findByIdAndUpdate(req.params.id, req.body, {new: true})

  .then(raw => {
    (raw) ? res.json(raw) : res.status(404).json({raw, message: "Not found with id " + req.params.id});
  }).catch(err => {
    res.status(500).json({ err ,message: "Error updating data with id " + req.params.id})
  })
})

router.delete("/raw/:id", (req, res) => {

  Raw.findByIdAndRemove(req.params.id)

  .then(raw => {
    (raw) ? res.json(raw) : res.status(404).json({raw, message: "Not found with id " + req.params.id});
  }).catch(err => {
    res.status(500).json({ err ,message: "Error deleting data with id " + req.params.id})
  })
})

  module.exports = router