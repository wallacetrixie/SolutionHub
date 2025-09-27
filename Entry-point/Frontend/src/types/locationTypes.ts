export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export interface MapPosition {
  latitude: number;
  longitude: number;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address?: string;
}

export interface LocationState {
  position: [number, number];
  loading: boolean;
  formData: ContactFormData;
  formErrors: ContactFormErrors;
  isSubmitting: boolean;
}

export interface LocationProps {
  contactInfo?: ContactInfo;
  defaultPosition?: [number, number];
  onFormSubmit?: (formData: ContactFormData) => Promise<void>;
}