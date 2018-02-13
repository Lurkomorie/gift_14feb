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

                'Betwixt mine eye and heart a league is took,\n'+
                'And each doth good turns now unto the other:\n'+
                'When that mine eye is famished for a look,\n'+
                'Or heart in love with sighs himself doth smother,\n'+
                'With my love\'s picture then my eye doth feast,\n'+
                'And to the painted banquet bids my heart;\n'+
                'Another time mine eye is my heart\'s guest,\n'+
                'And in his thoughts of love doth share a part.\n'+
                'So either by thy picture or my love,\n'+
                'Thyself, away, art present still with me,\n'+
                'For thou not farther than my thoughts canst move,\n'+
                'And I am still with them, and they with thee;\n'+
                'Or if they sleep, thy picture in my sight\n'+
                'Awakes my heart to heart\'s and eye\'s delight.\n',

                'William Shakespeare'
            ),
            new poem(
                'To D',

                'In thee, I fondly hop’d to clasp\n'+
                'A friend, whom death alone could sever;\n'+
                'Till envy, with malignant grasp,\n'+
                'Detach’d thee from my breast for ever.\n\n'+
                
                'True, she has forc’d thee from my breast,\n'+
                'Yet, in my heart thou keep’st thy seat;\n'+
                'There, there, thine image still must rest,\n'+
                'Until that heart shall cease to beat.\n\n'+
                
                'And, when the grave restores her dead,\n'+
                'When life again to dust is given,\n'+
                'On thy dear breast I’ll lay my head—\n'+
                'Without thee! where would be my Heaven?',

                'George Gordon Byron'
            )
        ],
        currentPoem : 0
    },
    methods: {
        "changePoem": function changePoem(poem){
            this.currentPoem = poem;
        },
        "num_pages": function num_pages() {
            return this.poems.length;
        }
    },
    computed: {
        current(){
            return this.poems[this.currentPoem];
        }
    }

})