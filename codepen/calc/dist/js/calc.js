$(document).ready(function() {
  var ans = '',
      calc = '',
      clear = false,
      textbox = $('.textbox');

  $('button').click(function() {
    var text = $(this).attr('value');
    if(parseInt(text, 10) == text || text === '.' || text === '/' || text === '*' || text === '-' || text === '+' || text === '%') {
      if(clear === false) {
        calc += text;
        textbox.val(calc);
      } else {
        calc = text;
        textbox.val(calc);
        clear = false;
      }
    }
    if(text === 'AC') {
      calc = '';
      textbox.val('');
    } else if(text === 'CE') {
      calc = calc.slice(0, -1);
      textbox.val(calc);
    } else if(text === 'And') {
      calc = textbox.val();
      textbox.val(calc);
      clear = false;
    } else {
      switch(text) {
        case '*':

      }
    }
  });
});
