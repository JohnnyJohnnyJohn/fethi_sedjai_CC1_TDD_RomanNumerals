# Roman Numerals (TDD)

## Structure du dépôt

```
/src            → code métier
/tests          → tests unitaires
README.md       → installation, exécution, explications
```

## Langage choisi

JavaScript (TypeScript pour la sûreté de types, exécuté avec Node.js)

## Objectif du projet

Implémenter un convertisseur de nombres arabes vers des chiffres romains en appliquant une démarche TDD (cycles red → green → refactor) et en respectant les principes de Clean Code.

## Contraintes fonctionnelles

- Domaine valide: 0 à 3999 inclus.
- Représentations soustractives supportées: IV, IX, XL, XC, CD, CM.
- 0 retourne une chaîne vide.

## Installation

- Prérequis: Node.js 18+
- Installer les dépendances:

```bash
npm install
```

## Exécution des tests

- Lancer tous les tests:

```bash
npm test
```

- Lancer en mode watch:

```bash
npm run test:watch
```

- Vérifier le typage TypeScript (sans émettre de fichiers):

```bash
npm run typecheck
```

- Alternatives:
  - Via npx: `npx vitest`
  - Un test précis: `npx vitest tests/roman_numerals.test.ts -t "converts 99 to XCIX"`

## Exemples d'utilisation

```ts
import { ConvertNumeralsToRoman } from './src/convert_numerals_to_roman';

console.log(ConvertNumeralsToRoman.convertFullNumberToRoman(14));   // "XIV"
console.log(ConvertNumeralsToRoman.convertFullNumberToRoman(1994)); // "MCMXCIV"
console.log(ConvertNumeralsToRoman.convertFullNumberToRoman(0));    // ""
```

## Approche (TDD)

J’ai procédé par itérations TDD:
- D’abord les cas simples (0–9) pour poser l’API et les règles de base.
- Ajout progressif de cas multi-chiffres et des combinaisons soustractives (IV, IX, XL, etc.).
- Implémentation minimale pour faire passer les tests (red → green), puis refactoring pour clarifier la logique et supprimer les duplications.
- Introduction de constantes (bornes 0–3999), noms explicites et tests table-driven pour la lisibilité et la maintenabilité.

## Décisions de conception

- API unique: `convertFullNumberToRoman(number): string` (valide/exception sinon).
- Table de symboles par position (unités, dizaines, centaines, milliers) pour éviter les conditions ad hoc.
- Gestion explicite des bornes et du typage via TypeScript (`MIN_VALUE`, `MAX_VALUE`).
- Tests table-driven pour réduire la duplication et améliorer la lisibilité.

## Qualité / Clean Code

- Nommage explicite (camelCase), fonctions courtes et responsabilités claires.
- Constantes pour les bornes et les symboles, pas de valeurs magiques inline.
- Validation anticipée (guard clauses) pour les entrées invalides.
- Tests unitaires couvrant cas simples, composés et erreurs.

## Scripts npm utiles

- `npm test`: exécuter la suite de tests avec Vitest
- `npm run test:watch`: re-exécuter les tests à chaque changement
- `npm run typecheck`: vérifier les types via `tsc --noEmit`

## Environnement de dev

- Tests: Vitest (Node, TypeScript)
- Bundler/dev server: Vite (disponible, non requis pour ce kata)
- Typage: TypeScript `strict`
