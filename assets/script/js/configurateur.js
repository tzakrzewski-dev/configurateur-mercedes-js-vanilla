function lancementConfigurateur() {
  //Declaration des variables

  let budgetMin = 0; //Stockage du budget mini -->Type: number
  let budgetMax = 0; //Stockage du budget maxi -->Type: number
  let budgetOption = 0; // a voir si utilisé -->Type: number
  let selectModel = ''; //selecteur du nom du modèle -->Type: string
  let selectType = '';
  let nomModel = []; //Stockage de la sélection du modèle --> Array
  let syntheseOption = []; //Stockage de la sélection des options --> Array
  let arrayOptionPrice = []; // Stockage du prix des options

  let prixVehicule = 0; //Stockage du prix du véhicule
  let prixOption = 0; //Stockage du prix total des options
  let prixTotal = 0; //Stockage du prix total

  //fonction pour renseigner budget mini
  function inputBudgetMin() {
    alert(
      'Bonjour ' +
        '\r' +
        'Bienvenue dans notre configurateur de vehicule Mercedes'
    );
    budgetMin = prompt('Saisir votre budget minimum !');
    console.log(budgetMin);
    while (budgetMin == 0) {
      budgetMin = prompt('Saisir votre budget minimum !');
      console.log(budgetMin);
      //return budgetMin;
    }
  }

  //fonction pour renseigner budget maxi
  function inputBudgetMax() {
    budgetMax = prompt('Saisir votre budget maximum!');
    console.log(budgetMax);
    if (budgetMax <= budgetMin) {
      alert(
        'Vous avez saisie un montant inférieur au budget mini' +
          '\r' +
          'Vous avez saisie un budget mini de :' +
          budgetMin +
          ' €'
      );
      inputBudgetMax(); //Relance de la fonction pour saisir budget maxi
    } else {
      while (budgetMax == 0) {
        budgetMax = prompt('Saisir votre budget maximum !');
        console.log(budgetMax);
        return;
      }
    }
  }

  //function choix: par  modèle/ par type/ début
  function actionModeleType() {
    let choixOption;
    choixOption = prompt('Saisissez votre choix: modèle, type ou début');

    switch (true) {
      case choixOption == 'modèle': {
        console.log(choixOption);
        choixModele(); //Lancement de la fonction pour lister les modèles
        break;
      }
      case choixOption == 'type': {
        console.log(choixOption);
        choixType(); //lancement de la fonction pour choisir par type
        break;
      }
      case choixOption == 'début': {
        console.log(choixOption);
        break;
      }
      default: {
        alert("Vous n'avez pas saisie une des réponses demandées");
        // relancement de la fonction pour définir la methode de selection des modèles
        actionModeleType();
        break;
      }
    }
    // Relance de Choix du modèle ou type ou début
    return;
  }

  //fonction  de filtre pour choix du modèle
  function choixModele() {
    // declaration des modèles
    let listModel = [
      {
        modele: 'Classe A',
        number: 1,
      },
      {
        modele: 'Classe C',
        number: 2,
      },
      {
        modele: 'Classe E',
        number: 3,
      },
      {
        modele: 'Classe S',
        number: 4,
      },
    ];

    // declaration des variables
    let optionList = listModel.map((mod) => mod.number + ':' + mod.modele);
    let resultModeleNumber = prompt(
      'Veuillez choisir votre modèle de véhicule :' + '\r' + optionList
    );

    switch (true) {
      case resultModeleNumber == 1: {
        alert("Vous avez choisi le modele : 'Classe A'");
        console.log(resultModeleNumber);
        selectModel = 'Classe A';
        listeVehicules(budgetMin, budgetMax, selectModel);
        break;
      }
      case resultModeleNumber == 2: {
        console.log(resultModeleNumber);
        alert("Vous avez choisi le modele : 'Classe C'");
        selectModel = 'Classe C';
        console.log(selectModel);
        listeVehicules(budgetMin, budgetMax, selectModel);
        break;
      }
      case resultModeleNumber == 3: {
        console.log(resultModeleNumber);
        alert("Vous avez choisi le modele : 'Classe E'");
        selectModel = 'Classe E';
        listeVehicules(budgetMin, budgetMax, selectModel);

        break;
      }
      case resultModeleNumber == 4: {
        console.log(resultModeleNumber);
        alert("Vous avez choisi le modele : 'Classe S'");
        selectModel = 'Classe S';
        listeVehicules(budgetMin, budgetMax, selectModel);
        break;
      }
      default:
        console.log(resultModeleNumber);
        alert("Vous n'avez pas choisi de modèle");
        choixModele();
    }
  }

  //fonction  de filtre pour choix par type ---// En cours d'écriture //A tester
  function choixType() {
    // declaration des modèles
    let listType = [
      {
        description: 'Compact',
        number: 1,
      },
      {
        description: 'Berline',
        number: 2,
      },
      {
        description: 'Suv-Tout terrains',
        number: 3,
      },
      {
        description: 'Monospaces',
        number: 4,
      },
    ];

    // declaration des variables
    let typeList = listType.map((type) => type.number + ':' + type.description); //Formatage des informations à afficher
    let resultTypeNumber = prompt(
      'Veuillez choisir votre modèle de véhicule :' + '\r' + typeList
    ); //Récupération de la valeur saisie utilisateur pour traitement des cas

    switch (true) {
      case resultTypeNumber == 1: {
        alert("Vous avez choisi le type : 'Compact'");
        console.log(resultTypeNumber);
        listeVehicules(budgetMin, budgetMax, selectModel, selectType); //Lancement de la fonction qui sort les modèles
        break;
      }
      case resultTypeNumber == 2: {
        alert("Vous avez choisi le type : 'Berline'");
        console.log(resultTypeNumber);
        listeVehicules(budgetMin, budgetMax, selectModel, selectType);
        break;
      }
      case resultTypeNumber == 3: {
        console.log(resultTypeNumber);
        alert("Vous avez choisi le type : 'Suv-Tout terrains'");
        console.log(selectType);
        listeVehicules(budgetMin, budgetMax, selectModel, selectType);
        break;
      }
      case resultTypeNumber == 4: {
        console.log(resultTypeNumber);
        alert("Vous avez choisi le type : 'Monospaces'");
        listeVehicules(budgetMin, budgetMax, selectModel, selectType);

        break;
      }

      default:
        console.log(resultTypeNumber);
        alert("Vous n'avez pas choisi de type identifié");
        choixType();
    }
    return choice;
  }

  //Liste des options pack
  function choixTypeOptionPack() {
    // declaration du packOption
    let listOptionPack = [
      {
        nom: "Pack d'assistance à la trajectoire",
        number: 1,
        prix: 400,
      },
      {
        nom: 'Pack rangement',
        number: 2,
        prix: 0,
      },
      {
        nom: 'Pack stationnement avec caméras panoramiques',
        number: 3,
        prix: 550,
      },
      {
        nom: 'Pack AIR BALANCE',
        number: 4,
        prix: 400,
      },
      {
        nom: 'Pack stationnement avec caméras panoramiques',
        number: 5,
        prix: 550,
      },
      {
        nom: 'Pack protection antivol',
        number: 6,
        prix: 550,
      },
    ];

    /**Début de déclaration des variables  */

    // Configuration du texte à afficher de la liste des options de listOptionPack
    let optionList = listOptionPack.map(
      (opt) => opt.number + ':' + opt.nom + ': ' + opt.prix + '€'
    );

    //Affichage et stockage du retour dans une variable
    let repUtilisateur = prompt(
      "Veuillez choisir votre pack d'option :" + '\r' + optionList
    );

    //Récupération du numéro saisie par utilisateur
    let number = listOptionPack
      .filter((opt) => opt.number == repUtilisateur)
      .map((opt) => opt.number);
    console.log(number); // récupère un repère ( 1,2,3 ....)

    //Rappel à l'utilisateur de sa sélection d'option'
    let choixUtilisateur = listOptionPack
      .filter((opt) => opt.number == number)
      .map(
        (opt) => opt.number + ' : ' + opt.nom + ': ' + opt.prix + ' €' //+ opt.prix + ' €'
      );
    console.log(choixUtilisateur); //Affiche le choix de l'option sélectionné avec numéro et désignation

    let optionPush = syntheseOption.push(choixUtilisateur); //push la sélection dans l'array synthèse option

    console.log(repUtilisateur); // reçoit le numéro de l'option sélectionné
    console.log(number); //recoit le numéro []
    console.log(optionPush); // reçoit le numéro de l'option sélectionné

    console.log(optionPush); //Vérification de la valeur dans le tableau la première option
    console.log(syntheseOption);

    //prix de l'option sélectionnée afficher dans variable
    let prixSelection = listOptionPack
      .filter((opt) => opt.number == number)
      .map((opt) => opt.prix);

    //Implémentation du prix de l'option dans le tableau ArrayOptionPrice
    console.log(prixSelection); // prix reçu du tableau des options
    let priceOptionPush = arrayOptionPrice.push(prixSelection); //push la sélection dans l'array synthèse option

    console.log(priceOptionPush);
    console.log(arrayOptionPrice);

    //somme des options
    for (var i = 0; i < prixSelection.length; i++) {
      prixOption += prixSelection[i];
    }
    prixTotal += prixOption; //implémentation du prix véhicule dans prix total

    console.log(prixOption);
    console.log(prixTotal);

    //Affichage à l'utilisateur du choix de son option
    repUtilisateur = prompt(
      'Vous avez choisi le ou les options suivantes  : ' +
        '\r' +
        choixUtilisateur +
        '\r' +
        'Le prix de votre sélection est de : ' +
        prixSelection +
        '€' +
        '\r' +
        'Le prix total du véhicule avec Options est désormais de : ' +
        prixTotal +
        '€' +
        '\r' +
        '\r' +
        "Souhaitez-vous ajouter d'autres options :" +
        '\r' +
        'oui ou non'
    );
    /*****************Fin de la séquence de traitement de la saisie de la première option  */

    // synthèse choix du véhicule + option après action plus d'option
    if (repUtilisateur == 'non') {
      console.log(syntheseOption);
      console.log(choixUtilisateur);

      repUtilisateur = prompt(
        'Trouvez ci-dessous le récapitulatif de votre devis' +
          '\r' +
          '\r' +
          'Vous avez choisi le modèle :' +
          '\r' +
          nomModel +
          '\r' +
          'Le prix du véhicule est de : ' +
          prixVehicule +
          '€' +
          '\r' +
          'Le détail de vos options : ' +
          '\r' +
          syntheseOption +
          '\r' +
          'Le prix de vos options est de : ' +
          prixOption +
          '€' +
          '\r' +
          'Le prix de Total avec option est de : ' +
          prixTotal +
          '€' +
          '\r' +
          'Cliquer sur Ok pour obtenir votre devis'
      );
    } else if (repUtilisateur == 'oui') {
      // synthèse choix du véhicule + option après ajout d'autres option ( oui ajouter option)

      //relance de la fonction PackOption
      choixTypeOptionPack();

      while (repUtilisateur !== 'non') {
        //Implémentation du prix du véhicule  et prix total au scope global
        prixOption += parseInt(prixSelection);
        prixTotal += prixOption; //implémentation du prix véhicule dans prix total
      }
    } else if (repUtilisateur == null) {
      alert("Vous n'avez pas sélectionné d'option");
    }
  }

  //Définition de la liste des vehicules
  function listeVehicules(budgetMin, budgetMax, selectModel, selectType) {
    let vehicules = [
      {
        type: 'Berline',
        model: 'Classe C',
        serie: 'Business Line',
        puissance: '180',
        motorisation: 'SP95',
        boite: 'Manuelle',
        nom: 'Classe C 180 SP95 Berline Business Line',
        prix: 39299,
        number: 1,
      },
      {
        type: 'Berline',
        model: 'Classe C',
        serie: 'Avantgarde Line',
        puissance: '180',
        motorisation: 'SP95',
        boite: 'Manuelle',
        nom: 'Classe C 180 SP95 Berline Avantgarde Line',
        prix: 40099,
        number: 2,
      },
      {
        type: 'Berline',
        model: 'Classe C',
        serie: 'AMG Line',
        puissance: '180',
        motorisation: 'SP95',
        boite: 'Manuelle',
        nom: 'Classe C 180 SP95 Berline AMG Line',
        prix: 42249,
        number: 3,
      },
      {
        type: 'Berline',
        model: 'Classe C',
        serie: ' Business Line',
        puissance: '180',
        motorisation: 'Diesel',
        boite: 'Manuelle',
        nom: 'Classe C 180 Diesel Berline Business Line',
        prix: 39299,
        number: 4,
      },
      {
        type: 'Berline',
        model: 'Classe C',
        serie: 'Avantgarde Line',
        puissance: '180',
        motorisation: 'Diesel',
        boite: 'Manuelle',
        nom: 'Classe C 180 Diesel Berline Avantgarde Line',
        prix: 40099,
        number: 5,
      },
      {
        type: 'Berline',
        model: 'Classe C',
        serie: 'AMG Line',
        puissance: '180',
        motorisation: 'Diesel',
        boite: 'Manuelle',
        nom: 'Classe C 180 Diesel Berline AMG Line',
        prix: 42249,
        number: 6,
      },
      {
        type: 'Berline',
        model: 'Classe C',
        serie: 'Business Line',
        puissance: '300 e',
        motorisation: 'Hybride',
        boite: 'Automatique',
        nom: 'Classe C 300 e Hybride Berline Business Line',
        prix: 54299,
        number: 7,
      },
      {
        type: 'Berline',
        model: 'Classe C',
        serie: 'Avantgarde Line',
        puissance: '300 e',
        motorisation: 'Hybride',
        boite: 'Automatique',
        nom: 'Classe C 300 e Hybride Berline Avangarde Line',
        prix: 55099,
        number: 8,
      },
      {
        type: 'Berline',
        model: 'Classe A',
        serie: 'Style Line',
        puissance: 200,
        motorisation: 'SP95',
        boite: 'Automatique',
        nom: 'Classe A 200 SP95 Berline Style Line',
        prix: 34299,
        number: 9,
      },
      {
        type: 'Berline',
        model: 'Classe A',
        serie: 'Business Line',
        puissance: 200,
        motorisation: 'SP95',
        boite: 'Automatique',
        nom: 'Classe A 200 SP95 Berline Business Line',
        prix: 36199,
        number: 10,
      },
      {
        type: 'Berline',
        model: 'Classe A',
        serie: 'Progressive Line',
        puissance: 200,
        motorisation: 'SP95',
        boite: 'Automatique',
        nom: 'Classe A 200 SP95 Berline Progressive Line',
        prix: 36899,
        number: 11,
      },
    ];

    console.log(budgetMin);
    console.log(budgetMax);
    console.log(selectModel);
    console.log(selectType);

    /***** Début de définition des filtres pour modèle et type */

    //filtre les véhicules en fonction du budget Min et Max et Modèle

    //Filtre les véhicules  pour le choix modèle
    let vehiculesListModel = vehicules
      .filter(
        (car) =>
          car.prix > budgetMin &&
          car.prix < budgetMax &&
          car.model == selectModel //identification du modèle
      )
      .sort((c1, c2) => c1.prix - c2.prix)
      .map((car) => car.number + ' : ' + car.nom + ': ' + car.prix + ' €');

    //Filtre les véhicules  pour le choix type //à terminer
    let vehiculesListType = vehicules
      .filter(
        (car) =>
          car.prix > budgetMin && car.prix < budgetMax && car.type == selectType //identification du type
      )
      .sort((c1, c2) => c1.prix - c2.prix)
      .map((car) => car.number + ' : ' + car.nom + ': ' + car.prix + ' €');

    /*
  if ((selectModel = 'modèle')) {
    

    console.log(vehiculesList);
  } else if (selectType == 'type') {
    


    
  }
  */
    /***** fin de définition des filtres pour modèle et type */

    /***** séquence de traitement du choix du modèle */

    // Récupération du numéro de repère du véhicule sélectionné par l'utilisateur

    let repUtilisateur = prompt(
      'Voici la liste des véhicules qui correspondent  à vos paramètres:' +
        '\r' +
        'Veuillez saisir le numéro du modèle souhaité:' +
        '\r' +
        vehiculesListModel
    );

    //Récupération du numéro saisie par utilisateur
    let number = vehicules
      .filter((car) => car.number == repUtilisateur)
      .map((car) => car.number); //tableau qui stock le numéro du modèle
    console.log(number); //tableau qui stock le numéro du modèle

    //Rappel à l'utilisateur de sa sélection de véhicule
    let choixUtilisateur = vehicules
      .filter((car) => car.number == number)
      .map((car) => car.number + ' : ' + car.nom + ': ' + car.prix + ' €');
    console.log(choixUtilisateur); //tableau qui stock l'option choisie de véhicule entière

    // pousser le choix de véhicule dans la liste nomModel

    let pousser = nomModel.push(choixUtilisateur); //pousse la valeur dans [nomModel]
    console.log(pousser); //push le numero de l'option choisie
    console.log(choixUtilisateur); //push l'option choisie de véhicule dans

    //prix du modèle sélectionné
    let prixSelection = vehicules
      .filter((car) => car.number == number)
      .map((car) => car.prix);

    //déclaration variable action  pour option oui/non
    let action;

    /**************** Début affichage des informations sur véhicules sélectionné */

    //Afficher le modèle selectionné et proposer les options//reste à traiter les numéros non
    if (repUtilisateur == number) {
      //Implémentation du prix du véhicule  et prix total au scope global
      prixVehicule += parseInt(prixSelection);
      prixTotal = prixVehicule; //implémentation du prix véhicule dans prix total

      console.log(prixVehicule);
      console.log(prixTotal);

      // Affichage synthèse selection
      alert(
        'Vous avez choisi le modèle suivant : ' +
          '\r' +
          choixUtilisateur +
          '\r' +
          'Le prix de votre sélection est de :' +
          prixSelection +
          ' €' +
          '\r' +
          '\r' +
          'Le prix total est de votre selection :' +
          prixTotal +
          ' €'
      );

      /*******************Début de demande de la première option*************** */

      // Détails pour la sélection d'option ( oui ou non)
      let action = prompt(
        'Souhaitez vous ajouter des options ' +
          '\r' +
          'Saisissez votre choix: oui ou non'
      );

      //identification des différents cas pour les option

      if (action == 'oui') {
        choixTypeOptionPack(); //Appel de la fonction ChoixTypeOption
      } else {
        let action = prompt(
          "Vous ne souhaitez pas ajouter d'option" +
            '\r' +
            'êtes vous sur de votre choix: oui/non'
        );
        if (action == 'oui') {
          //répétition --> voir pour optimiser le code
          alert(
            'Vous avez choisi le modèle suivant : ' +
              '\r' +
              choixUtilisateur +
              '\r' +
              'Le prix de votre sélection est de :' +
              prixSelection +
              ' €' +
              '\r' +
              '\r' +
              'Le prix total est de votre selection :' +
              prixTotal +
              ' €'
          );
        } else {
          alert("Vous avez choisi d'ajouter des options sur votre modèle");
          choixTypeOptionPack();
        }
      }
    } else {
      alert(
        "Vous n'avez pas saisie le bon chiffre associé au modèle" +
          '\r' +
          'Vous aviez choisi le modèle suivant : ' +
          '\r' +
          choixUtilisateur
      );
    }
  }

  function listeOptionCouleur() {
    let optionCouleur = [
      {
        nom: ' Peinture Design',
        couleur: 'Gris',
        prix: 2600,
      },
      {
        nom: ' Peinture Design',
        couleur: 'Blanc',
        prix: 2600,
      },
      {
        nom: ' Peinture Design',
        couleur: 'Rouge',
        prix: 2600,
      },
      {
        nom: ' Peinture Metallisé',
        couleur: 'Blanc',
        prix: 1050,
      },
      {
        nom: ' Peinture Metallisé',
        couleur: 'Gris',
        prix: 1050,
      },
      {
        nom: ' Peinture Metallisé',
        couleur: 'Rouge',
        prix: 1050,
      },
      {
        nom: ' Peinture non metallisé',
        couleur: 'Blanc',
        prix: 0,
      },
      {
        nom: ' Peinture non metallisé',
        couleur: 'noir',
        prix: 0,
      },
      {
        nom: ' Peinture non metallisé',
        couleur: 'rouge',
        prix: 0,
      },
    ];

    //Filtre les vehicules >prix avec methode filter
    const result = listeOptionCouleur.filter(
      (listeOptionCouleur) => listeOptionCouleur.prix > 42000
    );
  }
  //définition de la liste des options

  /**
   * Traîtement
   */

  /* Entree */

  //Appel de la fonction  pour budget mini
  inputBudgetMin(budgetMin);

  //Appel de la fonction  pour budget maxi
  inputBudgetMax(budgetMax);

  //Appel de la fonction pour

  console.log(selectModel);

  //Appel de la fonction pour selectionne le modele
  actionModeleType();
}

/* Lancement programme configurateur */

lancementConfigurateur();
