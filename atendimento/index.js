$(document).ready(function () {

    function camposOcultos() {
        $(".cpfcnpj").hide()
    }
    function botoes() {
        $(".botao").hide()
    }

    function setarAtendente() {
        $(".atendente").val("Jonas Henrique")
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
            $(".botao").show()
            $(".cpfcnpj").show()
        })
        $("#vainet").click(function () {
            $("#dbug").hide()
            $("#netturbo").hide()
            $(".botao").show()
            $(".cpfcnpj").show()

        })
        $("#netturbo").click(function () {
            $("#vainet").hide()
            $("#dbug").hide()
            $(".botao").show()
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


    camposOcultos()
    botoes()
    setarAtendente()
    data()
    selecionaAntendimento()
    mascaras()

});
