/**
 * ============================================================================
 *  SOURCE UNIQUE DE VÉRITÉ DU SITE
 * ============================================================================
 * Ce fichier regroupe TOUT ce qui différencie un client d'un autre :
 * couleurs et polices (via `theme.ts`), textes, liens, horaires, véhicules
 * en stock, articles de blog, images (importées depuis `src/assets/images`).
 *
 * Aucun composant du dossier `src/components` ne doit contenir de texte,
 * couleur ou image "en dur" : ils lisent toujours leurs données depuis
 * l'objet `client` exporté ci-dessous.
 *
 * Pour décliner le site pour un nouveau client :
 *   1. Remplacez les images dans `src/assets/images` (mêmes noms de fichiers,
 *      ou mettez à jour les imports ci-dessous).
 *   2. Modifiez les textes, liens et données de cette page.
 *   3. Ajustez les couleurs/polices dans `src/config/theme.ts`.
 * Le reste du site (mise en page, composants, accessibilité, SEO) suit
 * automatiquement.
 * ============================================================================
 */
import { theme } from "./theme";
import type { ClientConfig } from "./types";

import heroMechanic from "../assets/images/hero-mechanic.jpg";
import servicesBg from "../assets/images/services-bg.jpg";
import why1 from "../assets/images/why-1.jpg";
import why2 from "../assets/images/why-2.jpg";
import why3 from "../assets/images/why-3.jpg";
import quoteFormImage from "../assets/images/quote-form.jpg";
import work1 from "../assets/images/work-1.jpg";
import work2 from "../assets/images/work-2.jpg";
import work3 from "../assets/images/work-3.jpg";
import work4 from "../assets/images/work-4.jpg";
import work5 from "../assets/images/work-5.jpg";
import work6 from "../assets/images/work-6.jpg";
import testimonialAvatar1 from "../assets/images/testimonial-avatar.jpg";
import testimonialAvatar2 from "../assets/images/testimonial-avatar-2.jpg";
import testimonialAvatar3 from "../assets/images/testimonial-avatar-3.jpg";
import contactImage from "../assets/images/contact-img.jpg";
import vehicle1 from "../assets/images/vehicle-1.jpg";
import vehicle2 from "../assets/images/vehicle-2.jpg";
import vehicle3 from "../assets/images/vehicle-3.jpg";
import vehicle4 from "../assets/images/vehicle-4.jpg";
import blog1 from "../assets/images/blog-1.jpg";
import blog2 from "../assets/images/blog-2.jpg";
import blog3 from "../assets/images/blog-3.jpg";

