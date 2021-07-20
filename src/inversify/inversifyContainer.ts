import { Container } from 'inversify';
import 'reflect-metadata';
import ApiInteractionService from '../services/ApiInteractionService';
import BaseApiInteractionService from '../services/BaseApiInteractionService';
import { SERVICE_IDENTIFIER } from './inversifyTypes';

const container = new Container();
container.bind(SERVICE_IDENTIFIER.BaseApiInteractionService).to(BaseApiInteractionService).inSingletonScope();
container.bind(SERVICE_IDENTIFIER.ApiInteractionService).to(ApiInteractionService).inSingletonScope();


export default container;
