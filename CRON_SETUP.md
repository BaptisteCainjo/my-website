# ⏰ Configuration Cron-Job.org - Keep Supabase Active

## 🎯 Objectif

Empêcher Supabase de se mettre en pause après 7 jours d'inactivité en appelant automatiquement l'API `/api/keep-alive` tous les jours.

---

## 📋 Prérequis

- ✅ Ton site doit être déployé sur Vercel
- ✅ L'API `/api/keep-alive` doit être accessible en ligne
- ✅ URL de ton site : `https://ton-site.vercel.app`

---

## ⚙️ Configuration de cron-job.org (GRATUIT)

### **Étape 1 : Créer un compte**

1. Va sur **https://cron-job.org**
2. Clique sur **Sign up** (en haut à droite)
3. Remplis le formulaire :
   - **Email** : ton adresse email
   - **Username** : ton nom d'utilisateur
   - **Password** : ton mot de passe
4. Vérifie ton email et active ton compte

---

### **Étape 2 : Créer un nouveau cron job**

1. **Connecte-toi** à cron-job.org
2. Clique sur **Cronjobs** (dans le menu du haut)
3. Clique sur le bouton **Create cronjob** (bouton bleu)

---

### **Étape 3 : Configurer le cron job**

Remplis le formulaire comme suit :

#### **Section "Title and URL"**

- **Title** : `Supabase Keep-Alive`
- **URL** : `https://TON-SITE.vercel.app/api/keep-alive`
  - ⚠️ **Remplace `TON-SITE` par l'URL de ton site Vercel !**
  - Exemple : `https://my-website-baptiste.vercel.app/api/keep-alive`

#### **Section "Schedule"**

- **Execution schedule** : Sélectionne **Every day**
- **Hours** : Sélectionne **2** (2h du matin, heure française)
- **Minutes** : Laisse **0**

💡 **Alternative :** Tu peux choisir n'importe quelle heure, tant que c'est au moins une fois par jour.

#### **Section "Notifications"**

- **Enable notifications** : ❌ Décoché (pas besoin de recevoir un email à chaque exécution)
- Ou laisse coché si tu veux être notifié en cas d'erreur

#### **Section "Advanced"**

Laisse les paramètres par défaut :
- **Request timeout** : 30 secondes
- **Request method** : GET
- **Save responses** : Oui (utile pour debug)

---

### **Étape 4 : Sauvegarder**

1. Clique sur le bouton **Create cronjob** en bas du formulaire
2. ✅ **C'est terminé !**

---

## 🎬 Comment ça fonctionne

```
Tous les jours à 2h du matin
    ↓
cron-job.org appelle ton URL
    ↓
GET https://ton-site.vercel.app/api/keep-alive
    ↓
L'API fait un ping à Supabase
    ↓
Supabase enregistre l'activité
    ↓
Le compteur de 7 jours est réinitialisé
    ↓
✅ Ta base de données reste active !
```

---

## 📊 Vérifier que ça fonctionne

### **Option 1 : Tester manuellement**

1. Sur cron-job.org, va dans **Cronjobs**
2. Trouve ton job **Supabase Keep-Alive**
3. Clique sur l'icône **▶️ Run** (à droite)
4. Regarde le résultat dans la colonne **Last execution**
5. Tu devrais voir un statut **200 OK** en vert

### **Option 2 : Vérifier dans les logs**

1. Sur cron-job.org, clique sur le nom du cronjob
2. Va dans l'onglet **History**
3. Tu verras toutes les exécutions passées avec leur statut

### **Option 3 : Tester l'URL directement**

1. Ouvre ton navigateur
2. Va sur : `https://TON-SITE.vercel.app/api/keep-alive`
3. Tu devrais voir une réponse JSON :
```json
{
  "success": true,
  "message": "Base de données active",
  "postsCount": 67,
  "timestamp": "2025-11-21T22:00:00.000Z"
}
```

---

## 🔧 Modifier la fréquence

Tu peux changer la fréquence d'exécution :

- **Tous les jours** : Recommandé (sécurité maximale)
- **Tous les 6 jours** : Économique (garde une marge de sécurité)
- **Toutes les 12 heures** : Si tu veux être sûr à 100%

⚠️ **ATTENTION** : Ne descends **jamais en dessous de 6 jours**, sinon Supabase risque de se mettre en pause avant le prochain appel !

---

## 🆚 Comparaison : cron-job.org vs Alternatives

| Service | Prix | Fiabilité | Simplicité |
|---------|------|-----------|------------|
| **cron-job.org** | ✅ Gratuit | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| UptimeRobot | ✅ Gratuit | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| EasyCron | ⚠️ Limité gratuit | ⭐⭐⭐ | ⭐⭐⭐ |
| Vercel Cron | ❌ 20$/mois | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |

**Recommandation** : cron-job.org pour ton cas d'usage.

---

## 🛡️ Sécurité

### **L'API `/api/keep-alive` est-elle sécurisée ?**

✅ **OUI**, car :
- Elle est publique mais **read-only** (lecture seule)
- Elle fait juste un `SELECT` sur Supabase
- Elle ne peut **rien modifier** dans ta base de données
- Elle retourne juste le nombre de posts (info publique)

### **Quelqu'un peut-il spammer cette API ?**

- Oui, mais ça ne pose **aucun problème**
- Cela garde juste ta DB active (c'est le but !)
- Aucun risque de sécurité ou de coût

---

## ❓ FAQ

### **Que se passe-t-il si cron-job.org tombe en panne ?**

- Grâce au **système de fallback**, ta page LinkedIn continuera de fonctionner
- Elle chargera depuis le fichier `linkedinPosts.json` (mis à jour par GitHub Actions)
- Les visiteurs ne verront aucune différence

### **Je peux utiliser un autre service ?**

Oui ! Voici des alternatives :

**UptimeRobot** (gratuit) :
- Plus orienté monitoring
- Appelle ton URL toutes les 5 minutes minimum
- Interface simple

**EasyCron** (gratuit limité) :
- Plus orienté cron jobs
- Limite : 1 cron job gratuit

### **Combien de fois par jour dois-je appeler l'API ?**

- **Minimum** : 1 fois tous les 6 jours
- **Recommandé** : 1 fois par jour (sécurité maximale)
- **Maximum** : Pas de limite, mais 1x/jour suffit largement

---

## 🎯 Résumé

1. ✅ Créer un compte sur cron-job.org
2. ✅ Créer un cronjob avec l'URL `/api/keep-alive`
3. ✅ Configurer l'exécution quotidienne
4. ✅ Tester que ça fonctionne
5. ✅ Laisser tourner en background

**🎉 C'est terminé ! Ta base Supabase restera active indéfiniment !**
