// Get the select element
const languageSelect = document.getElementById("languageSelect");

// Add event listener to listen for changes in the select element
languageSelect.addEventListener("change", function () {
  // Get the selected value
  const selectedLanguage = languageSelect.value;

  // Perform actions based on the selected language
  switch (selectedLanguage) {
    case "en":
      // Change the language to English
      document.querySelectorAll(".intro1")[0].innerText =
        "Your Physical PAN card, a white paper and a pen";
      document.querySelectorAll(".intro2")[0].innerText =
        "Give us permissions on your device for camera, location, and mic, this data will be accessible by the bank and will never be made public";
      document.querySelector(".intro3").innerText =
        "Make sure your camera and microphone is working properly";
      document.querySelector(".intro4").innerText =
        "Position your face within the frame and ensure it is well-lit. Follow the prompts to capture your face from different angles.";
      document.querySelector(".intro5").innerText =
        "Ensure you are in a well-lit room with minimal background noise. Position your device's camera so that your face is clearly visible.";
      document.querySelector('label[for="documentsCheck"]').innerText =
        "I have my PAN, a white paper and a pen handy";
      document.querySelector(".continue-btn").innerText =
        "Start Verification";

      break;
    case "hi":
      // Change the language to Hindi
      document.querySelectorAll(".intro1")[0].innerText =
        "आपका शारीरिक पैन कार्ड, एक सफेद कागज और एक कलम";
      document.querySelectorAll(".intro2")[0].innerText =
        "हमें अपने डिवाइस की कैमरा, स्थान और माइक के लिए अनुमतियां दें, यह डेटा बैंक द्वारा पहुँचने योग्य होगा और कभी भी सार्वजनिक नहीं किया जाएगा";
      document.querySelector(".intro3").innerText =
        "अपने कैमरा और माइक्रोफोन को सही तरह से काम करने की सुनिश्चित करें";
      document.querySelector(".intro4").innerText =
        "फ्रेम के भीतर अपने चेहरे को स्थिति दें और सुनिश्चित करें कि यह अच्छे से प्रकाशित है। विभिन्न कोनों से अपने चेहरे को कैप्चर करने के लिए प्रोम्प्ट्स का पालन करें।";
      document.querySelector(".intro5").innerText =
        "न्यूनतम पृष्ठभूमि ध्वनि के साथ एक अच्छी तरह से प्रकाशित कमरे में हैं सुनिश्चित करें। अपने डिवाइस कैमरा को ऐसे स्थित करें कि आपका चेहरा स्पष्ट रूप से दिखाई दे।";
      document.querySelector('label[for="documentsCheck"]').innerText =
        "मेरे पास मेरा पैन, एक सफेद कागज और एक पेन है";
      document.querySelector(".continue-btn").innerText =
        "सत्यापन शुरू करें";
      break;

    case "tl":
      // Change the language to Telugu
      document.querySelectorAll(".intro1")[0].innerText =
        "మీ ఫిజికల్ పాన్ కార్డు, ఒక తెల్లని కాగితం మరియు ఒక పెన్";
      document.querySelectorAll(".intro2")[0].innerText =
        "మీ డివైస్ క్యామెరా, స్థానం మరియు మైక్ కోసం మనకు అనుమతులు ఇవ్వండి, ఈ డేటా బ్యాంక్ ద్వారా ప్రాప్యమవుతుంది మరియు పబ్లిక్ చేయబడదు";
      document.querySelector('label[for="documentsCheck"]').innerText =
        "నాకు మీ పాన్, తెల్లని కాగితం మరియు ఒక పెన్ ఉన్నాయి";
      document.querySelector(".intro3").innerText =
        "మీ కెమెరా మరియు మైక్రోఫోన్ సరిగ్గా పనిచేయబడుతున్నాయని ఖచ్చితంగా ఉంచండి";
      document.querySelector(".intro4").innerText =
        "ఫ్రేమ్ లో మీ ముఖాన్ని స్థితి చేయండి మరియు దీపాలు అద్భుతమైనవి ఉంచండి. వివిధ కోణాలనుండి మీ ముఖాన్ని క్యాప్చర్ చేయడానికి మార్గాలను అనుసరించండి.";
      document.querySelector(".intro5").innerText =
        "కమరా యొక్క ముందు నిలుచుటకు మరియు మీ ముఖం స్పష్టంగా కనిపించేంత ప్రాధమిక హింగా ఉన్నారని ఖచ్చితంగా సునిశ్చించండి.";
      document.querySelector(".continue-btn").innerText =
        "నమోదు ప్రారంభించు";
      break;

    case "fr":
      // Change the language to French
      document.querySelectorAll(".intro1")[0].innerText =
        "Votre carte PAN physique, une feuille blanche et un stylo";
      document.querySelectorAll(".intro2")[0].innerText =
        "Donnez-nous les autorisations sur votre appareil pour la caméra, l'emplacement et le microphone, ces données seront accessibles par la banque et ne seront jamais rendues publiques";
      document.querySelector(".intro3").innerText =
        "Assurez-vous que votre caméra et votre microphone fonctionnent correctement";
      document.querySelector(".intro4").innerText =
        "Positionnez votre visage dans le cadre et assurez-vous qu'il est bien éclairé. Suivez les instructions pour capturer votre visage sous différents angles.";
      document.querySelector(".intro5").innerText =
        "Assurez-vous d'être dans une pièce bien éclairée avec un minimum de bruit de fond. Positionnez la caméra de votre appareil de manière à ce que votre visage soit clairement visible.";
      document.querySelector('label[for="documentsCheck"]').innerText =
        "J'ai ma carte PAN, une feuille blanche et un stylo à portée de main";
      document.querySelector(".continue-btn").innerText =
        "Démarrer la vérification";
      break;

    case "esp":
      // Change the language to Espanol
      document.querySelectorAll(".intro1")[0].innerText =
        "Su tarjeta PAN física, una hoja blanca y un bolígrafo";
      document.querySelectorAll(".intro2")[0].innerText =
        "Permítanos acceder a su dispositivo para la cámara, la ubicación y el micrófono, estos datos serán accesibles por el banco y nunca serán públicos";
      document.querySelector('label[for="documentsCheck"]').innerText =
        "Tengo mi tarjeta PAN, una hoja blanca y un bolígrafo a mano";
      document.querySelector(".intro3").innerText =
        "Asegúrese de que su cámara y su micrófono funcionen correctamente";
      document.querySelector(".intro4").innerText =
        "Posicione su rostro dentro del marco y asegúrese de que esté bien iluminado. Siga las indicaciones para capturar su rostro desde diferentes ángulos.";
      document.querySelector(".intro5").innerText =
        "Asegúrese de estar en una habitación bien iluminada con un mínimo de ruido de fondo. Posicione la cámara de su dispositivo para que su rostro sea claramente visible.";
      document.querySelector(".continue-btn").innerText =
        "Iniciar verificación";
      break;
    default:
      console.log("Unknown language");
  }
});