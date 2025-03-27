import express from 'express';
import { body } from 'express-validator';
import { verifyToken, admin } from '../middleware/auth.js';
import {
  createContact,
  getContacts,
  getContactById,
  updateContactStatus,
  deleteContact,
  exportContactsPDF,
  exportContactsExcel
} from '../controllers/contactController.js';

const contactRoute = express.Router();

// Validation middleware
const contactValidation = [
  body('fullName').trim().notEmpty().withMessage('Full name is required'),
  body('email').isEmail().withMessage('Please enter a valid email'),
  body('message').trim().notEmpty().withMessage('Message is required')
];

contactRoute.post('/', contactValidation, createContact);
contactRoute.get('/', verifyToken, admin, getContacts);
contactRoute.get('/:id', verifyToken, admin, getContactById);
contactRoute.put('/:id/status', verifyToken, admin, updateContactStatus);
contactRoute.delete('/:id', verifyToken, admin, deleteContact);
contactRoute.get('/export/pdf', verifyToken, admin, exportContactsPDF);
contactRoute.get('/export/excel', verifyToken, admin, exportContactsExcel);

export default contactRoute;
