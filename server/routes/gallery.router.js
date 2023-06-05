const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool/pool')

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
// router.put('/like/:id', (req, res) => {
//     console.log(req.params);
//     const galleryId = req.params.id;
//     for(const galleryItem of galleryItems) {
//         if(galleryItem.id == galleryId) {
//             galleryItem.likes += 1;
//         }
//     }
//     res.sendStatus(200);
// }); // END PUT Route

router.put('/like/:id', ( req, res) => {
    const IdToUpdate = req.params.id
    console.log(`Id to update is ${IdToUpdate}`);
    const sqlText = `
        UPDATE "gallery" 
        SET "likes" = "likes" +1
        WHERE "id" = $1;
    `
    pool.query(sqlText, [IdToUpdate])
        .then ( result => {
            console.log(`Update Successful`);
            res.sendStatus(201)
        })
        .catch ( err => {
            console.log(`Error in updating ${IdToUpdate}, ${err}`);
            res.sendStatus(500)
        })
})

// // GET Route
// router.get('/', (req, res) => {
//     res.send(galleryItems);
// }); // END GET Route

router.get('/', ( req, res ) => {
    const sqlText = `SELECT * FROM "gallery";`
    pool.query(sqlText)
        .then ( result => {
            console.log(`Get gallery form the database, ${result}`);
            res.send(result.rows)
        })
        .catch ( err => {
            console.log(`Error in getting gallery from database, ${err}`);
            req.sendStatus(500)
        })
});

module.exports = router;