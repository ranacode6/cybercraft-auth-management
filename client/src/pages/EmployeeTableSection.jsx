import { RefreshCwIcon } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { jsPDF } from 'jspdf';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '../components/ui/table';
import { MainContentSection } from './MainContentSection';

export const EmployeeTableSection = ({ employees }) => {
  const downloadRowAsPDF = (row) => {
    const pdf = new jsPDF();

    // Add title
    pdf.setFontSize(16);
    pdf.text('User Details', 20, 20);

    // Add content
    pdf.setFontSize(12);
    pdf.text(`FullName: ${row.fullName}`, 20, 40);
    pdf.text(`Email: ${row.email}`, 20, 50);
    pdf.text(`Message: ${row.message}`, 20, 60);

    // Save the PDF
    pdf.save(`user-${row._id}.pdf`);
  };

  return (
    <div className="w-full p-3 sm:p-4 md:py-6">
      <Card className="w-full rounded-lg sm:rounded-[14px] shadow-[6px_6px_54px_#0000000d] overflow-hidden">
        <CardContent className="p-3 sm:p-4 md:p-7">
          <div className="flex justify-end xs:flex-row mb-4 sm:mb-6 gap-3 sm:gap-4">
            <div className="relative w-full xs:w-[250px] sm:w-[295px]">
              <Input
                className="h-10 sm:h-12 px-3 sm:px-[13px] py-[3px] rounded-[5px] border-2 border-solid border-[#898b8d] text-sm"
                placeholder="Search"
              />
              <img
                className="absolute w-5 h-5 sm:w-[24.6px] sm:h-[24.6px] top-[50%] -translate-y-[50%] right-3"
                alt="Search"
                src="/search.png"
              />
            </div>
            <Button
              variant="outline"
              className="w-10 h-10 sm:w-12 sm:h-12 p-1 rounded border-2 border-solid border-[#607fad] flex-shrink-0"
            >
              <RefreshCwIcon className="w-6 h-6 sm:w-7 sm:h-7" />
            </Button>
          </div>

          <div className="overflow-x-auto -mx-3 sm:-mx-4 md:-mx-7">
            <div className="min-w-[800px] px-3 sm:px-4 md:px-7">
              <Table>
                <TableHeader>
                  <TableRow className="border-b border-gray-200">
                    <TableHead className="font-normal text-[#101010] text-sm sm:text-base md:text-lg whitespace-nowrap">
                      Name
                    </TableHead>
                    <TableHead className="font-normal text-[#101010] text-sm sm:text-base md:text-lg whitespace-nowrap">
                      Email
                    </TableHead>
                    <TableHead className="font-normal text-[#101010] text-sm sm:text-base md:text-lg whitespace-nowrap">
                      Message
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {employees ? (
                    employees.map((employee) => (
                      <TableRow
                        key={employee._id}
                        className="border-b border-gray-200"
                      >
                        <TableCell className="font-normal text-[#345484] text-sm sm:text-base md:text-lg py-3 sm:py-4 whitespace-nowrap">
                          {employee.fullName}
                        </TableCell>
                        <TableCell className="font-normal text-[#606060] text-sm sm:text-base md:text-lg py-3 sm:py-4 whitespace-nowrap">
                          {employee.email}
                        </TableCell>
                        <TableCell className="font-normal text-[#606060] text-sm sm:text-base md:text-lg py-3 sm:py-4 whitespace-nowrap">
                          {employee.message}
                        </TableCell>

                        <TableCell className="py-3 sm:py-4 whitespace-nowrap">
                          <div className="flex gap-2 sm:gap-3">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl sm:rounded-2xl bg-[#89a7d4] bg-opacity-10"
                            >
                              <img
                                className="w-3.5 h-3.5 sm:w-[17px] sm:h-[17px]"
                                alt="Edit"
                                onClick={() => downloadRowAsPDF(employee)}
                                src="/edit.png"
                              />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl sm:rounded-2xl bg-[#6ac25f] bg-opacity-[0.12]"
                            >
                              <img
                                className="w-7 h-7 sm:w-8 sm:h-8"
                                alt="View"
                                src="/iconly-light-show.svg"
                              />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl sm:rounded-2xl bg-[#fb8484] bg-opacity-[0.12]"
                            >
                              <div className="w-3 h-3.5 sm:w-3.5 sm:h-4 bg-[url(/delete.svg)] bg-[100%_100%]" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <p>'There is no data available'</p>
                  )}
                </TableBody>
              </Table>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
