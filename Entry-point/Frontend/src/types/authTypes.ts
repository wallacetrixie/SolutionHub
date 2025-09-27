// LoginSignup Types - Data structures for authentication forms

/**
 * User type enum for signup
 */
export type UserType = 'client' | 'freelancer';

export interface AuthFormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  userType: UserType;
  rememberMe: boolean;
}

/**
 * Login-specific form data (subset of AuthFormData)
 */
export interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

/**
 * Signup-specific form data
 */
export interface SignupFormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  userType: UserType;
}

/**
 * Form validation errors
 */
export interface FormErrors {
  fullName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  userType?: string;
  general?: string; // For general form errors
}

/**
 * Form field names for type-safe field references
 */
export type FormFieldName = keyof AuthFormData;

/**
 * Login/Signup mode
 */
export type AuthMode = 'login' | 'signup';

/**
 * API response interfaces
 */
export interface AuthResponse {
  success: boolean;
  message: string;
  token?: string;
  user?: {
    id: string;
    email: string;
    fullName: string;
    userType: UserType;
  };
}

/**
 * Login request payload
 */
export interface LoginRequest {
  email: string;
  password: string;
  rememberMe?: boolean;
}

/**
 * Signup request payload
 */
export interface SignupRequest {
  fullName: string;
  email: string;
  password: string;
  userType: UserType;
}

/**
 * Form validation result
 */
export interface ValidationResult {
  isValid: boolean;
  errors: FormErrors;
}

/**
 * Component props (if needed for future extensibility)
 */
export interface LoginSignupProps {
  initialMode?: AuthMode;
  onSuccess?: (response: AuthResponse) => void;
  onError?: (error: string) => void;
  redirectPath?: string;
}

/**
 * Form input event handler type
 */
export type FormInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => void;

/**
 * Form submit handler type
 */
export type FormSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => void;

/**
 * Toggle handler type
 */
export type ToggleHandler = (mode: boolean) => void;