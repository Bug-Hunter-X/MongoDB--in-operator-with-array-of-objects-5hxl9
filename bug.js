```javascript
//Incorrect usage of $in operator with an array of Objects
db.collection('myCollection').find({field: {$in: [{a:1},{b:2}]}});
```