export const client: ClientConfig = {
  theme,

  meta: {
    name: "AutoPro",
    legalName: "AutoPro Garage SARL",
    tagline: "Garage automobile toutes marques à Lyon",
    description:
      "Réparation et entretien automobile toutes marques à Lyon : diagnostic, révision, freinage, pneus. Mécaniciens certifiés, devis rapide, véhicule prêt dans les délais annoncés.",
    url: "https://example.com",
    locale: "fr-FR",
  },

  seo: {
    defaultTitle: "AutoPro — Garage automobile toutes marques à Lyon",
    titleTemplate: "%s | AutoPro",
    defaultDescription:
      "Réparation et entretien automobile toutes marques à Lyon : diagnostic, révision, freinage, pneus. Mécaniciens certifiés, devis rapide.",
    ogImage: heroMechanic,
  },

  contact: {
    phone: "04 78 00 00 00",
    phoneHref: "tel:+33478000000",
    email: "contact@autopro-garage.fr",
    addressLine1: "12 Rue des Mécaniciens",
    addressLine2: "69003 Lyon, France",
    address: "12 Rue des Mécaniciens, 69003 Lyon, France",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=12%20Rue%20des%20M%C3%A9caniciens%2C%2069003%20Lyon&t=&z=15&ie=UTF8&iwloc=&output=embed",
    hours: [
      { days: "Lundi – Vendredi", hours: "08h00 – 18h30" },
      { days: "Samedi", hours: "09h00 – 13h00" },
      { days: "Dimanche", hours: "Fermé" },
    ],
    geo: { lat: 45.7578, lng: 4.8537 },
  },

  nav: [
    { label: "Accueil", href: "#accueil" },
    { label: "Services", href: "#services" },
    { label: "Véhicules", href: "#vehicules" },
    { label: "Réalisations", href: "#realisations" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ],

  headerCta: { label: "Prendre rendez-vous", href: "#devis" },

  hero: {
    eyebrow: "Garage toutes marques à Lyon",
    titleLines: ["Réparation auto", "toutes marques, à"],
    highlightWord: "Lyon",
    description:
      "Un savoir-faire de qualité, un service rapide et une équipe de mécaniciens certifiés pour que votre véhicule reprenne la route en toute confiance.",
    primaryCta: { label: "Demander un devis", href: "#devis" },
    secondaryCta: { label: "Nous appeler", href: "tel:+33478000000" },
    image: heroMechanic,
    imageAlt: "Mécanicien souriant dans son atelier, bras croisés",
    stats: [
      { value: "15+", label: "Années d'expérience" },
      { value: "4,9/5", label: "Satisfaction client" },
      { value: "3200+", label: "Véhicules réparés" },
    ],
  },

  services: {
    eyebrow: "Nos services",
    title: "Spécialistes des services suivants",
    items: [
      {
        icon: "engine",
        index: "01",
        title: "Réparation moteur",
        description: "Diagnostic et réparation moteur par des techniciens certifiés, pièces d'origine ou équivalentes.",
        href: "#devis",
      },
      {
        icon: "transmission",
        index: "02",
        title: "Boîte de vitesses",
        description: "Entretien et réparation des boîtes manuelles et automatiques, toutes marques.",
        href: "#devis",
        featuredImage: servicesBg,
        featuredImageAlt: "Mécanicien travaillant sur une transmission",
      },
      {
        icon: "brake",
        index: "03",
        title: "Freinage",
        description: "Contrôle, remplacement de plaquettes, disques et liquide de frein.",
        href: "#devis",
      },
      {
        icon: "battery",
        index: "04",
        title: "Batterie",
        description: "Diagnostic et remplacement de batterie, toutes motorisations.",
        href: "#devis",
      },
      {
        icon: "tyre",
        index: "05",
        title: "Pneus & jantes",
        description: "Montage, équilibrage, géométrie et conseils de pneumatiques adaptés.",
        href: "#devis",
      },
      {
        icon: "diagnostic",
        index: "06",
        title: "Diagnostic électronique",
        description: "Lecture de codes défaut et diagnostic multimarque de dernière génération.",
        href: "#devis",
      },
    ],
  },

  whyChooseUs: {
    eyebrow: "Pourquoi nous choisir",
    title: "Un garage pensé pour votre tranquillité",
    description:
      "Choisissez un garage automobile de confiance : expertise mécanique, matériel de diagnostic récent et un service client soigné à chaque visite.",
    features: [
      { icon: "shield-check", label: "Mécaniciens certifiés" },
      { icon: "cog", label: "Service rapide et soigné" },
      { icon: "award", label: "Meilleurs prix de la région" },
      { icon: "star", label: "Atelier récompensé" },
    ],
    images: [
      { src: why1, alt: "Mécanicien resserrant une pièce moteur avec une clé" },
      { src: why2, alt: "Mécanicien penché sous le capot d'une voiture" },
      { src: why3, alt: "Technicien en uniforme examinant un moteur" },
    ],
  },

  quoteForm: {
    eyebrow: "Devis gratuit",
    title: "Obtenez une estimation pour la réparation de votre véhicule",
    description:
      "Décrivez votre besoin : nous revenons vers vous avec un créneau et une estimation sous 24h ouvrées.",
    serviceOptions: [
      "Réparation moteur",
      "Boîte de vitesses",
      "Freinage",
      "Batterie",
      "Pneus & jantes",
      "Diagnostic électronique",
      "Autre demande",
    ],
    submitLabel: "Demander un rendez-vous",
    pendingLabel: "Envoi en cours…",
    successMessage: "Merci ! Votre demande a bien été envoyée, nous revenons vers vous rapidement.",
    errorMessage: "Une erreur est survenue. Merci de réessayer ou de nous appeler directement.",
    // Renseignez ici l'URL de votre formulaire Formspree (ou équivalent) pour activer l'envoi réel.
    endpoint: "",
    image: quoteFormImage,
    imageAlt: "Mécanicienne tenant une clé à molette dans l'atelier",
  },

  gallery: {
    eyebrow: "Nos réalisations",
    title: "Nos derniers travaux",
    description: "Un aperçu de nos interventions récentes en atelier.",
    items: [
      { src: work1, alt: "Mécanicien travaillant sur un moteur en atelier" },
      { src: work2, alt: "Atelier équipé de nombreux outils" },
      { src: work3, alt: "Voiture surélevée sur un pont élévateur" },
      { src: work4, alt: "Mécanicien intervenant sur une pièce mécanique" },
      { src: work5, alt: "Technicien réparant un engrenage" },
      { src: work6, alt: "Mécanicien faisant l'appoint d'huile moteur" },
    ],
  },

  testimonials: {
    eyebrow: "Témoignages",
    title: "Ce que disent nos clients",
    items: [
      {
        quote:
          "Impressionné par la qualité des pièces et le sérieux du service. Ma voiture tourne mieux qu'avant. Un garage fiable et efficace, je le recommande sans hésiter.",
        name: "Julien Tardy",
        role: "Client particulier",
        avatar: testimonialAvatar1,
      },
      {
        quote:
          "Devis clair, délai tenu, et une équipe qui prend le temps d'expliquer le diagnostic. Exactement ce qu'on attend d'un bon garage de quartier.",
        name: "Marc Lefebvre",
        role: "Client entreprise",
        avatar: testimonialAvatar2,
      },
      {
        quote:
          "J'ai fait contrôler mes freins en urgence avant un départ en vacances : prise en charge le jour même, travail impeccable. Merci à toute l'équipe !",
        name: "Camille Roussel",
        role: "Cliente particulière",
        avatar: testimonialAvatar3,
      },
    ],
  },

  brands: {
    eyebrow: "Multimarques",
    title: "Nous intervenons sur la plupart des marques",
    items: [
      { name: "BMW" },
      { name: "Hyundai" },
      { name: "Toyota" },
      { name: "Lexus" },
      { name: "Audi" },
      { name: "Mercedes-Benz" },
    ],
  },

  contactSection: {
    eyebrow: "Nous contacter",
    title: "Facile de nous joindre",
    description:
      "Notre atelier est ouvert toute la semaine. Besoin d'un renseignement ou d'un rendez-vous rapide ? Appelez-nous ou passez nous voir.",
    ctaLabel: "Nous contacter",
    ctaHref: "#devis",
    image: contactImage,
    imageAlt: "Rue menant à l'atelier AutoPro",
  },

  vehicles: {
    eyebrow: "Véhicules d'occasion",
    title: "Nos véhicules en stock",
    description:
      "Une sélection de véhicules d'occasion contrôlés par notre atelier. Consultez la fiche technique de chaque véhicule ou contactez-nous pour plus d'informations.",
    ctaLabel: "Voir la fiche",
    ctaHref: "#contact",
    statusLabels: {
      disponible: "Disponible",
      reserve: "Réservé",
      vendu: "Vendu",
    },
    items: [
      {
        slug: "volkswagen-golf-gti",
        name: "Volkswagen Golf GTI",
        price: 24900,
        currency: "EUR",
        status: "disponible",
        description:
          "Compacte sportive premier propriétaire, carnet d'entretien complet. Révisée intégralement par notre atelier avant mise en vente.",
        highlights: ["Carnet d'entretien complet", "Contrôle technique vierge", "Révision atelier incluse"],
        cover: vehicle1,
        coverAlt: "Volkswagen Golf GTI rouge vue de trois-quarts avant sur une route de campagne",
        specs: {
          year: 2021,
          mileageKm: 38500,
          fuel: "Essence",
          transmission: "Manuelle",
          engine: "2.0 TSI GTI",
          color: "Rouge Tornado",
          doors: 5,
        },
      },
      {
        slug: "bmw-serie-4",
        name: "BMW Série 4",
        price: 32900,
        currency: "EUR",
        status: "disponible",
        description:
          "Coupé sportif en excellent état, intérieur cuir, régime d'entretien constructeur respecté. Un plaisir de conduite assuré.",
        highlights: ["Intérieur cuir", "Pack M Sport", "Garantie atelier 6 mois"],
        cover: vehicle2,
        coverAlt: "BMW Série 4 bleu gris garée face à une villa moderne",
        specs: {
          year: 2021,
          mileageKm: 29800,
          fuel: "Diesel",
          transmission: "Automatique",
          engine: "2.0 420d",
          color: "Bleu Portimao",
          doors: 2,
        },
      },
      {
        slug: "porsche-911",
        name: "Porsche 911",
        price: 68500,
        currency: "EUR",
        status: "reserve",
        description:
          "Véhicule d'exception, entretien exclusivement en concession, historique complet disponible sur demande.",
        highlights: ["Historique complet", "Entretien concession", "Dossier technique disponible"],
        cover: vehicle3,
        coverAlt: "Porsche 911 argent garée dans une rue pavée",
        specs: {
          year: 2005,
          mileageKm: 89000,
          fuel: "Essence",
          transmission: "Manuelle",
          engine: "3.6 Carrera",
          color: "Argent GT",
          doors: 2,
        },
      },
      {
        slug: "chevrolet-camaro",
        name: "Chevrolet Camaro ZL1",
        price: 54900,
        currency: "EUR",
        status: "vendu",
        description:
          "Muscle car américaine, entretenue avec soin, pour les passionnés en recherche d'une sportive au caractère affirmé.",
        highlights: ["Boîte courte", "Échappement sport", "Pneus récents"],
        cover: vehicle4,
        coverAlt: "Chevrolet Camaro ZL1 rouge vue de trois-quarts avant",
        specs: {
          year: 2019,
          mileageKm: 18200,
          fuel: "Essence",
          transmission: "Manuelle",
          engine: "6.2 V8 Supercharged",
          color: "Rouge Garnet",
          doors: 2,
        },
      },
    ],
  },

  blog: {
    eyebrow: "Actualités",
    title: "Nos derniers articles et conseils",
    ctaLabel: "Voir tous les articles",
    ctaHref: "#blog",
    posts: [
      {
        title: "16 conseils pour éviter les crevaisons",
        excerpt: "Les gestes simples à adopter pour prolonger la durée de vie de vos pneus et rouler en sécurité.",
        date: "2026-01-21",
        category: "Pneus",
        href: "#",
        image: blog1,
        imageAlt: "Pneu lavé lors d'un entretien",
      },
      {
        title: "Les bons réflexes pour faire durer votre voiture",
        excerpt: "Entretien préventif, fréquence des révisions : nos conseils pour garder votre véhicule plus longtemps.",
        date: "2026-02-03",
        category: "Entretien",
        href: "#",
        image: blog2,
        imageAlt: "Mécanicien versant de l'huile moteur neuve",
      },
      {
        title: "Comment garder votre voiture comme neuve",
        excerpt: "Carrosserie, intérieur, mécanique : la routine d'entretien pour une voiture impeccable toute l'année.",
        date: "2026-02-18",
        category: "Esthétique",
        href: "#",
        image: blog3,
        imageAlt: "Lustrage d'une carrosserie noire avec un chiffon microfibre",
      },
    ],
  },

  newsletter: {
    title: "Restez informé des actualités AutoPro",
    description: "Conseils d'entretien, offres exclusives et actualités de l'atelier, directement dans votre boîte mail.",
    placeholder: "Votre adresse email",
    ctaLabel: "S'inscrire",
    disclaimer: "Vous pouvez vous désinscrire à tout moment.",
    // Renseignez ici l'URL de votre service d'inscription (Formspree, Brevo, etc.) pour activer l'envoi réel.
    endpoint: "",
  },

  footer: {
    description:
      "Réparation et entretien automobile toutes marques à Lyon. Mécaniciens certifiés, devis rapide, véhicule prêt dans les délais annoncés.",
    linkGroups: [
      {
        title: "Liens utiles",
        links: [
          { label: "Accueil", href: "#accueil" },
          { label: "Véhicules d'occasion", href: "#vehicules" },
          { label: "Réalisations", href: "#realisations" },
          { label: "Blog", href: "#blog" },
        ],
      },
      {
        title: "Nos services",
        links: [
          { label: "Réparation moteur", href: "#devis" },
          { label: "Boîte de vitesses", href: "#devis" },
          { label: "Freinage", href: "#devis" },
          { label: "Pneus & jantes", href: "#devis" },
        ],
      },
    ],
    social: [
      { label: "Facebook", href: "#", icon: "facebook" },
      { label: "Instagram", href: "#", icon: "instagram" },
      { label: "LinkedIn", href: "#", icon: "linkedin" },
    ],
    copyright: "AutoPro Garage. Tous droits réservés.",
  },
};
