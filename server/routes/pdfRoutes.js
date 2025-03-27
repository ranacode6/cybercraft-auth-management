import express from 'express';
import { createPdfAndSendEmail } from '../controllers/pdfController.js';
const pdfRoute = express.Router();

pdfRoute.post('/createandsendpdf', createPdfAndSendEmail);

export default pdfRoute;
