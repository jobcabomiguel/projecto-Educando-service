function mostrar(){
    lista = window.document.querySelector('ol#mostrar');
    li = window.document.querySelectorAll('li#li');
    lista.style.display = "block";
         lista.style.background = "#hhhhhh";

}
function apagar(){
    lista = window.document.querySelector('ol#mostrar');
    lista.style.display = "none";
}
function mudar_fundo(cor){
  fundo = window.document.querySelector('section#secao-principal');
  fundo.style.transition = "6s"
  fundo.style.background = cor;
  
}
function limpar(){
  fundo = window.document.querySelector('section#secao-principal');
  fundo.style.background = "white";
}
//////////
zona = window.document.getElementById('slider');
var imgAtual = 0;
s = 0;
maxImagens = 5;
timer = 0;
imagens = [];
        function carregarImg(){
            for (let i = 0; i < 6; i++) {
              imagens[i] = new Image;
              imagens[i].src = `imagens/centro${s}.jpg`;
              s++;
            }
      }

      function carregarSlider(imagem){
        zona.style.transition = '8s';
        zona.style.backgroundImage = "url('"+imagens[imagem].src+"')"
      }
      function inicia(){
        imgAtual = 1;
        carregarImg()
        carregarSlider(imgAtual)
        tempo_troca = 10000;
        timer = setInterval("troca()",tempo_troca);
      }a
      function troca(){
        imgAtual++;
        if(imgAtual > maxImagens){
          imgAtual = 0;
        }
        carregarSlider(imgAtual)
      }
      // apagar o menu dropdown 
      function limpador(){
        zona_ol = window.document.getElementById('mostrar');
        zona_ol.style.transition = "6s"
        zona_ol.style.display = "none";
      }
      // iframe ou janela de login setting
      function janela(){
        janela_login = window.document.querySelector('iframe#janela');
        janela_login.style.display = "block";
        janela_login.style.borderRadius = "20px";
        janela_login.style.right = "20em";
        janela_login.style.border = "20px solid black";

      }
       function mostrar_menu(){
                    var menu = window.document.getElementById('menu_home');
                    logo = window.document.getElementById('logo');
                    menu.style.display = "block";
                    logo.style.display = "block";
                    logo.style.transition = "4s";
                    logo.style.marginTop = "-73%";
                    logo.style.borderBottom = "none";

            }
      