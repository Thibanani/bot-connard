

function jouer_tour(tab_grille,reaction_1,joueur_actif,joueur_1,gagant){

  erreur = 0;

  if((reaction_1 = '1️⃣')&&(tab_grille[0][0]=='|      ')){//Vérifier si ligne complète
    //poser le simbole
    ligne = 0;
    for(i=tab_grille[0].lenght-1;i>=0;i--){
      if((ligne==0)&&(tab_grille[0][i]=='|      ')){
        ligne = i;
      }
    }
    if (joueur_actif == joueur_1){
      tab_grille[0][ligne]=='|❎';
    }
    else {
      tab_grille[0][ligne]=='|⭕ ';
    }
   }
   else if((reaction_1 = '2️⃣')&&(tab_grille[1][0]=='|      ')){//Vérifier si ligne complète
     //poser le simbole
     ligne = 0;
     for(i=tab_grille[1].lenght-1;i>=0;i--){
       if((ligne==0)&&(tab_grille[1][i]=='|      ')){
         ligne = i;
       }
     }
     if (joueur_actif == joueur_1){
       tab_grille[1][ligne]=='|❎';
     }
     else {
       tab_grille[1][ligne]=='|⭕ ';
     }
   }
   else if((reaction_1 = '3️⃣')&&(tab_grille[2][0]=='|      ')){//Vérifier si ligne complète
     //poser le simbole
     ligne = 0;
     for(i=tab_grille[2].lenght-1;i>=0;i--){
       if((ligne==0)&&(tab_grille[2][i]=='|      ')){
         ligne = i;
       }
     }
     if (joueur_actif == joueur_1){
       tab_grille[2][ligne]=='|❎';
     }
     else {
       tab_grille[2][ligne]=='|⭕ ';
     }
   }
   else if (reaction_1 = '🛑'){
     fin = 1;
     gagant = joueur[joueur_prec];

   }
   else {
     erreur = 1;
   }

   return erreur;
}
