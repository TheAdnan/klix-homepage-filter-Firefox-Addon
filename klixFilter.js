function filtriraj(){
   setTimeout(function(){
    
   if(document.querySelector("div.container") != null){
		
		document.querySelector("div.block.struct.struct_6").remove(); //Auto
		document.querySelector("div.block.struct.struct_7").remove(); //Lifestyle
		document.querySelector("div.block.struct.struct_8").remove(); //Biznis
		document.querySelector("div.block.struct.struct_2").remove(); //Magazin
		document.querySelector("div.block.struct.nightlifeBlock.block-colored.bg_nightlife").remove();
		 } else {
       filtriraj();
      }
    },1000);
}



filtriraj();


