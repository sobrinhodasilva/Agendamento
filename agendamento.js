/**
* Agendamento 
* Roberto Sobrinho da Silva 
* sobrinhodasilva@gmail.con
* Arquivo JavaScript 
*/


$( document ).ready(function() {
    
    // Bloco html de cada horário 
        function horario(h) { 
            return ('<div class="row"> '+
                        '  <div class="col-md-2 hora">'+h+'</div> '+
                        '     <div class="col-md-2"><input type="checkbox" name="'+h+'" ></div>'+
                        '    <div class="col-md-8 nome"> </div>'+
                        '</div>'
                    );
        }
        for (i = 10 ; i<=17 ; i++){
            $('.panel-body').append( horario(i+':00') );
            $('.panel-body').append( horario(i+':30') );
        }
        
        
        // Marcar / Desmarcar 
        $('input').change(function() {
			input = $(this);
			// Ligar ou desligar
			if ($(this).prop('checked')){ 
			    input.closest(".row").find('.nome').text(nome + ' - ' + matricula);
			}
			else{
			   input.closest(".row").find('.nome').text('');
			}
			
			// Salvar/alterar marcação 
			
			dia = input.closest(".panel-body").attr('id');
			//console.log(dia);
			//$.post()
        });
        
    });