```javascript
//Correct usage using $or operator
db.collection('myCollection').find({$or: [{field: {a:1}}, {field: {b:2}}]});
```