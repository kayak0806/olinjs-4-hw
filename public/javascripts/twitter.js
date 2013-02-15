$(function() {

    $('#newTweet').on('submit', function(){
        $.post('/tweet',$('#newTweet').serialize());
        $('#aTweet').val('');
        return false;

    });

    setInterval(function(){
        $.get('/tweets', function(html){
            $('div.allTweet').replaceWith(html);
        }) //$.get('/tweets')

    },2000)

});
