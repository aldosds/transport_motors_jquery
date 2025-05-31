$(document).ready(function () {
  $("#carousel-images").slick({
    autoplay: true,
  });

  $(".menu-hamburguer").click(function () {
    // Efetuar slideDown e slideUp com uma linha +++
    $("nav").slideToggle();
  });

  //$('#telefone').mask('(00) 00000-0000');
  $("#telefone").mask("(00) 00000-0000", {
    placeholder: "(00) 00000-0000",
  });

  $("form").validate({
    rules: {
      nome: {
        required: true,
      },

      email: {
        required: true,
        email: true,
      },
      telefone: {
        required: true,
      },

      veiculoDeInteresse: {
        required: false,
      },

      mensagem: {
        required: true,
      },
    },
    messages: {
      nome: "Por favor, insira o seu nome",
      telefone: "Este campo é obrigatório",
      email: "Este campo é obrigatório",
      mensagem: "Este campo é obrigatório",
    },

    submitHandler: function (form) {
      console.log(form);
    },

    invalidHandler: function (evento, validador) {
      let camposIncorretos = validador.numberOfInvalids();
      //console.log(camposIncorretos);
      if (camposIncorretos) {
        alert(`Existem ${camposIncorretos} campos incorretos`);
      }
    },
  });

  $(".lista-veiculos button").click(function () {
    const destino = $("#contato");
    //alert($(this).parent().find('h3').text());
    const nomeVeiculo = $(this).parent().find("h3").text();

    $("#veiculo-interesse").val(nomeVeiculo);

    $("html").animate(
      {
        scrollTop: destino.offset().top,
      },
      1000
    );
  });
});
