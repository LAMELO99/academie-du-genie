import type { Subject } from "@/lib/types";
import { court, ordre, qcm, quiz, search, vf } from "../helpers";

const MICODE = "Micode";
const HACKERSPLOIT = "HackerSploit";
const CH = "Cybersécurité";

export const hacking: Subject = {
  slug: "hacking",
  name: "Hacking éthique et cybersécurité",
  shortName: "Hacking",
  coefficient: 2,
  color: "#dc2626",
  emoji: "🛡️",
  description: "Les vrais outils et techniques du hacking éthique : terminal Linux, scan réseau, failles web, cassage de mots de passe et cryptographie — pour comprendre et pour défendre.",
  chapters: [
    {
      slug: "hacking-ethique",
      title: "Hacking éthique et labo d'entraînement",
      summary: "Chapeaux, loi, et comment s'entraîner pour de vrai et légalement.",
      lesson: `## Les chapeaux
- **White hat** : hacker éthique, teste la sécurité **avec autorisation écrite** pour la renforcer.
- **Black hat** : agit illégalement pour nuire ou s'enrichir.
- **Grey hat** : entre les deux ; même bien intentionné, sans autorisation c'est illégal.

## La loi (France)
Accéder ou se maintenir **sans autorisation** dans un système est un délit (**article 323-1 du Code pénal**), **même sans rien casser**. On s'entraîne donc **uniquement** sur ses propres machines ou sur des plateformes prévues pour ça.

## Monter son labo pour de vrai
- **Machine virtuelle** : **VirtualBox** ou VMware, pour isoler un système jetable.
- **Kali Linux** : distribution Linux qui réunit les outils de test d'intrusion (nmap, Wireshark, Burp, Metasploit, John…).
- **Cibles volontairement vulnérables** : **DVWA** (Damn Vulnerable Web Application), Metasploitable, **VulnHub**.

## S'entraîner légalement en ligne
- **Root-Me** (français), **TryHackMe**, **Hack The Box** : des machines à attaquer, légalement.
- **CTF (Capture The Flag)** : compétitions. Catégories classiques : **web, crypto, forensics, reverse, pwn (binaire), OSINT**.
- **Bug bounty** (HackerOne, YesWeHack) : signaler une faille contre une récompense, selon des règles.
- **Divulgation responsable** : prévenir l'organisation et lui laisser le temps de corriger avant de publier.

> Métiers réels : pentesteur, analyste SOC, chercheur en sécurité, red team / blue team.`,
      videos: [
        search("Monter son labo de hacking", MICODE, "Micode débuter hacking labo kali linux"),
        search("Débuter sur TryHackMe", CH, "TryHackMe débutant français cybersécurité"),
      ],
      evaluation: quiz(
        qcm("Qu'est-ce qu'un white hat ?", ["Un hacker éthique qui teste la sécurité avec autorisation", "Un pirate qui vole des données", "Un antivirus", "Un type de pare-feu"], 0, "Le white hat améliore la sécurité avec l'accord du propriétaire."),
        vf("Tester un site sans autorisation est légal tant qu'on ne casse rien.", false, "L'accès non autorisé est déjà un délit (article 323-1), même sans dégât."),
        qcm("Quelle distribution Linux rassemble les outils de test d'intrusion ?", ["Kali Linux", "Windows XP", "Ubuntu Server", "macOS"], 0, "Kali Linux embarque nmap, Wireshark, Burp Suite, Metasploit, John the Ripper…"),
        court("Comment appelle-t-on une application web volontairement vulnérable pour s'entraîner (sigle de 4 lettres) ?", ["DVWA"], "DVWA = Damn Vulnerable Web Application."),
        qcm("Laquelle de ces plateformes est une plateforme FRANÇAISE d'entraînement légal ?", ["Root-Me", "Hack The Box", "TryHackMe", "VirtualBox"], 0, "Root-Me est une plateforme française de challenges de sécurité."),
        court("Quel logiciel permet de créer une machine virtuelle isolée pour tester sans risque ?", ["VirtualBox", "VMware"], "Une VM isole un système jetable du reste de l'ordinateur."),
        vf("Un bug bounty récompense ceux qui signalent des failles selon des règles précises.", true, "HackerOne et YesWeHack organisent ce type de programmes."),
        qcm("Laquelle N'EST PAS une catégorie classique de CTF ?", ["Jardinage", "Web", "Crypto", "Forensics"], 0, "Les catégories types sont web, crypto, forensics, reverse, pwn, OSINT."),
        qcm("Qu'est-ce que la divulgation responsable ?", ["Prévenir l'organisation et lui laisser le temps de corriger avant de publier", "Publier la faille tout de suite", "Vendre la faille au plus offrant", "Garder la faille secrète pour toujours"], 0, "Cela protège les utilisateurs pendant la correction."),
        ordre("Remets dans l'ordre les étapes d'un test d'intrusion (pentest).", ["Obtenir l'autorisation écrite", "Reconnaissance", "Recherche de vulnérabilités", "Exploitation en conditions de test", "Rapport et recommandations"], "L'autorisation d'abord ; le rapport final sert à corriger."),
      ),
    },
    {
      slug: "terminal-linux",
      title: "Linux et la ligne de commande",
      summary: "Le terminal, l'outil n°1 : fichiers, droits, réseau.",
      lesson: `## Pourquoi le terminal ?
La plupart des serveurs tournent sous **Linux**, et les outils de sécurité s'utilisent en **ligne de commande**. Savoir se déplacer dans un terminal est la base.

## Se déplacer et lire
- \`pwd\` : afficher le dossier courant
- \`ls -la\` : lister les fichiers, **même cachés**, avec les droits
- \`cd /etc\` : changer de dossier
- \`cat fichier\` : afficher le contenu ; \`less\` pour faire défiler
- \`grep "mot" fichier\` : **chercher** une ligne contenant « mot »
- \`find / -name "*.conf"\` : chercher des fichiers

## Les droits (permissions)
\`ls -l\` affiche par exemple \`-rwxr-xr--\` : **r** lire, **w** écrire, **x** exécuter.
- \`chmod\` change les droits. \`chmod 777\` donne **tous les droits à tout le monde** (à éviter !).
- \`sudo\` exécute une commande en **administrateur (root)**. L'utilisateur **root** peut tout faire.

## Réseau et processus
- \`ssh utilisateur@192.168.1.10\` : se connecter à distance, de façon chiffrée
- \`ps aux\` : lister les processus ; \`netstat -tuln\` / \`ss\` : les ports ouverts
- \`man commande\` : lire le manuel

## Danger
\`rm -rf /\` tente de **tout supprimer**. Une commande en root se réfléchit à deux fois.`,
      videos: [
        search("Apprendre le terminal Linux", CH, "apprendre terminal linux débutant commandes"),
        search("Les commandes Linux essentielles", HACKERSPLOIT, "linux commands essentials hacking"),
      ],
      evaluation: quiz(
        court("Quelle commande affiche le dossier dans lequel on se trouve ?", ["pwd"], "pwd = print working directory."),
        qcm("Que fait « ls -la » ?", ["Lister les fichiers, même cachés, avec leurs droits", "Supprimer les fichiers", "Se connecter à distance", "Afficher l'adresse IP"], 0, "L'option -a montre les fichiers cachés, -l le format détaillé."),
        qcm("Que fait « grep » ?", ["Chercher une ligne contenant un motif dans un fichier", "Changer les droits d'un fichier", "Supprimer un dossier", "Redémarrer la machine"], 0, "grep filtre les lignes qui correspondent au motif."),
        court("Quelle commande donne les droits d'administrateur le temps d'une commande ?", ["sudo"], "sudo exécute la commande en tant que root (super-utilisateur)."),
        qcm("Dans les droits « rwx », que signifie le « x » ?", ["Exécuter", "Lire", "Écrire", "Supprimer"], 0, "r = lire, w = écrire, x = exécuter."),
        vf("« chmod 777 » donne tous les droits à tout le monde, ce qui est dangereux.", true, "Lecture, écriture et exécution pour le propriétaire, le groupe ET les autres."),
        court("Quelle commande sert à se connecter à une machine distante de façon chiffrée ?", ["ssh"], "ssh ouvre une session sécurisée : ssh utilisateur@adresse."),
        qcm("Comment s'appelle le super-utilisateur sous Linux ?", ["root", "admin", "sudoer", "boss"], 0, "root a tous les droits sur le système."),
        qcm("Que risque « rm -rf / » ?", ["Supprimer tout le système de fichiers", "Afficher l'aide", "Lister les processus", "Rien du tout"], 0, "C'est une commande destructrice : à ne jamais lancer."),
        ordre("Remets dans l'ordre pour lire un fichier de configuration.", ["pwd (où suis-je ?)", "cd /etc (aller dans le dossier)", "ls (lister les fichiers)", "cat ssh/sshd_config (afficher le fichier)"], "On se repère, on se déplace, on liste, puis on lit le fichier."),
      ),
    },
    {
      slug: "reconnaissance",
      title: "Reconnaissance et scan réseau",
      summary: "nmap, Wireshark, Shodan : cartographier avant d'agir.",
      lesson: `## La reconnaissance
Avant toute chose, un pentesteur **cartographie** la cible : quelles machines, quels services, quelles versions. Deux styles : **passive** (sans toucher la cible : whois, Google, Shodan) et **active** (on envoie des paquets : nmap).

## nmap, le scanner de référence
- \`nmap 192.168.1.0/24\` : découvrir les machines d'un réseau
- \`nmap -sV 10.0.0.5\` : identifier les **services et versions** des ports ouverts
- \`nmap -p 1-1000 cible\` : scanner une plage de ports
- \`-sn\` : simple « ping scan » pour lister les machines vivantes

## Les ports et services à connaître
- **22** : SSH · **80** : HTTP · **443** : HTTPS
- **21** : FTP · **25** : SMTP (mail) · **53** : DNS · **3306** : MySQL

## Les autres outils
- **Wireshark** : analyseur de **paquets** réseau ; on y lit le trafic (et on voit qu'un mot de passe en HTTP passe **en clair** !).
- **Shodan** : moteur de recherche des appareils connectés à Internet (caméras, serveurs mal configurés…).
- **whois** : à qui appartient un domaine. **dig** / **nslookup** : interroger le DNS.
- **OSINT** : renseignement à partir de **sources ouvertes** (profils publics, fuites, métadonnées).`,
      videos: [
        search("Utiliser nmap", HACKERSPLOIT, "nmap tutorial network scanning"),
        search("Analyser le réseau avec Wireshark", CH, "Wireshark tutoriel débutant français"),
      ],
      evaluation: quiz(
        qcm("À quoi sert nmap ?", ["Scanner un réseau pour trouver machines, ports et services", "Chiffrer des fichiers", "Craquer des mots de passe", "Envoyer des e-mails"], 0, "nmap = « Network Mapper », l'outil de scan de référence."),
        court("Quel port est utilisé par SSH ?", ["22"], "SSH écoute par défaut sur le port 22."),
        qcm("Quel outil permet d'analyser les paquets qui circulent sur le réseau ?", ["Wireshark", "VirtualBox", "nmap", "John the Ripper"], 0, "Wireshark capture et décode le trafic réseau."),
        qcm("La reconnaissance passive, c'est…", ["Récolter des infos sans toucher directement la cible (whois, Shodan)", "Envoyer des milliers de paquets", "Supprimer des fichiers", "Casser un mot de passe"], 0, "La passive reste discrète ; l'active (nmap) envoie des paquets à la cible."),
        court("Quel moteur de recherche permet de trouver des appareils connectés à Internet (caméras, serveurs) ?", ["Shodan"], "Shodan indexe les appareils exposés sur Internet."),
        vf("L'option « -sV » de nmap sert à détecter les versions des services.", true, "Connaître la version aide à repérer des vulnérabilités connues."),
        qcm("Que signifie OSINT ?", ["Renseignement en sources ouvertes", "Un type de virus", "Un protocole réseau", "Un pare-feu"], 0, "OSINT = Open Source Intelligence : infos publiquement accessibles."),
        qcm("Quel port correspond à HTTPS ?", ["443", "22", "25", "3306"], 0, "HTTPS : 443 ; HTTP : 80 ; MySQL : 3306."),
        vf("Dans Wireshark, un mot de passe envoyé en HTTP (non chiffré) peut se lire en clair.", true, "C'est pourquoi HTTPS est indispensable."),
        ordre("Remets dans l'ordre une reconnaissance.", ["whois sur le domaine (passif)", "Scan nmap du réseau (actif)", "Identifier les versions des services", "Repérer les vulnérabilités possibles"], "On commence discret, puis on scanne, on identifie, et on cible les failles."),
      ),
    },
    {
      slug: "failles-web",
      title: "Les failles web (OWASP Top 10)",
      summary: "Injection SQL, XSS : comment ça marche, comment s'en protéger.",
      lesson: `## L'OWASP Top 10
L'**OWASP** publie le **Top 10** des risques de sécurité des applications web. Deux grands classiques :

## L'injection SQL (SQLi)
Si un site insère **directement** ta saisie dans une requête, tu peux la détourner.
> Requête : \`SELECT * FROM users WHERE nom='SAISIE'\`
> Si tu tapes \`' OR '1'='1\`, la condition devient **toujours vraie** → la base renvoie tout.
**Défense** : les **requêtes préparées** (paramétrées), qui séparent le code des données. **Ne jamais faire confiance à une saisie utilisateur.**

## Le XSS (Cross-Site Scripting)
Injecter du **JavaScript** dans une page pour qu'il s'exécute chez les autres visiteurs (voler des **cookies**, afficher un faux formulaire).
> Saisir \`<script>alert(1)</script>\` dans un champ de commentaire.
**Défense** : **échapper** (neutraliser) les caractères spéciaux et valider les entrées.

## Quelques autres risques du Top 10
- **Contrôle d'accès défaillant** : accéder à une page qui ne devrait pas être permise (modifier l'URL \`?id=124\`).
- **Mauvaise configuration** (mots de passe par défaut, pages d'admin ouvertes).
- **Composants vulnérables** : bibliothèques non mises à jour.

## Les outils
**Burp Suite** et **OWASP ZAP** : des **proxys** qui interceptent et modifient les requêtes entre le navigateur et le site. On s'entraîne sur **DVWA**, jamais sur un vrai site sans autorisation.`,
      videos: [
        search("L'injection SQL expliquée", CH, "injection SQL expliquée débutant français"),
        search("Le XSS expliqué", MICODE, "faille XSS cross site scripting explication"),
      ],
      evaluation: quiz(
        qcm("Que publie l'OWASP ?", ["Le Top 10 des risques de sécurité web", "Un antivirus", "Un système d'exploitation", "Un langage de programmation"], 0, "L'OWASP Top 10 est la référence des risques applicatifs web."),
        qcm("Que vise une injection SQL ?", ["Détourner une requête vers la base de données", "Surcharger le réseau", "Chiffrer les fichiers", "Éteindre le serveur"], 0, "On injecte du code SQL via un champ mal protégé."),
        court("Quelle est la meilleure défense contre l'injection SQL ? Les requêtes…", ["préparées", "paramétrées", "requêtes préparées"], "Les requêtes préparées séparent le code SQL des données saisies."),
        qcm("Que signifie XSS ?", ["Cross-Site Scripting", "Extra Secure System", "X-Server Security", "Cross Server Shell"], 0, "Le XSS injecte du JavaScript exécuté dans le navigateur des visiteurs."),
        vf("Le XSS peut servir à voler les cookies de session d'un utilisateur.", true, "Avec le cookie, l'attaquant peut usurper la session de la victime."),
        court("Comment appelle-t-on le fait de neutraliser les caractères spéciaux d'une saisie pour éviter le XSS ?", ["échappement", "échapper", "escaping"], "Échapper les caractères comme < et > empêche l'exécution du script."),
        qcm("Quel outil est un proxy qui intercepte les requêtes web pour les analyser ?", ["Burp Suite", "nmap", "Wireshark", "VirtualBox"], 0, "Burp Suite (ou OWASP ZAP) s'intercale entre le navigateur et le site."),
        vf("On peut s'entraîner aux failles web sur DVWA, une application faite pour ça.", true, "DVWA est volontairement vulnérable et légale à attaquer, en local."),
        qcm("Changer « ?id=123 » en « ?id=124 » pour voir des données qui ne sont pas à soi illustre…", ["Un contrôle d'accès défaillant", "Une injection SQL", "Un déni de service", "Du chiffrement"], 0, "L'application ne vérifie pas que l'utilisateur a le droit de voir cette donnée."),
        qcm("Quelle règle résume la défense contre ces failles ?", ["Ne jamais faire confiance aux données envoyées par l'utilisateur", "Faire confiance au navigateur", "Désactiver HTTPS", "Donner les droits root à tous"], 0, "Toute entrée doit être validée et traitée comme potentiellement malveillante."),
      ),
    },
    {
      slug: "mots-de-passe",
      title: "Mots de passe : hachage et cassage",
      summary: "Hash, sel, hashcat, rainbow tables et entropie.",
      lesson: `## On ne stocke pas les mots de passe en clair
Un site sérieux stocke une **empreinte** du mot de passe : un **hachage**. Le hachage est à **sens unique** : on ne peut pas revenir au mot de passe.
- **MD5** et **SHA-1** sont **cassés** : à ne plus utiliser.
- **bcrypt**, **argon2** et **scrypt** sont lents **exprès**, pour ralentir les attaques.
- Le **sel (salt)** : une valeur aléatoire ajoutée avant le hachage, **différente pour chaque utilisateur**. Deux personnes avec le même mot de passe ont des empreintes différentes.

## Comment on « casse » un hash
On ne « déchiffre » pas : on **devine** un mot de passe, on le hache, et on **compare**.
- **Attaque par dictionnaire** : tester des listes (comme **rockyou.txt**, une vraie liste issue d'une fuite).
- **Force brute** : tester toutes les combinaisons.
- **Rainbow tables** : tables de hashs précalculés — que le **sel** rend inutiles.
- Outils réels : **Hashcat** (utilise la carte graphique) et **John the Ripper**.

## L'entropie : ce qui rend un mot de passe fort
Chaque caractère ajouté **multiplie** le nombre de combinaisons (croissance **exponentielle**). La **longueur** compte plus que les symboles compliqués.
> PIN à 4 chiffres : 10⁴ = **10 000** combinaisons — dérisoire.
Une **phrase de passe** de plusieurs mots au hasard est longue et facile à retenir.

## Les bons réflexes
Un mot de passe **unique par site** (via un **gestionnaire**), la **double authentification (2FA)**, et vérifier ses fuites sur **haveibeenpwned.com**.`,
      videos: [
        search("Comment sont cassés les mots de passe", MICODE, "Micode mot de passe hash cassage hashcat"),
        search("Le hachage et le sel expliqués", CH, "hachage sel mot de passe bcrypt explication"),
      ],
      evaluation: quiz(
        qcm("Comment un site sérieux stocke-t-il les mots de passe ?", ["Sous forme de hash (empreinte à sens unique)", "En clair dans un fichier texte", "Dans un e-mail", "Chiffrés avec la clé publique de l'utilisateur"], 0, "Le hachage empêche de retrouver le mot de passe en cas de fuite."),
        vf("Un hachage peut se « déchiffrer » facilement pour retrouver le mot de passe.", false, "Le hachage est à sens unique. On ne peut que deviner puis comparer."),
        court("Comment appelle-t-on la valeur aléatoire ajoutée à chaque mot de passe avant le hachage ?", ["sel", "salt"], "Le sel rend chaque empreinte unique et casse les rainbow tables."),
        qcm("Lesquels de ces algorithmes sont considérés comme CASSÉS pour les mots de passe ?", ["MD5 et SHA-1", "bcrypt et argon2", "scrypt et argon2", "bcrypt et scrypt"], 0, "MD5 et SHA-1 ne doivent plus servir ; bcrypt, scrypt et argon2 sont recommandés."),
        qcm("Quel outil utilise la carte graphique pour tester énormément de hashs par seconde ?", ["Hashcat", "Wireshark", "VirtualBox", "nmap"], 0, "Hashcat et John the Ripper sont les outils de cassage de référence."),
        vf("Le sel rend les rainbow tables (tables de hashs précalculés) inefficaces.", true, "Comme chaque mot de passe est salé différemment, une table précalculée ne sert plus."),
        court("Combien de combinaisons possède un code PIN à 4 chiffres ?", ["10000", "10 000"], "10 × 10 × 10 × 10 = 10 000, c'est très peu."),
        qcm("Qu'est-ce qu'une attaque par dictionnaire ?", ["Tester une liste de mots de passe courants ou fuités", "Deviner au hasard une seule fois", "Lire le mot de passe dans la base", "Demander le mot de passe par mail"], 0, "On teste des listes comme rockyou.txt, issue d'une vraie fuite."),
        qcm("Qu'est-ce qui rend un mot de passe le plus difficile à casser ?", ["Sa longueur", "La présence d'un seul chiffre", "Qu'il soit un mot du dictionnaire", "Qu'il soit court mais compliqué"], 0, "Chaque caractère en plus multiplie les combinaisons : la longueur l'emporte."),
        court("Quel site permet de vérifier si son adresse a été concernée par une fuite de données ?", ["haveibeenpwned", "haveibeenpwned.com"], "On y vérifie si son e-mail apparaît dans des fuites connues."),
      ),
    },
    {
      slug: "cryptographie",
      title: "La cryptographie",
      summary: "De César à la clé publique, en passant par Enigma.",
      lesson: `## Le chiffre de César
On **décale** chaque lettre d'un nombre fixe. Décalage de **3** : A → D, B → E, C → F.
> « HELLO » devient « KHOOR ».
Avec 26 lettres, il n'existe que **25 décalages utiles** : on casse ça en les testant tous (**attaque par force brute**).

## Le chiffre de Vigenère (XVIᵉ siècle)
Un **mot-clé** fait varier le décalage à chaque lettre. Longtemps jugé incassable.

## Enigma et Alan Turing
Pendant la Seconde Guerre mondiale, l'Allemagne chiffre ses messages avec la machine **Enigma**. Le mathématicien **Alan Turing**, l'un des pères de l'informatique, contribue à la casser.

## La cryptographie moderne
- **Symétrique** (ex. **AES**) : la **même clé** chiffre et déchiffre. Rapide, mais il faut partager la clé en sécurité.
- **Asymétrique** (ex. **RSA**, 1977) : une **clé publique** qu'on partage pour chiffrer, une **clé privée** secrète pour déchiffrer. C'est ce qui sécurise **HTTPS**.
- **Hachage** (SHA-256) : empreinte à sens unique, pour vérifier l'intégrité.
- **Signature numérique** : on chiffre avec sa clé privée pour prouver son identité.

> Règle d'or (principe de Kerckhoffs) : la sécurité doit reposer sur la **clé**, pas sur le secret de l'algorithme.`,
      videos: [
        search("La machine Enigma et Turing", MICODE, "Micode Enigma Turing cryptographie"),
        search("Chiffrement symétrique et asymétrique", CH, "chiffrement symétrique asymétrique clé publique privée explication"),
      ],
      evaluation: quiz(
        court("Chiffre « ABC » avec le chiffre de César, décalage de 3.", ["DEF"], "A → D, B → E, C → F."),
        court("Déchiffre « KHOOR » (César, décalage de 3).", ["HELLO"], "On recule de 3 : K → H, H → E, O → L, O → L, R → O."),
        qcm("Quelle machine les Allemands utilisaient-ils pour chiffrer leurs messages pendant la Seconde Guerre mondiale ?", ["Enigma", "Colossus", "ENIAC", "Le Minitel"], 0, "Colossus et ENIAC sont des ordinateurs alliés ; le Minitel est bien plus tardif."),
        qcm("Quel mathématicien britannique a contribué à casser Enigma ?", ["Alan Turing", "Isaac Newton", "Albert Einstein", "Blaise Pascal"], 0, "Turing est aussi l'un des pères de l'informatique."),
        vf("En chiffrement asymétrique, on partage la clé publique et on garde la clé privée secrète.", true, "N'importe qui chiffre avec la clé publique ; seule la clé privée déchiffre."),
        qcm("Qu'est-ce que le chiffrement symétrique ?", ["La même clé sert à chiffrer et à déchiffrer", "Une clé publique et une clé privée", "Un chiffrement sans clé", "Un simple hachage"], 0, "Exemple : AES. Il faut partager la clé secrète de façon sûre."),
        qcm("Quel système de chiffrement sécurise le HTTPS ?", ["Le chiffrement asymétrique (ex. RSA)", "Le chiffre de César", "Le chiffre de Vigenère", "Le code Morse"], 0, "L'asymétrique permet d'échanger une clé en toute sécurité."),
        qcm("Avec un alphabet de 26 lettres, combien de décalages utiles le chiffre de César offre-t-il ?", ["25", "26", "1 000", "Une infinité"], 0, "Un décalage de 0 (ou 26) ne change rien : il reste 25 clés, faciles à tester."),
        court("Quel chiffre du XVIᵉ siècle utilise un mot-clé pour faire varier le décalage ?", ["Vigenère", "chiffre de Vigenère"], "Le chiffre de Vigenère a résisté près de trois siècles."),
        ordre("Range ces méthodes de chiffrement dans l'ordre chronologique.", ["Chiffre de César", "Chiffre de Vigenère", "Machine Enigma", "Chiffrement RSA"], "Antiquité, XVIᵉ siècle, Seconde Guerre mondiale, 1977."),
      ),
    },
  ],
};
