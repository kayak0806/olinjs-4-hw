$(function() {

    $('#newTweet').on('submit', function(){
        $.post('/tweet',$('#newTweet').serialize());
        $.get('/tweets')
        $('#aTweet').val('');
        return false;

    });

});
