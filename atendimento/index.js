$(document).ready(function () {

    function camposOcultos() {
        $(".cpf ,.cnpj").hide()
    }
    function botoes() {
        $(".botao").hide()
    }

    function setarAtendente() {
        $(".atendente").val("Jonas Henrique")
    }


    function data() {
        var data = new Date();
        var ano = data.getFullYear()
        var mes = data.getMonth() + 1;
        var dia = data.getDate();
        $(".data").val(dia + "/" + mes + "/" + ano)

    }

    function selecionaAntendimento() {
        $("#dbug").click(function () {
            $("#vainet").hide()
            $("#netturbo").hide()
            $(".botao").show()
            $(".cpf").show()
            $(".cnpj").show()


        })
        $("#vainet").click(function () {
            $("#dbug").hide()
            $("#netturbo").hide()
            $(".botao").show()
            $(".cpf").show()
            $(".cnpj").show()
        })
        $("#netturbo").click(function () {
            $("#vainet").hide()
            $("#dbug").hide()
            $(".botao").show()
            $(".cpf").show()
            $(".cnpj").show()
        })
    }

    function mascaras() {

         

         
        /*var campocpf = $(".campocpf")
        campocpf.mask('000.000.000-00',{reverse:true})
        var campocnpj = $(".campocnpj")
        campocnpj.mask("00.000.000/0000-00",{reverse:true})*/

    }

    function recarregar() {
        $(".botao").click(function () {

            location.reload()
        })
    }




    camposOcultos()
    botoes()
    setarAtendente()
    data()
    selecionaAntendimento()
    mascaras()

});
