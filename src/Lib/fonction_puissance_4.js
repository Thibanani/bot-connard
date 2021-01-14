
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
      tab_grille[0][ligne]=='|🔴';
    }
    else {
      tab_grille[0][ligne]=='|🟠';
    }
   }
   if((reaction_1 = '2️⃣')&&(tab_grille[1][0]=='|      ')){//Vérifier si ligne complète
     //poser le simbole
     ligne = 0;
     for(i=tab_grille[1].lenght-1;i>=0;i--){
       if((ligne==0)&&(tab_grille[1][i]=='|      ')){
         ligne = i;
       }
     }
     if (joueur_actif == joueur_1){
       tab_grille[1][ligne]=='|🔴';
     }
     else {
       tab_grille[1][ligne]=='|🟠';
     }
   }
   if((reaction_1 = '3️⃣')&&(tab_grille[2][0]=='|      ')){//Vérifier si ligne complète
     //poser le simbole
     ligne = 0;
     for(i=tab_grille[2].lenght-1;i>=0;i--){
       if((ligne==0)&&(tab_grille[2][i]=='|      ')){
         ligne = i;
       }
     }
     if (joueur_actif == joueur_1){
       tab_grille[2][ligne]=='|🔴';
     }
     else {
       tab_grille[2][ligne]=='|🟠';
     }
   }
   if((reaction_1 = '4️⃣')&&(tab_grille[3][0]=='|      ')){//Vérifier si ligne complète
     //poser le simbole
     ligne = 0;
     for(i=tab_grille[3].lenght-1;i>=0;i--){
       if((ligne==0)&&(tab_grille[3][i]=='|      ')){
         ligne = i;
       }
     }
     if (joueur_actif == joueur_1){
       tab_grille[3][ligne]=='|🔴';
     }
     else {
       tab_grille[3][ligne]=='|🟠';
     }
   }
   if((reaction_1 = '5️⃣')&&(tab_grille[4][0]=='|      ')){//Vérifier si ligne complète
     //poser le simbole
     ligne = 0;
     for(i=tab_grille[4].lenght-1;i>=0;i--){
       if((ligne==0)&&(tab_grille[4][i]=='|      ')){
         ligne = i;
       }
     }
     if (joueur_actif == joueur_1){
       tab_grille[4][ligne]=='|🔴';
     }
     else {
       tab_grille[4][ligne]=='|🟠';
     }
   }
   if((reaction_1 = '6️⃣')&&(tab_grille[5][0]=='|      ')){//Vérifier si ligne complète
     //poser le simbole
     ligne = 0;
     for(i=tab_grille[5].lenght-1;i>=0;i--){
       if((ligne==0)&&(tab_grille[5][i]=='|      ')){
         ligne = i;
       }
     }
     if (joueur_actif == joueur_1){
       tab_grille[5][ligne]=='|🔴';
     }
     else {
       tab_grille[5][ligne]=='|🟠';
     }
   }
   if (reaction_1 = '🛑'){
     fin = 1;
     gagant = joueur[joueur_prec];

   }
   else {
     erreur = 1;
   }

   return erreur;
}
