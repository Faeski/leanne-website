// Navigation types
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

// Placeholder component types
export type PlaceholderType =
  | "hero"
  | "text"
  | "image"
  | "gallery"
  | "faq"
  | "timeline"
  | "widget"
  | "interactive";

export type PlaceholderHeight = "sm" | "md" | "lg";

export interface PlaceholderProps {
  type: PlaceholderType;
  title: string;
  description?: string;
  height?: PlaceholderHeight;
}

// Section component types
export type SectionBackground = "white" | "cream" | "dark";
export type SectionSpacing = "normal" | "large";

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: SectionBackground;
  spacing?: SectionSpacing;
}

// Container component types
export type ContainerSize = "default" | "narrow" | "wide";

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: ContainerSize;
}

// Booking CTA types
export type BookingCTAVariant = "floating" | "inline";

export interface BookingCTAProps {
  variant?: BookingCTAVariant;
  label?: string;
}

// Mobile menu types
export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}
