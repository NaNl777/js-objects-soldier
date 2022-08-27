const soldier = {
    name: 'Халк',
    health: 10,
    weapon: {
        name: 'ПП',
        bullet: 30,
    },
    supplies: 3,

    fire: function () { 
      if(this.weapon.bullet > 0) {
         this.weapon.bullet--;
          console.log('Fire-fire! Die creatures') 
    }
      else {
         console.log('Magazine empty, reload your weapon')
      }
    },

    recharge: function () { 
        
        if(this.supplies > 0) {
        this.weapon.bullet = 30;
        this.supplies -= 1;
            console.log('Reloading....') ;
        } else {
            console.log("Supplies run out!! I don't have supplies :(")
        }
    },
    hurt: function () {
        if (this.health > 0) {
            this.health -= 1
            console.log("I got shot, but i haven't give up!")
        } else {
            console.log('You dead...')
            return false
        }
     },
};