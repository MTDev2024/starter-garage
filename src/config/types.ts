import type { ImageMetadata } from "astro";
import type { Theme } from "./theme";

export type IconName =
  | "engine"
  | "transmission"
  | "brake"
  | "battery"
  | "tyre"
  | "diagnostic"
  | "check"
  | "phone"
  | "mail"
  | "map-pin"
  | "clock"
  | "facebook"
  | "twitter"
  | "instagram"
  | "youtube"
  | "linkedin"
  | "arrow-right"
  | "arrow-up-right"
  | "star"
  | "quote"
  | "menu"
  | "close"
  | "chevron-left"
  | "chevron-right"
  | "fuel"
  | "gauge"
  | "calendar"
  | "cog"
  | "car"
  | "shield-check"
  | "sparkles"
  | "award";

export interface NavLink {
  label: string;
  href: string;
}

export interface Cta {
  label: string;
  href: string;
}

export interface SiteMeta {
  /** Short brand name, used in the header/footer logo and nav. */
  name: string;
  /** Full legal/business name, used in structured data and the footer. */
  legalName: string;
  tagline: string;
  description: string;
  /** Canonical production URL, no trailing slash. */
  url: string;
  locale: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: IconName;
}

export interface OpeningHoursRow {
  days: string;
  hours: string;
}

export interface ContactInfo {
  phone: string;
  phoneHref: string;
  email: string;
  address: string;
  addressLine1: string;
  addressLine2: string;
  mapEmbedUrl: string;
  hours: OpeningHoursRow[];
  geo: { lat: number; lng: number };
}

export interface HeroContent {
  eyebrow: string;
  titleLines: string[];
  highlightWord: string;
  description: string;
  primaryCta: Cta;
  secondaryCta: Cta;
  image: ImageMetadata;
  imageAlt: string;
  stats: { value: string; label: string }[];
}

export interface ServiceItem {
  icon: IconName;
  index: string;
  title: string;
  description: string;
  href: string;
  featuredImage?: ImageMetadata;
  featuredImageAlt?: string;
}

export interface ServicesContent {
  eyebrow: string;
  title: string;
  items: ServiceItem[];
}

export interface WhyChooseUsContent {
  eyebrow: string;
  title: string;
  description: string;
  features: { icon: IconName; label: string }[];
  images: { src: ImageMetadata; alt: string }[];
}

export interface QuoteFormContent {
  eyebrow: string;
  title: string;
  description: string;
  serviceOptions: string[];
  submitLabel: string;
  pendingLabel: string;
  successMessage: string;
  errorMessage: string;
  /** Formspree (or similar) form endpoint. Leave empty to disable submission. */
  endpoint: string;
  image: ImageMetadata;
  imageAlt: string;
}

export interface GalleryItem {
  src: ImageMetadata;
  alt: string;
}

export interface GalleryContent {
  eyebrow: string;
  title: string;
  description: string;
  items: GalleryItem[];
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: ImageMetadata;
}

export interface TestimonialsContent {
  eyebrow: string;
  title: string;
  items: Testimonial[];
}

export interface Brand {
  name: string;
}

export interface BrandsContent {
  eyebrow: string;
  title: string;
  items: Brand[];
}

export interface ContactSectionContent {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  image: ImageMetadata;
  imageAlt: string;
}

export interface VehicleSpecs {
  year: number;
  mileageKm: number;
  fuel: string;
  transmission: string;
  engine: string;
  color: string;
  doors: number;
}

export type VehicleStatus = "disponible" | "reserve" | "vendu";

export interface Vehicle {
  slug: string;
  name: string;
  price: number;
  currency: string;
  status: VehicleStatus;
  description: string;
  highlights: string[];
  cover: ImageMetadata;
  coverAlt: string;
  specs: VehicleSpecs;
}

export interface VehiclesContent {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  statusLabels: Record<VehicleStatus, string>;
  items: Vehicle[];
}

export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  href: string;
  image: ImageMetadata;
  imageAlt: string;
}

export interface BlogContent {
  eyebrow: string;
  title: string;
  ctaLabel: string;
  ctaHref: string;
  posts: BlogPost[];
}

export interface NewsletterContent {
  title: string;
  description: string;
  placeholder: string;
  ctaLabel: string;
  disclaimer: string;
  endpoint: string;
}

export interface FooterLinkGroup {
  title: string;
  links: NavLink[];
}

export interface FooterContent {
  description: string;
  linkGroups: FooterLinkGroup[];
  social: SocialLink[];
  copyright: string;
}

export interface SeoConfig {
  defaultTitle: string;
  titleTemplate: string;
  defaultDescription: string;
  ogImage: ImageMetadata;
  twitterHandle?: string;
}

export interface ClientConfig {
  theme: Theme;
  meta: SiteMeta;
  seo: SeoConfig;
  contact: ContactInfo;
  nav: NavLink[];
  headerCta: Cta;
  hero: HeroContent;
  services: ServicesContent;
  whyChooseUs: WhyChooseUsContent;
  quoteForm: QuoteFormContent;
  gallery: GalleryContent;
  testimonials: TestimonialsContent;
  brands: BrandsContent;
  contactSection: ContactSectionContent;
  vehicles: VehiclesContent;
  blog: BlogContent;
  newsletter: NewsletterContent;
  footer: FooterContent;
}
