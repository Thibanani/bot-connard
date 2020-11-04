

//  Fonction attribution des loup_Garous (Tableau des jouers,nbr de LG) retourne( le tab des rang des LG)
function attrib_lg(tab_J, nbr_lg){
  var lg = [];
  var i = 0;
  var var_temp;

  do{
    var_temp = 0;
    numéroJ_lg = Math.floor(Math.random() * tab_J.length)

    for (y=0; y<=(nbr_lg-1); y++){
      if ((y != i) && (numéroJ_lg == lg[y])){
        var_temp = 1;
      }
    }

    if (var_temp == 0){
      lg[i] = numéroJ_lg;
      i++;
    }

  } while (i <=(nbr_lg-1));

  return lg
}

module.exports.attrib_lg
