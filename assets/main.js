/* MAIN JAVASCRIPT M4SS */

var num_bg_images = 2;
var current_bg_image = 1;

function change_background_image()
{
    if(current_bg_image + 1 > num_bg_images) {
        current_bg_image = 1;
    } else {
        current_bg_image += 1;
    }
    var body = document.getElementsByTagName('body')[0];
    var new_src = "/assets/images/" + current_bg_image + ".jpg";
    body.style.backgroundImage = 'url(' + new_src + ')';
}

function change_intervallo()
{
    change_font_family();
}

function change_font_family()
{
    var lObj = new Letter("l_I");
    lObj.startMove();

        


//    var interval_mover = setInterval(() => {
//    }, 100);
// x.style.fontFamily = 'Ubuntu';
    // console.log('call change_font_family');
}


    /*
     *  Letters static class
     *  Manage "Intervallo" changes
     */
    var Letters = {

        // set letter live changing
        letter_live: null,

        // list of letters
        letters_order_change: {
            'o': ['Rajdhani', '16px'],
            'e': ['Ubuntu', '26px']
        },

        changeNextLetter: function(letter) {
            this.letter_live = idl;
            console.log("Letter Live: '" + this.letter_live + "'");
        },


        moveLetterDown: function(idl) {
            var elementid = document.getElementById(idl);
            var topVal = parseInt(elementid.style.top, 10);
            elementid.style.top = (topVal + 1) + "px";
            console.log(topVal);
        },

    }

    /*
    *  A SINGLE Letter object
    */
    function Letter (idl) {
        var self = this;
        self.idl = idl;
        self.startLive_Interval = false;
        self.elementid = document.getElementById(idl);

        self.moveLetterDown = function() {
            var topVal = parseInt(self.elementid.style.top, 10);
            self.elementid.style.top = (topVal + 1) + "px";
            if(topVal > 50) 
            {
                self.stopMove();
            }
        };

        // START to move letter down
        self.startMove = function() {
            if(self.startLive_Interval === false) {
                self.startLive_Interval = window.setInterval(self.moveLetterDown, 50);
            }
        };

        // STOP to move letter down
        self.stopMove = function() {
            if(self.startLive_Interval !== false) {
                // stop interval
                clearInterval(self.startLive_Interval);
                self.startLive_Interval = false;
            }
        };        
    };
