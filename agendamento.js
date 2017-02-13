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
			
			//Alaterar apenas a própria marcação. Lembrar da consulta do banco ter upperCase
			if (input.attr('matricula') == matricula.toUpperCase() || input.attr('matricula') !== ''){
			
    			// Ligar ou desligar
    			if ($(this).prop('checked')){ 
    			    input.closest(".row").find('.nome').text(nome + ' - ' + matricula);
    			    //marca a matricula resservada 
    			    $(this).attr('matricula', matricula);
    			    
    			}
    			else{
    			   input.closest(".row").find('.nome').text('');
    			     //desmarca a matricula resservada 
    			    $(this).attr('matricula', ' ');
    			}
    			
    			// Salvar/alterar marcação 
    			
    			dia = input.closest(".panel-body").attr('id');
    			//console.log(dia);
    			//$.post()
			}else{ 
			    alert('Não é permitido alterar agendamento de aleio.');
			    
			}
			
        });
        
    });