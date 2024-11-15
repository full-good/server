import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get<string>('PORT');
  const webUrl = configService.get<string>('WEBURL');
  console.log(`port: ${port} url-web: ${webUrl}`);    
  app.enableCors({origin: webUrl});
  await app.listen(port);
}
bootstrap();
