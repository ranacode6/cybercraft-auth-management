import { Button } from '../components/ui/button';
import { EmployeeTableSection } from './EmployeeTableSection';
import { MainContentSection } from './MainContentSection';
import { useEffect, useState } from 'react';
import { getContacts } from '../services/api';
import { jsPDF } from 'jspdf';
import * as XLSX from 'xlsx';

const EmployeesList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await getContacts();
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchContacts();
  }, []);

  const generatePDF = () => {
    const doc = new jsPDF();

    // Add title
    doc.setFontSize(20);
    doc.text('CyberCraft Employees Message List', 20, 20);

    // Add date
    // doc.setFontSize(12);
    // doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 20, 30);

    // Add table headers
    const headers = ['Name', 'Email', 'Message'];
    let y = 50;
    doc.setFontSize(14);
    doc.text(headers[0], 20, y);
    doc.text(headers[1], 80, y);
    doc.text(headers[2], 140, y);

    // Add table data
    doc.setFontSize(12);
    employees.forEach((row, index) => {
      y = 60 + index * 10;
      doc.text(row.fullName, 20, y);
      doc.text(row.email.toString(), 80, y);
      doc.text(row.message.toString(), 140, y);
    });

    doc.save('employees-message-list.pdf');
  };

  const generateExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(employees);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Employees Message List');

    // Adjust column widths
    const maxWidth = employees.reduce((w, r) => Math.max(w, r.fullName), 10);
    worksheet['!cols'] = [
      { wch: maxWidth }, // Name column
      { wch: 10 }, // Sales column
      { wch: 15 } // Performance column
    ];

    XLSX.writeFile(workbook, 'employees-message-list.xlsx');
  };

  return (
    <div className="flex flex-row h-screen bg-gray-100 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-full md:w-[280px] lg:w-[346px] bg-white flex flex-col border-b md:border-b-0 md:border-r border-gray-200">
        {/* Logo container */}
        <div className="h-[60px] md:h-[72px] flex items-center justify-center border-b">
          <img
            className="w-[100px] md:w-[118px] h-auto md:h-[52px] object-contain"
            alt="Company Logo"
            src="/asset-1-1.png"
          />
        </div>

        {/* Sidebar content */}
        <div className="flex-1"></div>
      </aside>

      {/* Main content */}
      <main className="flex-1 flex flex-col min-w-0 h-[calc(100vh-60px)] md:h-screen">
        {/* Header */}

        {/* Content sections */}
        <div className="overflow-auto">
          <MainContentSection />
          <header className="flex flex-row xs:items-center p-3 sm:p-4 md:p-6 gap-3 sm:gap-4">
            <h1 className="text-2xl xs:text-[28px] sm:text-[32px] font-medium text-[#393939] font-['Inter',Helvetica]">
              Employees
            </h1>

            <div className="flex flex-wrap xs:flex-nowrap justify-end gap-2 w-full xs:w-auto">
              {/* Action buttons */}
              <Button
                variant="outline"
                size="icon"
                className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-[#607fad] rounded p-1"
              >
                <img
                  className="w-6 h-6 sm:w-7 sm:h-7"
                  alt="Layer"
                  src="/layer-2.png"
                />
              </Button>

              <Button
                variant="outline"
                size="icon"
                onClick={generateExcel}
                className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-[#607fad] rounded p-1"
              >
                <div className="bg-[url(/zondicons-save-disk.svg)] w-6 h-6 sm:w-7 sm:h-7 bg-[100%_100%]" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                onClick={generatePDF}
                className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-[#607fad] rounded p-1"
              >
                <div className="bg-[url(/zondicons-save-disk-1.svg)] w-6 h-6 sm:w-7 sm:h-7 bg-[100%_100%]" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-[#607fad] rounded p-1"
              >
                <div className="relative w-[22px] h-[22px] sm:w-[25px] sm:h-[26px]">
                  <div className="absolute w-[3px] h-full top-0 left-[45%] bg-[#607fad]" />
                  <div className="absolute w-full h-[3px] top-[45%] left-0 bg-[#607fad]" />
                </div>
              </Button>
            </div>
          </header>
          <EmployeeTableSection
            employees={employees}
            generatePDF={generatePDF}
          />
        </div>
      </main>
    </div>
  );
};

export default EmployeesList;
