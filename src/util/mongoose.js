module.exports = {
    arrayMongooseToObject: function (mongooseArrray) {
        return mongooseArrray.map(mongooseArrray.toObject());
    },
    mongooseToObject: function (mongooseObject) {
        return mongooseObject ? mongooseObject.toObject() : mongooseObject;
    },
};
