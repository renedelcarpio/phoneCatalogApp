import envConfig from './config/config';
import app from './app';

app.listen(envConfig.PORT, () => {
	console.log(`Server running in port ${envConfig.HOST}:${envConfig.PORT}`);
});
