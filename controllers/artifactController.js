/**
 * Artifact controllers
 * INCOMPLETE
 * Created for IT PROJECT 2019
 * Group : Odin's Army
 * Initial commit/file creation by Deevesh Shanmuganathan - ID: 912364, Sep 22, 2019
 *
 **/

const mongoose = require("mongoose");
const Artifact = mongoose.model("artifact");

/****************** Controls ******************/
// add artifact [DS Sep 22]
var addArtifact = function(req, res) {
    const title = req.body.title;
    const age = req.body.age;
    const from = req.body.from;
    const ownedBy = req.body.ownedBy;
    const description = req.body.description;
    //const previousOwners = req.body.previousOwners;
    const dateAdded = req.body.dateAdded;

    const newArtifact = new Artifact({
        title,
        age,
        from,
        ownedBy,
        description,
        dateAdded,
    });

    newArtifact.save()
    .then(() => res.json('Artifact added!'))
  .catch(err => res.status(400).json('Error: ' + err));
};

// delete an artifact by id (mongoDB assigned id) [DS Sep 28] based on attributed code
var deleteArtifact = function(req, res) {
	const { identity: { id } } = req;

	Artifact.findById(id)
		.then(item => item.remove().then(() => res.json({ success: true })))
		.catch(err => res.status(404).json({ success: false }));
};

/********************* Exports *********************/
module.exports.addArtifact = addArtifact
module.exports.deleteArtifact = deleteArtifact
