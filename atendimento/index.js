$(document).ready(function () {

    function camposOcultos() {
        $(".cpfcnpj").hide()
       
         
    }
    function botoes() {
        $(".btn").hide()
    }

    function setarAtendente() {
        $(".atendente1, .atendente2, .atendente3").val("Jonas Henrique")
    }


    function data() {
        var data = new Date();
        var dia = ("0" + data.getDate()).slice(-2);
        var mes = ("0" + (data.getMonth() + 1)).slice(-2);
        var ano4 = data.getFullYear();
        var hora = ("0" + data.getHours()).slice(-2);
        var min = ("0" + data.getMinutes()).slice(-2);
        var str_data = dia + '/' + mes + '/' + ano4;
        var str_hora = hora + ':' + min;

        console.log(str_data + " " + str_hora);

        $(".data").val(str_data)

    }

    function selecionaAntendimento() {
        $("#dbug").click(function () {
            $("#vainet").hide()
            $("#netturbo").hide()
            $(".btn").show()
            $(".cpfcnpj").show()
        })
        $("#vainet").click(function () {
            $("#dbug").hide()
            $("#netturbo").hide()
            $(".btn").show()
            $(".cpfcnpj").show()

        })
        $("#netturbo").click(function () {
            $("#vainet").hide()
            $("#dbug").hide()
            $(".btn").show()
            $(".cpfcnpj").show()

        })
    }

    function mascaras() {

        var options = {
            onKeyPress: function (cpf, ev, el, op) {
                var masks = ['000.000.000-000', '00.000.000/0000-00'];
                $('.campocpfcnpj').mask((cpf.length > 14) ? masks[1] : masks[0], op);
            }
        }

        $('.campocpfcnpj').length > 11 ? $('.campocpfcnpj').mask('00.000.000/0000-00', options) : $('.campocpfcnpj').mask('000.000.000-00#', options);

    }


    $(".botao").click(function () {
        location.reload()
    })
    $(".botaocp1").click(function(){
        $("#oculto").val("data: "+$(".data").val()+"\n"+"atendente: "+$('.atendente1').val()+"\n"+"requerente: "+$(".requerente1").val()+"\n"+"descrição:"+$('.descricao1').val()+"\n"+"contato: "+$(".contato1").val())
        $("#oculto").select();
        document.execCommand("copy")

    })
    $(".botaocp2").click(function(){
        $("#oculto").val("atendente: "+$(".atendente2").val()+"\n"+"requerente: "+$(".requerente.2").val()+"\n"+"contato: "+$(".contato2").val()+"\n"+"assinante: "+$(".assinante").val()+"\n"+"descrição: "+$(".descricao2").val())
        $("#oculto").select();
        document.execCommand("copy")

    })
    $(".botaocp3").click(function(){
        $("#oculto").val("atendente: "+$(".atendente3").val()+"\n"+"nome: "+$(".nome").val()+"\n"+"cliente: "+$(".cliente").val()+"\n"+"id circuito: "+$(".idcircuito").val()+"\n"+"email: "+$(".email").val()+"\n"+"telefone: "+$(".telefone").val()+"\n"+"reclamação: "+$(".reclamacao").val())
        $("#oculto").select();
        document.execCommand("copy")
    })


    camposOcultos()
    botoes()
    setarAtendente()
    data()
    selecionaAntendimento()
    mascaras()

    
});
