interface DatabaseConfig {
  mongoURI: string;
  options: {
    useNewUrlParser: boolean;
    useUnifiedTopology: boolean;
  };
}

export const config: DatabaseConfig = {
  mongoURI: process.env.MONGODB_URI || 'mongodb://localhost:27017/stu_dex',
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
}; 