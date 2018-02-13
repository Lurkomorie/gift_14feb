class poem {
    constructor (name, text, author){
        this.name = name;
        this.author = author;
        this.text = text;
    }
}


var app = new Vue({
    el: '#poetry',
    data: {
        poems : [
            new poem(
                'The Last Love',

                'Oh, how, in the ending years\n'+
                'Is love more tender and superstitious -\n'+ 
                'O shine! O shine, my parting rays\n'+
                'Of the evening sun, of the last heart wishes!\n\n'+
                
                'The darkness cuts half of the sky;\n'+
                'And only the West has the roving glow,\n'+
                'Oh, time of evening, do not fly!\n'+
                'Enchantment, be prolonged and slow!\n\n'+
                
                'Let blood in veins has a thinner staff,\n'+
                'But a heart preserves the gentle passion - \n'+
                'O you, my last and tender love,\n'+
                'You are my bliss and desperation. \n',
            
                'Fyodor Ivanovich Tyutchev'
            ),
            new poem(
                'Sonnet 47',

                'Betwixt mine eye and heart a league is took,'+
                'And each doth good turns now unto the other:'+
                'When that mine eye is famished for a look,'+
                'Or heart in love with sighs himself doth smother,'+
                'With my love\'s picture then my eye doth feast,'+
                'And to the painted banquet bids my heart;'+
                'Another time mine eye is my heart\'s guest,'+
                'And in his thoughts of love doth share a part.'+
                'So either by thy picture or my love,'+
                'Thyself, away, art present still with me,'+
                'For thou not farther than my thoughts canst move,'+
                'And I am still with them, and they with thee;'+
                'Or if they sleep, thy picture in my sight'+
                'Awakes my heart to heart\'s and eye\'s delight.',

                'William Shakespeare'
            )
        ],
        currentPoem : 0
    },
    methods: {
        changePoem: function(poem){
            this.currentPoem = this.poems[poem];
        }
    },
    computed: {
        current(){
            return this.poems[this.currentPoem];
        }
    }

})