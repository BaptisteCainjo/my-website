# 🚀 Configuration GitHub Actions - Export LinkedIn Posts

## 📋 Vue d'ensemble

GitHub Actions va automatiquement exporter tes posts LinkedIn depuis Supabase vers le fichier JSON **tous les jours à 2h du matin** (heure française).

---

## ⚙️ Configuration des secrets GitHub (OBLIGATOIRE)

Pour que GitHub Actions puisse se connecter à Supabase, tu dois ajouter tes credentials Supabase dans les secrets GitHub.

### **Étapes :**

1. **Va sur ton repository GitHub**
   - Ouvre ton navigateur : `https://github.com/TON-USERNAME/my-website`

2. **Accède aux Settings**
   - Clique sur l'onglet **Settings** (en haut à droite)

3. **Ouvre Secrets and variables**
   - Dans le menu de gauche, clique sur **Secrets and variables** > **Actions**

4. **Ajoute le premier secret**
   - Clique sur le bouton vert **New repository secret**
   - **Name :** `NEXT_PUBLIC_SUPABASE_URL`
   - **Secret :** `https://ztecoljjakrlgrkwxciu.supabase.co/`
   - Clique sur **Add secret**

5. **Ajoute le deuxième secret**
   - Clique à nouveau sur **New repository secret**
   - **Name :** `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **Secret :** `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp0ZWNvbGpqYWtybGdya3d4Y2l1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI0MjYxMzAsImV4cCI6MjA2ODAwMjEzMH0.c-wFBowvkTyz2X57JAsuevM_JjACYD_XQiucj0ylfVQ`
   - Clique sur **Add secret**

✅ **C'est terminé !** GitHub Actions peut maintenant accéder à Supabase de manière sécurisée.

---

## 🔄 Comment ça fonctionne

### **Exécution automatique**
- **Tous les jours à 2h00 UTC** (3h heure française)
- GitHub Actions lance le workflow
- Le script se connecte à Supabase
- Récupère tous les posts LinkedIn
- Met à jour `linkedinPosts.json`
- Commit et push automatiquement si changements

### **Exécution manuelle**
Tu peux aussi lancer le workflow manuellement :

1. Va sur ton repository GitHub
2. Clique sur l'onglet **Actions**
3. Dans le menu de gauche, clique sur **Export LinkedIn Posts to JSON**
4. Clique sur **Run workflow** (bouton bleu à droite)
5. Clique sur **Run workflow** dans le popup

---

## 📊 Vérifier que ça fonctionne

### **Après le premier push :**

1. Va sur ton repository GitHub
2. Clique sur l'onglet **Actions**
3. Tu devrais voir le workflow **Export LinkedIn Posts to JSON**
4. Clique dessus pour voir les détails de l'exécution

### **Logs à vérifier :**
```
✅ Export terminé avec succès !
📊 Résumé :
   • Nombre de posts exportés : XX
   • Taille du fichier : XX.XX KB
```

### **Vérifier le commit automatique :**
1. Va sur l'onglet **Code** de ton repository
2. Tu devrais voir un commit récent : `chore: auto-update LinkedIn posts backup [skip ci]`
3. Clique sur le fichier `src/utils/data/linkedinPosts.json` pour voir qu'il a été mis à jour

---

## 🛡️ Sécurité

- ✅ Les credentials Supabase sont stockés dans les **secrets GitHub** (chiffrés)
- ✅ Ils ne sont **jamais visibles** dans les logs ou le code
- ✅ Le fichier `.env` n'est **jamais commité** (ignoré par `.gitignore`)
- ✅ Seul le fichier JSON est commité (données publiques)

---

## 🔧 Modifier la fréquence d'exécution

Si tu veux changer l'heure d'exécution, édite le fichier `.github/workflows/export-linkedin-posts.yml` :

```yaml
schedule:
  - cron: '0 2 * * *'  # Format: minute heure jour mois jour-de-la-semaine
```

**Exemples :**
- `'0 2 * * *'` → Tous les jours à 2h00 UTC
- `'0 12 * * *'` → Tous les jours à 12h00 UTC
- `'0 0 * * 1'` → Tous les lundis à minuit UTC
- `'0 */6 * * *'` → Toutes les 6 heures

**Outil pour générer des cron :** https://crontab.guru/

---

## 🎯 Workflow complet

```
Tous les jours à 2h UTC
    ↓
GitHub Actions démarre
    ↓
Checkout du code
    ↓
Installation de Node.js et npm
    ↓
Installation des dépendances
    ↓
Exécution du script d'export
    ↓
Connexion à Supabase (avec secrets)
    ↓
Récupération des posts LinkedIn
    ↓
Mise à jour de linkedinPosts.json
    ↓
Vérification s'il y a des changements
    ↓
Si changements → Commit + Push
    ↓
Vercel redéploie automatiquement
    ↓
✅ Site à jour avec le backup JSON
```

---

## ❓ FAQ

### **Le workflow ne se lance pas ?**
- Vérifie que tu as bien push le fichier `.github/workflows/export-linkedin-posts.yml`
- Vérifie que les secrets GitHub sont bien configurés

### **Le workflow échoue ?**
- Va sur l'onglet **Actions** et clique sur le workflow en erreur
- Lis les logs pour voir l'erreur
- Vérifie que les secrets Supabase sont corrects

### **Comment désactiver l'exécution automatique ?**
Commente la ligne `schedule` dans le fichier `.github/workflows/export-linkedin-posts.yml` :

```yaml
# schedule:
#   - cron: '0 2 * * *'
```

---

## 📞 Support

Si tu as un problème, vérifie :
1. Les secrets GitHub sont bien configurés
2. Le workflow est bien dans `.github/workflows/`
3. Les logs d'exécution dans l'onglet **Actions**

---

**🎉 C'est tout ! Ton système de backup automatique est prêt !**
