// Exemplo de JavaScript inicial para desativar envios de formulário, se houver campos inválidos.
(function() {
    'use strict';
    window.addEventListener('load', function() {
        // Pega todos os formulários que nós queremos aplicar estilos de validação Bootstrap personalizados.
        var forms = document.getElementsByClassName('needs-validation');
        // Faz um loop neles e evita o envio
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

//inicializa os popovers
$(function() {
    $('[data-toggle="popover"]').popover()
})

$(function() {
    $('[data-toggle="popover"]').popover({ html: true })
})

//manipula fotos

function changecity() {
    let region = document.getElementById("regiao")
    region.innerHTML = "Tianguá"
}



var dragMe = document.getElementById("drag_me");
/* o x inicial do drag*/
dragOfX = 0;
/* o y inicial do drag */
dragOfY = 0;

/* ao segurar o elemento */
function dragStart(e) {
    /* define o x inicial do drag */
    dragOfX = e.pageX - dragMe.offsetLeft;
    /* define o y inicial do drag */
    dragOfY = e.pageY - dragMe.offsetTop;

    /* adiciona os eventos */
    addEventListener("mousemove", dragMove);
    addEventListener("mouseup", dragEnd);
}

/* ao ser arrastado */
function dragMove(e) {
    /* atualiza a posição do elemento */
    dragMe.style.left = (e.pageX - dragOfX) + 'px';
    dragMe.style.top = (e.pageY - dragOfY + 200) + 'px';
}

/* ao terminar o drag */
function dragEnd() {
    /* remove os eventos */
    removeEventListener("mousemove", dragMove);
    removeEventListener("mouseup", dragEnd);
}

/* adiciona o evento que começa o drag */
dragMe.addEventListener("mousedown", dragStart);