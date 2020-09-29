import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://unmsm2020:unmsm2020@clustersanmarcos.bidde.gcp.mongodb.net/servicio?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
})
    .then(db => console.log('DB is connected'))
    .catch(error => console.log(error))
