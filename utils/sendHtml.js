export default function sendHtml(email, code) {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <title>Verify your email address</title>
    <style>
      /* Set the overall width of the email */
      body {
        width: 600px;
        margin: 0 auto;
      }
  
      /* Style the header */
      header {
        background-color: #000;
        color: #fff;
        padding: 20px;
        text-align: center;
      }
  
      /* Style the logo */
      img {
        max-width: 100%;
      }
  
      /* Style the content area */
      main {
        padding: 20px;
      }
  
      /* Style the footer */
      footer {
        background-color: #f0f0f0;
        color: #000;
        padding: 20px;
        text-align: center;
      }
      div {
        display:flex;
        align-items:center;
        border:1px blue solid;
      }
    </style>
  </head>
  <body>
    <header>
      <img src="logo.png" alt="logo" />
      <h1>Verify your email address</h1>
    </header>
    <main>
      <p>Hello, ${email}</p>
      <p>This mail is sent as part the authentication to our platform</p>
      <p>Your code:</p>
      <div>
      <p>${code}</p>
      </div>
      <p>Thank you for your patience.</p>
    </main>
    <footer>
      <p>Copyright &copy; ${new Date().getFullYear()} <strong>complycounsel</strong></p>
    </footer>
  </body>
  </html>
        `;
}
