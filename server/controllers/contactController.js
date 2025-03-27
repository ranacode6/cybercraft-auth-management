import Contact from '../models/Contact.js';
import { validationResult } from 'express-validator';
import jsPDF from 'jspdf';
import xlsx from 'xlsx';

export const createContact = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const contact = await Contact.create(req.body);
    res.status(201).json(contact);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.json(contact);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const updateContactStatus = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }

    contact.status = req.body.status;
    await contact.save();
    res.json(contact);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }

    await contact.deleteOne();
    res.json({ message: 'Contact removed' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const exportContactsPDF = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    const doc = new jsPDF();

    doc.text('Contacts Report', 20, 10);
    let y = 30;

    contacts.forEach((contact) => {
      doc.text(`Name: ${contact.fullName}`, 20, y);
      doc.text(`Email: ${contact.email}`, 20, y + 10);
      doc.text(`Status: ${contact.status}`, 20, y + 20);
      doc.text(`Message: ${contact.message}`, 20, y + 30);
      y += 50;

      if (y > 250) {
        doc.addPage();
        y = 30;
      }
    });

    const pdfBuffer = doc.output();
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=contacts.pdf');
    res.send(Buffer.from(pdfBuffer));
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const exportContactsExcel = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    const worksheet = xlsx.utils.json_to_sheet(
      contacts.map((contact) => ({
        'Full Name': contact.fullName,
        Email: contact.email,
        Message: contact.message,
        Status: contact.status,
        'Created At': contact.createdAt
      }))
    );

    const workbook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(workbook, worksheet, 'Contacts');

    const excelBuffer = xlsx.write(workbook, {
      type: 'buffer',
      bookType: 'xlsx'
    });
    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    );
    res.setHeader('Content-Disposition', 'attachment; filename=contacts.xlsx');
    res.send(Buffer.from(excelBuffer));
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
