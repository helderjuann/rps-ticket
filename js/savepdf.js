function ticketPdf(nameClient, addressName, docCPF, docCNPJ, carName, carLicence, servicesOne, 
    servicesTwo, servicesThree, priceTotal, priceOne, priceTwo, priceThree, descOne, descTwo, descThree) {
      const timeElapsed = Date.now();
      const today = new Date(timeElapsed);
  
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
        
        section.box .container {
            max-width: 1280px;
            margin: 0 auto;
            padding: 0px 2%;
        }
        
        section.box .container .r-box {
            position: relative;
            top: 300px;
            width: 100%;
            max-width: 500px;
            height: auto;
            border: 2px solid black;
            margin: 0px auto;
            border-radius: 8px;
        }
        
        section.box .container .r-box .header {
            width: 100%;
            border-bottom: 1px solid black;
            display: flex;
        }
        
        section.box .container .r-box .header .header-70 {
            width: 70%;
            padding: 5px;
        }
        
        section.box .container .r-box .header .header-30 {
            width: 30%;
            border-left: 1px solid black;
            text-align: center;
            padding: 5px;
            font-weight: bold;
        }
  
        section.box .container .r-box .header .header-30 p {
          position: relative;
          top: 13px;
        }
        
        section.box .container .r-box .doc-date {
            width: 100%;
            display: flex;
            border-bottom: 1px solid black;
        }
        
        section.box .container .r-box .doc-date .date-35 {
            width: 35%;
            text-align: center;
            padding: 12px;
        }
        
        section.box .container .r-box .doc-date .date-35 .cnalign {
            font-size: 12px;
          }
          
        section.box .container .r-box .doc-date .date-35 .datealign {
            font-size: 12px;
            margin: 10px;
        }
        
        section.box .container .r-box .doc-date .date-30 {
            width: 30%;
            border-left: 1px solid black;
            padding: 12px;
        }
        
        section.box .container .r-box .doc-date .date-30 p {
            font-size: 14px;
            text-align: center;
        }
        
        section.box .container .r-box .doc-date .date-30 p:first-of-type {
            font-weight: bold;
            margin-bottom: 8px;
        }
        
        section.box .container .r-box .doc-date .date-35:nth-of-type(2) {
            border-left: 1px solid black;
        }
        
        section.box .container .r-box .personal-info {
            width: 100%;
            display: flex;
        }
        
        section.box .container .r-box .personal-info .infos-100 {
            width: 100%;
            border-bottom: 1px solid black;
            padding: 5px;
        }
        
        section.box .container .r-box .personal-info .infos-100 p {
            font-size: 13px;
        }
        
        section.box .container .r-box .main-title {
            width: 100%;
            display: flex;
        }
        
        section.box .container .r-box .main-title .title-50 {
            width: 50%;
            padding: 10px;
        }
        
        section.box .container .r-box .main-title .title-50 .h2border {
            border: 1px solid black;
            text-align: center;
            font-size: 20px;
            width: 50%;
            position: relative;
            left: 50px;
        }
        
        section.box .container .r-box .main-title .title-50 h2 {
            font-size: 15px;
            font-weight: bold;
        }
        
        section.box .container .r-box .title-main {
            width: 100%;
            display: inline-block;
            border-bottom: 1px solid black;
            padding: 5px;
        }
        
        section.box .container .r-box .title-main h2 {
            text-align: center;
            font-size: 15px;
        }
        
        section.box .container .r-box .three-names {
            width: 100%;
            display: flex;
            border-bottom: 1px solid black;
        }
        
        section.box .container .r-box .three-names h2 {
            font-size: 15px;
            text-align: center;
            padding: 5px;
        }
        
        section.box .container .r-box .three-names .name-35 {
            width: 35%;
        }
        
        section.box .container .r-box .three-names .name-35:nth-of-type(2) {
            border-left: 1px solid black;
        }
        
        section.box .container .r-box .three-names .name-30 {
            width: 30%;
            border-left: 1px solid black;
        }
        
        section.box .container .r-box .mark {
            width: 100%;
            display: flex;
            border-bottom: 1px solid black;
        }
        
        section.box .container .r-box .mark h2 {
            font-size: 18px;
            text-align: center;
            padding: 5px;
        }
        
        section.box .container .r-box .mark .mark-35 {
            width: 35%;
        }
        
        section.box .container .r-box .mark .mark-35:nth-of-type(2) {
            border-left: 1px solid black;
        }
        
        section.box .container .r-box .mark .mark-30 {
            width: 30%;
            border-left: 1px solid black;
        }
        
        section.box .container .r-box .licence {
            width: 100%;
            display: flex;
            border-bottom: 1px solid black;
        }
        
        section.box .container .r-box .licence h2 {
            font-size: 18px;
            text-align: center;
            padding: 5px;
        }
        
        section.box .container .r-box .licence-35 {
            width: 35%;
        }
        
        section.box .container .r-box .licence-35:nth-of-type(2) {
            border-left: 1px solid black;
        }
        
        section.box .container .r-box .licence-30 {
            width: 30%;
            border-left: 1px solid black;
        }
        
        section.box .container .r-box .total {
            border-top: 1px solid black;
        }
        
        section.box .container .r-box .veralign {
            position: relative;
            top: 15px;
            text-transform: uppercase;
        }
        
        section.box .container .r-box .desc {
            width: 100%;
            display: flex;
            padding: 5px;
        }
        
        section.box .container .r-box .desc .desc-text h2 {
            font-size: 15px;
        }
        
        section.box .container .r-box .desc .desc-text p {
            font-size: 14px;
        }
      }
      </style>
      <section class="box">
      <div class="container">
          <div class="r-box">
              <div class="header">
                  <div class="header-70">
                      <h2>EstetPARK</h2>
                      <p>Recibo de Prestação de Serviço</p>
                  </div><!-- header-70 -->
                  <div class="header-30">
                      <p>${new Date().toLocaleString('pt-BR', { hour: 'numeric', minute: 'numeric' })}</p>
                  </div><!-- header-30-->
              </div><!-- header -->
              <div class="doc-date">
                  <div class="date-35">
                      <h2 class="cnalign">CNPJ 37.641.716/0001-88</h2>
                      <h2 class="datealign">CCM 6.655.512-4</h2>
                  </div><!-- date-35 -->
                  <div class="date-35">
                      <h2 class="cnalign">Natureza da Operação</h2>
                      <p class"datealign">Serviços</p>
                  </div><!-- date-35 -->
                  <div class="date-30">
                      <p class="cnalign">Data de Emissão</p>
                      <p class="datealign">${new Date(today).toLocaleDateString('pt-BR',)}</p>
                  </div><!-- date-33 -->
              </div><!-- doc-date -->
              <div class="personal-info">
                  <div class="infos-100">
                      <p>Nome: ${nameClient}</p>
                      <p>Endereço: ${addressName}</p>
                      <p>CPF: ${docCPF}</p>
                      <p>CNPJ: ${docCNPJ}</p>
                  </div><!-- infos-100 -->
              </div><!-- personal-info -->
              <div class="main-title">
                  <div class="title-50">
                      <h2 class="h2border">EstetPARK</h2>
                  </div><!-- title-40 -->
                  <div class="title-50">
                      <h2>Guincho e Estacionamento</h2>
                  </div><!-- title-40 -->
              </div><!-- main-title -->
              <div class="title-main">
                  <h2>Rua Nossa Senhora das Mercês, 613</h2>
                  <h2>(11) 99365-0051 - (11) 94019-4019</h2>
              </div><!-- title-main -->
              <div class="three-names">
                  <div class="name-35">
                      <h2>Veículo</h2>
                  </div><!-- name-35 -->
                  <div class="name-35">
                      <h2>Serviços</h2>
                  </div><!-- name-35 -->
                  <div class="name-30">
                      <h2>Preço</h2>
                  </div><!-- name- 30-->
              </div><!-- three-names -->
              <div class="mark">
                  <div class="mark-35">
                      <h2 class="veralign">${carName}</h2>
                  </div><!-- mark-35 -->
                  <div class="mark-35">
                      <h2>${servicesOne}</h2>
                      <h2 class="total">${servicesTwo}</h2>
                  </div><!-- mark-35 -->
                  <div class="mark-30">
                      <h2>${priceOne}</h2>
                      <h2 class="total">${priceTwo}</h2>
                  </div><!-- mark-30 -->
              </div><!-- mark -->
              <div class="licence">
                  <div class="licence-35">
                      <h2 class="veralign">${carLicence}</h2>
                  </div><!-- licence-35 -->
                  <div class="licence-35">
                      <h2>${servicesThree}</h2>
                      <h2 class="total">Total</h2>
                  </div><!-- licence-35 -->
                  <div class="licence-30">
                      <h2>${priceThree}</h2>
                      <h2 class="total">${priceTotal}</h2>
                  </div><!-- licence-30 -->
              </div><!-- licence -->
                <div class="desc">
                    <div class="desc-text">
                        <h2>Descrição</h2>
                        <p>${descOne}</p>
                        <p>${descTwo}</p>
                        <p>${descThree}</p>
                    </div><!-- desc-text -->
                </div><!-- desc -->
              </div><!-- r-box -->
          </div><!-- container -->
      </section><!-- box -->
      `;

      const ticketWindow = window.open("", "_blank");
      ticketWindow.document.write(ticketContent);
      ticketWindow.document.close();
      ticketWindow.onload = printIf();
      
      function printIf() {
        if (window.matchMedia("(any-pointer: coarse)").matches) {
            setTimeout(function() {
                ticketWindow.print();
                ticketWindow.close();
            }, 1000);
        } else {
                ticketWindow.print();
                ticketWindow.close(); 
        }
      };
  }
  
  const printPdf = document.querySelector('#printPdf');
  printPdf.addEventListener('click', (event) => {
    const nameClient = document.querySelector('#nameClient').value;
    const addressName = document.querySelector('#addressName').value;
    const docCPF = document.querySelector('#docCPF').value;
    const docCNPJ = document.querySelector('#docCNPJ').value;
    const carName = document.querySelector('#carName').value;
    const carLicence = document.querySelector('#carLicence').value;
    const servicesOne = document.querySelector('#servicesOne').value;
    const servicesTwo = document.querySelector('#servicesTwo').value;
    const servicesThree = document.querySelector('#servicesThree').value;
    const priceOne = Number(document.querySelector('#priceOne').value);
    const priceTwo = Number(document.querySelector('#priceTwo').value);
    const priceThree = Number(document.querySelector('#priceThree').value);
    const priceTotal = priceOne + priceTwo + priceThree;
    const descOne = document.querySelector('#descOne').value;
    const descTwo = document.querySelector('#descTwo').value;
    const descThree = document.querySelector('#descThree').value;
    ticketPdf(nameClient, addressName, docCPF, docCNPJ, carName, carLicence, servicesOne, servicesTwo, 
    servicesThree, priceTotal, priceOne, priceTwo, priceThree, descOne, descTwo, descThree);
  });