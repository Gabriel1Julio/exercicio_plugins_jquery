$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    });
    
    $('#cep').mask('00000-000', {
        placeholder: '00000-000'
    });

    $.validator.addMethod("CEP", function(cep_number, element) {
        cep_number = cep_number.replace(/\D/g, ""); 
        return cep_number.length == 8;
    }, "Por favor, insira um número de CEP válido");

    $.validator.addMethod("phoneBR", function(phone_number, element) {
        phone_number = phone_number.replace(/\D/g, ""); 
        return phone_number.length == 11;
    }, "Por favor, insira um número de telefone válido");

    $.validator.addMethod("fullname", function(value, element) {
        return value.trim().split(' ').length >= 2;
    }, 'Por favor, insira seu nome completo');

    $('form').validate({
        rules: {
            nome: {
                required: true,
                fullname: true
            },
            telefone: {
                required: true,
                phoneBR: true
            },
            email: {
                required: true,
                email: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true,
                CEP: true
            }
        }, 
        messages: {
            nome: 'Por favor, insira seu nome completo',
            telefone: 'Por favor, insira corretamente seu número de telefone',
            email: 'Por favor, insira corretamente seu E-mail',
            endereco: 'Por favor, insira corretamente seu endereço',
            cep: 'Por favor, insira corretamente seu CEP'
        },
        submitHandler: function(form){
            alert('Formulário enviado com sucesso!');
            form.reset();
        },
        invalidHandler: function(event, validator){
            const numeroInvalidos = validator.numberOfInvalids();
            if(numeroInvalidos){
                alert(`Existem ${numeroInvalidos} campos incorretos!`)
            }
        }
    });
})
