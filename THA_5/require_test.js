class Namez {
	methodz() {
	    return "This is a method or function which prints or does literally anything, I could give it any name.";
	}
	methodz2() {
	    return "can have multiple methods, but we return the one we need, this might be used only for internal working and doesnt really needs to be in index.js";
	}
    
    }
    
    module.exports = Namez;

// class FingerChips {
// 	print() {
// 	  console.log("In require_text.js, enjoying french fries :p");
// 	}
//       }
      
//       class Chai {
// 	print() {
// 	  console.log("Chai peelo frandss.");
// 	}
//       }
      
//       module.exports = {Chai, FingerChips};

//       /* module.exports = Chai, FingerChips; does not work, only chai gets exported
//       Hence, output-> 
//       Chai peelo frandss.
//       undefined
//       Chai peelo frandss.
//       undefined */
//       // module.exports = FingerChips;
      
//       /*
//       module.exports = Chai;
//       module.exports = FingerChips;
//       Upon writing like this the latest class exported  is considered by require.
//       Hence, output-> 
//       In require_text.js, enjoying french fries :p
//       undefined
//       In require_text.js, enjoying french fries :p
//       undefined
//       */