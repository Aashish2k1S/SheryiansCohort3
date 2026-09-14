import config from './config/config.js';
import app from './app/app.js';
import connectDB from './config/db.js';

const PORT = config.PORT;

await connectDB(); 

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});