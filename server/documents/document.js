const pdfTemplate = ({ fullName, email, message }) => {
  const today = new Date();

  return `
    <!doctype html>
    <html>
      <head>
          <meta charset='utf-8' />
          <title>Contact Details</title>
          <style>

          </style>
      </head>

      <body>
        <div>
          <p>Submission Date: ${today}</p>
          <p>Full Name: ${fullName}</p>
          <p>Email: ${email}</p>
          <p>Message: ${message}</p>
        </div>

      </body>


    </html>



  `;
};

export default pdfTemplate;
