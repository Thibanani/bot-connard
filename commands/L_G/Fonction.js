

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

module.exports.attrib_lg = attrib_lg;

//  Fonction attribution des voyantes (Tableau des jouers,nbr de voy, Tableau des rang LG) retourne( le tab des rang des voy)
function attrib_voy(tab_J, nbr_voy, lg){
  var voy = [];
  var i = 0;
  var var_temp;

  do{
    var_temp = 0;
    numéroJ_voy = Math.floor(Math.random() * tab_J.length)

    for (y=0; y<=(nbr_voy-1); y++){
      if ((y != i) && ((numéroJ_voy == voy[y])||(numéroJ_voy == lg[y]))){
        var_temp = 1;
      }
    }

    if (var_temp == 0){
      voy[i] = numéroJ_voy;
      i++;
    }

  } while (i <=(nbr_voy-1));

  return voy
}

module.exports.attrib_voy = attrib_voy;
