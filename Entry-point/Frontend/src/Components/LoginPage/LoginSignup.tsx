import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../styles/LoginPage/LoginSignup.css';
import {
  AuthFormData,
  FormErrors,
  AuthMode,
  FormInputHandler,
  FormSubmitHandler,
  ToggleHandler,
  ValidationResult,
  LoginRequest,
  SignupRequest
} from '../../types/authTypes';

const LoginSignup: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [formData, setFormData] = useState<AuthFormData>({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'client',
    rememberMe: false
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Set initial state based on route
  useEffect(() => {
    setIsLogin(location.pathname === '/login');
  }, [location.pathname]);

  const handleToggle: ToggleHandler = (loginState: boolean) => {
    setIsLogin(loginState);
    setErrors({});
    setFormData({
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      userType: 'client',
      rememberMe: false
    });
    
    // Update URL without page refresh
    navigate(loginState ? '/login' : '/signup', { replace: true });
  };

  const handleInputChange: FormInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const fieldName = name as keyof AuthFormData;
    
    setFormData(prev => ({
      ...prev,
      [fieldName]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error for this field when user starts typing (only for error fields)
    if (fieldName !== 'rememberMe' && fieldName !== 'userType' && errors[fieldName as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [fieldName]: undefined
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    // Signup-specific validations
    if (!isLogin) {
      if (!formData.fullName) {
        newErrors.fullName = 'Full name is required';
      }

      if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'Please confirm your password';
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit: FormSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      if (isLogin) {
        const loginData: LoginRequest = {
          email: formData.email,
          password: formData.password,
          rememberMe: formData.rememberMe
        };
        console.log('Login attempted with:', loginData);
        alert('Login successful! (Mock response)');
      } else {
        const signupData: SignupRequest = {
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password,
          userType: formData.userType
        };
        console.log('Signup attempted with:', signupData);
        alert('Account created successfully! (Mock response)');
      }
    } catch (error) {
      console.error('Authentication error:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-signup-container">
      {/* Left Branding Section */}
      <div className="branding-section">
        <div className="branding-content">
          {/* Header Section */}
          <div className="brand-header">
            <div className="logo-container">
              <div className="logo-wrapper">
                <img 
                  src="/src/assets/images/logo.jpg" 
                  alt="Solution Hub Logo" 
                  className="logo"
                />
                <div className="logo-ring"></div>
              </div>
            </div>
            <h1 className="brand-title">
              <span className="title-main">Solution</span>
              <span className="title-accent">Hub</span>
            </h1>
            <p className="brand-tagline">
              Where talent meets opportunity.<br />
              <span className="tagline-sub">Join thousands of professionals making connections</span>
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="brand-decoration">
            <div className="decoration-circle decoration-1"></div>
            <div className="decoration-circle decoration-2"></div>
            <div className="decoration-circle decoration-3"></div>
          </div>
        </div>
      </div>

      {/* Right Form Section */}
      <div className="form-section">
        <div className="form-container">
          <div className="form-header">
            <h2 className="form-title">
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h2>
            <p className="form-subtitle">
              {isLogin 
                ? 'Sign in to your Solution Hub account' 
                : 'Join our community of freelancers and clients'
              }
            </p>
          </div>

          {/* Toggle Buttons */}
          <div className="toggle-container">
            <button
              type="button"
              className={`toggle-btn ${isLogin ? 'active' : ''}`}
              onClick={() => handleToggle(true)}
              aria-pressed={isLogin}
            >
              Sign In
            </button>
            <button
              type="button"
              className={`toggle-btn ${!isLogin ? 'active' : ''}`}
              onClick={() => handleToggle(false)}
              aria-pressed={!isLogin}
            >
              Sign Up
            </button>
          </div>

       

          {/* Form */}
          <form onSubmit={handleSubmit} className="auth-form" noValidate>
            {/* Signup Fields */}
            {!isLogin && (
              <div className="form-group">
                <label htmlFor="fullName" className="form-label">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={`form-input ${errors.fullName ? 'error' : ''}`}
                  placeholder="Enter your full name"
                  aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                  required={!isLogin}
                />
                {errors.fullName && (
                  <span id="fullName-error" className="error-message" role="alert">
                    {errors.fullName}
                  </span>
                )}
              </div>
            )}

            {/* Email Field */}
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`form-input ${errors.email ? 'error' : ''}`}
                placeholder="Enter your email address"
                aria-describedby={errors.email ? 'email-error' : undefined}
                required
              />
              {errors.email && (
                <span id="email-error" className="error-message" role="alert">
                  {errors.email}
                </span>
              )}
            </div>

            {/* Password Field */}
            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password *
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className={`form-input ${errors.password ? 'error' : ''}`}
                placeholder="Enter your password"
                aria-describedby={errors.password ? 'password-error' : undefined}
                required
              />
              {errors.password && (
                <span id="password-error" className="error-message" role="alert">
                  {errors.password}
                </span>
              )}
            </div>

            {/* Confirm Password (Signup only) */}
            {!isLogin && (
              <div className="form-group">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password *
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className={`form-input ${errors.confirmPassword ? 'error' : ''}`}
                  placeholder="Confirm your password"
                  aria-describedby={errors.confirmPassword ? 'confirmPassword-error' : undefined}
                  required
                />
                {errors.confirmPassword && (
                  <span id="confirmPassword-error" className="error-message" role="alert">
                    {errors.confirmPassword}
                  </span>
                )}
              </div>
            )}

            {/* User Type (Signup only) */}
            {!isLogin && (
              <div className="form-group">
                <label className="form-label">I am a *</label>
                <div className="user-type-container">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="userType"
                      value="client"
                      checked={formData.userType === 'client'}
                      onChange={handleInputChange}
                      className="radio-input"
                    />
                    <span className="radio-custom"></span>
                    Client looking for services
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="userType"
                      value="freelancer"
                      checked={formData.userType === 'freelancer'}
                      onChange={handleInputChange}
                      className="radio-input"
                    />
                    <span className="radio-custom"></span>
                    Freelancer offering services
                  </label>
                </div>
              </div>
            )}

            {/* Remember Me (Login only) */}
            {isLogin && (
              <div className="form-options">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                    className="checkbox-input"
                  />
                  <span className="checkbox-custom"></span>
                  Remember me
                </label>
                <a href="#forgot-password" className="forgot-password-link">
                  Forgot password?
                </a>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="submit-btn"
              disabled={isLoading}
              aria-describedby="submit-status"
            >
              {isLoading ? (
                <span className="loading-spinner"></span>
              ) : (
                isLogin ? 'Sign In' : 'Create Account'
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="form-footer">
            <p>
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button
                type="button"
                className="switch-form-btn"
                onClick={() => handleToggle(!isLogin)}
              >
                {isLogin ? 'Sign up here' : 'Sign in here'}
              </button>
            </p>
            <p className="back-to-home">
              <button
                type="button"
                className="back-home-btn"
                onClick={() => navigate('/')}
              >
                ← Back to Home
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;