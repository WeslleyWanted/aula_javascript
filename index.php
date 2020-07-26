<!DOCTYPE HTML>
    <html lang="pt-br">
        <head>
            <title>Minha Página</title>
            <meta charset="utf-8">
            <script type="text/javascript" src="js/main.js"></script>
        </head>
        <body onload="already()">
            <!--<h1>Minha Página</h1>-->
            <!--<button type="button" onclick="button()">Clique aqui</button>-->
            <button type="button" onclick="clicou()">Clique aqui</button>
            <p id="agradecimento" onclick="redirect()"></p>
            <!--<p id="agradecimento" onmouseover="over()">Passe o mouse aqui</p>-->
            <p id="mousemove" onmouseover="trade(this)" onmouseout="back(this)">Passe o mouse aqui</p>
            <p id="mousemove2" onmouseover="trade(this)" onmouseout="back(this)">Passe o mouse aqui</p>
            <select onchange="funcaoChange(this)">
                <option value="1">Valor 1</option>
                <option value="2">Valor 2</option>
                <option value="3">Valor 3</option>
        </body>
    </html> 
