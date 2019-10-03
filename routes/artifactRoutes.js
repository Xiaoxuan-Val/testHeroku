/**
 * User router
 * INCOMPLETE
 * Created for IT PROJECT 2019
 * Group : Odin's Army
 * Initial commit/file creation by Deevesh Shanmuganathan - ID: 912364, Sep 22, 2019
 **/

const router = require("express").Router();
const ArtifactController = require("../controllers/artifactController.js")

/********************* Routes *********************/
router.post("/add", ArtifactController.addArtifact);
router.delete("/", ArtifactController.deleteArtifact);

/*Modified by Xiaoxuan Li Oct 3, 2019 for test purpose*/
router.get('/', (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

/********************* Export *********************/
module.exports = router;
