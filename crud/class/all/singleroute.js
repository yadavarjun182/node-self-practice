const featureRouter = require("./featureRouter");

app.use("/feature", featureRouter);


//a simplest middleware looks like this
app.use((req, res, next) => {

});