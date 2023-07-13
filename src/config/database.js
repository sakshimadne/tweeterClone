import mongoose from 'mongoose'
const connect = async () => {
  await mongoose.connect(
    'mongodb+srv://nick:nick@cluster0.clbxpu4.mongodb.net/?retryWrites=true&w=majority'
  )
}

export default connect
