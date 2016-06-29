var chat = [];
respondTo = function(input) {
  
    input = input.toLowerCase();
    
    if(input.match('(hi|hello|hey|hola|howdy)(\\s|!|\\.|$)'))
      return "Hello " + chat.slice(-1).pop().user;
    
    if(input.match('what[^ ]* up') || input.match('sup') || input.match('how are you'))
      return "The sky...";
    
    if(input.match(input.match('how are you'))
      return "I am a bot. I can only be good. How are you?";
    
    if(input.match('l(ol)+') || input.match('(ha)+(h|$)') || input.match('lmao')|| input.match('xD'))
      return "what's so funny?";
    
    if(input.match('^no+(\\s|!|\\.|$)'))
      return "don't be such a negative nancy :(";
    
    if(input.match('(cya|bye|see ya|ttyl|talk to you later)'))
      return "alright, see you around";
    
    if(input.match('(dumb|stupid|is that all)'))
      return ["I would not be talking "+ chat.slice(-1).pop().user];
    
    if(input == 'noop')
      return;
    
    return input + " what?";
  }
  function gotMessage() {
    if (chat.slice(-1).pop().user !== "bot") {
      socket.emit('newMessage',respondTo(chat.slice(-1).pop().message));
    }
    }
