$(document).ready( function () {   
    var x = document.getElementById('text');
    x.className -= ' text'
    x.className += ' text2'
    setTimeout( function(){
        x.className -= ' text2'
        x.className += ' text3'
    },5000)

    setTimeout(function(){
        setTimeout(function(){
            x.className -= ' text3'
                       
            $('#text').empty();
            x.className += ' text4'
            x.textContent += 'It is our 5 month'
            // 
        },5000)
    }, 5000)

    setTimeout(function(){
        x.className -= ' text4'
        x.className += ' text5'
        $("#text").fadeOut('1400')
        x.className -= ' text5'
        x.className += ' text6'
        setTimeout(function(){$("#text").empty()},500)
        
        setTimeout (function(){
            x.textContent += 'and'
            setTimeout(function(){$("#text").fadeIn('5000')},1000)
            setTimeout(function(){
                $("#text").fadeOut('5000')
                setTimeout(function(){$("#text").empty()},500)
                setTimeout (function(){
                    x.textContent += 'I am really glad that one day I have met you'
                    setTimeout(function(){$("#text").fadeIn('5000')},1000)
                    setTimeout(function(){
                        $("#text").fadeOut('5000')
                        setTimeout(function(){$("#text").empty()},500)
                        setTimeout (function(){
                            x.textContent += 'You are the most beautiful girl in whole world'
                            setTimeout(function(){$("#text").fadeIn('5000')},1000)
                            setTimeout(function(){
                                $("#text").fadeOut('5000')
                                setTimeout(function(){$("#text").empty()},500)
                                setTimeout (function(){
                                    x.textContent += 'Doesnt even matter what weather is outside'
                                    setTimeout(function(){$("#text").fadeIn('5000')},1000)
                                    setTimeout(function(){
                                        $("#text").fadeOut('5000')
                                        setTimeout(function(){$("#text").empty()},500)
                                        setTimeout (function(){
                                            x.textContent += 'Every time when I am with you I am so happy'
                                            setTimeout(function(){$("#text").fadeIn('5000')},1000)
                                            setTimeout(function(){
                                                $("#text").fadeOut('5000')
                                                setTimeout(function(){$("#text").empty()},500)
                                                setTimeout (function(){
                                                    x.textContent += 'Sometimes I still cant believe that You are my girlfriend'
                                                    setTimeout(function(){$("#text").fadeIn('5000')},1000)
                                                    setTimeout(function(){
                                                        $("#text").fadeOut('5000')
                                                        setTimeout(function(){$("#text").empty()},500)
                                                        setTimeout (function(){
                                                            x.textContent += 'I love holding your hand when Its cold'
                                                            setTimeout(function(){$("#text").fadeIn('5000')},1000)
                                                            setTimeout(function(){
                                                                $("#text").fadeOut('5000')
                                                                setTimeout(function(){$("#text").empty()},500)
                                                                setTimeout (function(){
                                                                    x.textContent += 'I love your smile when I am telling stupid jokes'
                                                                    setTimeout(function(){$("#text").fadeIn('5000')},1000)
                                                                    setTimeout(function(){
                                                                        $("#text").fadeOut('5000')
                                                                        setTimeout(function(){$("#text").empty()},500)
                                                                        setTimeout (function(){
                                                                            x.textContent += 'I love looking at you when u trying to explain to me something in turkish'
                                                                            setTimeout(function(){$("#text").fadeIn('5000')},1000)
                                                                            setTimeout(function(){
                                                                                $("#text").fadeOut('5000')
                                                                                setTimeout(function(){$("#text").empty()},500)
                                                                                setTimeout (function(){
                                                                                    x.textContent += 'And when ur little soft hands touching me'
                                                                                    setTimeout(function(){$("#text").fadeIn('5000')},1000)
                                                                                    setTimeout(function(){
                                                                                        $("#text").fadeOut('5000')
                                                                                        setTimeout(function(){$("#text").empty()},500)
                                                                                        setTimeout (function(){
                                                                                            x.textContent += 'And obviously ur cute lil nose <3'
                                                                                            setTimeout(function(){$("#text").fadeIn('5000')},1000)
                                                                                            setTimeout(function(){
                                                                                                $("#text").fadeOut('5000')
                                                                                                setTimeout(function(){$("#text").empty()},500)
                                                                                                setTimeout (function(){
                                                                                                    x.textContent += 'You are my whole world!'
                                                                                                    setTimeout(function(){$("#text").fadeIn('5000')},1000)
                                                                                                    setTimeout(function(){
                                                                                                        $("#text").fadeOut('5000')
                                                                                                        setTimeout(function(){$("#text").empty()},500)
                                                                                                        setTimeout (function(){
                                                                                                            x.textContent += 'Lets live the most beautiful life'
                                                                                                            setTimeout(function(){$("#text").fadeIn('5000')},1000)
                                                                                                            setTimeout(function(){
                                                                                                                $("#text").fadeOut('5000')
                                                                                                                setTimeout(function(){$("#text").empty()},500)
                                                                                                                setTimeout (function(){
                                                                                                                    x.textContent += 'And make babies!'
                                                                                                                    setTimeout(function(){$("#text").fadeIn('5000')},1000)
                                                                                                                    setTimeout(function(){
                                                                                                                        $("#text").fadeOut('5000')
                                                                                                                        setTimeout(function(){$("#text").empty()},500)
                                                                                                                        setTimeout (function(){
                                                                                                                            x.textContent += 'Sen benim minik kelebeğimsin  ^-^ '
                                                                                                                            setTimeout(function(){$("#text").fadeIn('5000')},1000)
                                                                                                                            setTimeout(function(){
                                                                                                                                $("#text").fadeOut('5000')
                                                                                                                                setTimeout(function(){$("#text").empty()},500)
                                                                                                                                setTimeout (function(){
                                                                                                                            x.textContent += 'I love you with all my heart'
                                                                                                                            setTimeout(function(){$("#text").fadeIn('5000')},1000)
                                                                                                                            setTimeout(function(){
                                                                                                                                $("#text").fadeOut('5000')
                                                                                                                                setTimeout(function(){$("#text").empty()},500)
                                                                                                                                
                                                                                                                            },4000)
                                                                                                                        },800)
                                                                                                                            },4000)
                                                                                                                        },800)
                                                                                                                    },4000)
                                                                                                                },800)
                                                                                                            },4000)
                                                                                                        },800)
                                                                                                    },4000)
                                                                                                },800)
                                                                                            },4000)
                                                                                        },800)
                                                                                    },4000)
                                                                                },800)
                                                                            },4000)
                                                                        },800)
                                                                    },4000)
                                                                },800)
                                                            },4000)
                                                        },800)
                                                    },4000)
                                                },800)
                                            },4000)
                                        },800)
                                    },4000)
                                },800)   
                            },4000)
                        },800)
                    },4000)
                },800)
            },3000)
        },800)
    },15000)
} )    