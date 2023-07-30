/* function ticketPrint(carName, licence, typef, valuef, printf) {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    const carTime = new Date();

    const ticketContent = `
        <style>
        body {
          background-color: black;
        }

        @media print {
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Open Sans', sans-serif;
          }

          html, body {
            height: 100%;
          }

          .container-title {
            text-align:center;
          }

          .container-title h2 {
            font-size: 15px;
            padding: 5px;
            border-bottom: 1px solid black;
            border-top: 1px solid black;
          }

          .container-title h1 {
            font-size: 20px;
          }

          .container-title p {
            font-size: 15px;
            padding: 1px 2px;
          }
  
          .container-title > p:last-child {
            border-bottom: 1px solid black;
          }
  
          .container-upperbody {
            text-align: center;
            margin-top: 5px;
            text-transform: uppercase;
          }

          .container-subtitle {
            text-align: center;
          }

          .container-subtitle h1 {
            font-size: 20px;
            padding: 5px;
          }
          
          .container-upperbody {
            text-align: center;
            text-transform: uppercase;
          }

          .container-upperbody h1 {
            font-size: 20px;
          }

          .container-upperbody h1:first-child {
            font-size: 25px;
          }

          .container-body {
            margin: 5px;
          }

          .container-body p {
            text-align: center;
          }

          .container-footer {
            text-align:center;
            border-bottom: 1px solid black;
            padding: 5px;
          }
  
          .container-footer span {
            font-size: 12px;
          }
        }
        </style>
        <div class=container-title>
          <h1>EstetPARK</h1>
          <h2>CNPJ 37.641.716/0001-88</h2>
          <p>Rua Nossa Senhora das Mercês, 613</p>
          <p>(11) 99365-0051 - (11) 94019-4019</p>
        </div>
        <div class=container-subtitle>
          <h1>Recibo de Serviços</h1>
        </div>
        <div class=container-upperbody>
          <h1>${licence}</h1>
          <h1>${carName}</h1>
        </div>
        <div class=container-body>
          <p>Tipo: ${typef}</p>
          <p>Data: ${new Date(today).toLocaleDateString('pt-BR',)}</p>
          <p>Emissão: ${new Date(carTime).toLocaleString('pt-BR', { hour: 'numeric', minute: 'numeric' })}</p>
          <p>Valor:${valuef}</p>
          <p>Pagamento: ${printf}</p>
        </div>
        <div class=container-footer>
          <span>Recibo para simples conferência <br> sem valor fiscal</span>
        </div>
    `;

    const ticketWindow = window.open("", "_blank");
    ticketWindow.document.write(ticketContent);
    ticketWindow.document.close();
    ticketWindow.onload = function() {
        ticketWindow.print();
        ticketWindow.close();
    };
}

const printButton = document.querySelector('#printf');
printButton.addEventListener('click', (event) => {
  const carName = document.querySelector('#carName').value;
  const licence = document.querySelector('#licence').value;
  const typef = document.querySelector('#typef').value;
  const valuef = document.querySelector('#valuef').value;
  const paymentf = document.querySelector('#paymentf').value;
  ticketPrint(carName, licence, typef, valuef, paymentf);
}); */

// Comentei a função pq preciso alterar ela depois