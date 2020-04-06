/* MAIN JAVASCRIPT M4SS */

    var num_bg_images = 4;
    var current_bg_image = 1;
    var letters = ['I', 'n', 't', 'e', 'r', 'v', 'a', 'l', 'l', 'o'];

    function change_background_image()
    {
        var prev_current_bg_image = current_bg_image;
        if(current_bg_image + 1 > num_bg_images) {
            current_bg_image = 1;
        } else {
            current_bg_image += 1;
        }
        
        // move DOWN the previous id
        document.getElementById('si_' + prev_current_bg_image).style.opacity = "0";
        // move UP the current id
        document.getElementById('si_' + current_bg_image).style.opacity = "1";
    }

    function write_letter_of_main_text(i)
    {
        var lettera = letters[i];
        var div_lettera = '<span id="l_' + 
                            i + 
                            '" style="top: 0px;">' + lettera + 
                            '</span></div>';
        document.getElementById('main_text').innerHTML += div_lettera;
    }


    /**
     * Change Letters randomly
     */

    function change_intervallo()
    {
        const randomLetterKey = Math.floor(Math.random() * letters.length);
        var lObj = new Letter(randomLetterKey);
        lObj.startChange();
    }


    /*
    *  A SINGLE Letter object
    */
    function Letter (idl) {
        
        var self = this;

        self.font_families = [ 
            'IBM Plex Mono',
            'Playfair Display',
            'Rajdhani',
            'Roboto Mono',
            'Ubuntu', 
            'Zilla Slab'
        ];
        self.font_styles = [
            'italic',
            'normal'
        ];
    
        self.idl = idl;
        self.resetPos = 0;
        self.bottomPos = 80;
        self.topPos = -80;

        self.elementid = document.getElementById("l_" + idl);

        self.startChange = function () {
            setTimeout( () => {
                self.moveLetterDown();
            }, 50);
            setTimeout( () => {
                self.changeLetterType();
            }, 1000);
            setTimeout( () => {
                self.moveLetterUp();
            }, 1000);

        }

        // MOVE letter DOWN
        self.moveLetterDown = function() {
            //console.log("moveLetterDown");
            self.elementid.style.top = self.bottomPos + "px";
        };

        // CHANGE FONT...
        self.changeLetterType = function() {
            var randomFont = self.font_families[Math.floor(Math.random() * self.font_families.length)];
            self.elementid.style.fontFamily = randomFont;
            var randomStyle = self.font_styles[Math.floor(Math.random() * self.font_styles.length)];
            self.elementid.style.fontStyle = randomStyle;
            console.log("Change letter '" + window.letters[self.idl] + "' - Font: " + randomFont + " - Style: " + randomStyle);
        };

        // MOVE letter UP
        self.moveLetterUp = function () {
            //console.log("moveLetterUp");
            self.elementid.classList.add('notransition'); // Disable transitions
            self.elementid.style.top = self.topPos + "px";
            self.elementid.offsetHeight; // Trigger a reflow, flushing the CSS changes
            self.elementid.classList.remove('notransition'); // Re-enable transitions
            self.elementid.style.top = self.resetPos + "px";
        }


    };
