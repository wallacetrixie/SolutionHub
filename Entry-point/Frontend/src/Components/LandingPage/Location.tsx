import React, { useState, useEffect, useCallback } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "../../styles/LandingPage/Location.css";
import type { 
  LocationProps, 
  LocationState, 
  ContactFormData, 
  ContactFormErrors 
} from "../../types/locationTypes";

// Fix for default markers in Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const ContactMap: React.FC<LocationProps> = ({
  contactInfo = {
    email: "hello@skillhub.com",
    phone: "+254 705 103 864"
  },
  defaultPosition = [-1.286389, 36.817223], // Nairobi, Kenya
  onFormSubmit
}) => {
  const [state, setState] = useState<LocationState>({
    position: defaultPosition,
    loading: true,
    formData: {
      name: "",
      email: "",
      phone: "",
      message: ""
    },
    formErrors: {},
    isSubmitting: false
  });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos: GeolocationPosition) => {
          setState(prev => ({
            ...prev,
            position: [pos.coords.latitude, pos.coords.longitude],
            loading: false
          }));
        },
        (error: GeolocationPositionError) => {
          console.warn("Geolocation error:", error.message);
          setState(prev => ({ ...prev, loading: false }));
        }
      );
    } else {
      setState(prev => ({ ...prev, loading: false }));
    }
  }, []);

  const validateForm = useCallback((formData: ContactFormData): ContactFormErrors => {
    const errors: ContactFormErrors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^[\+]?[0-9\s\-\(\)]+$/.test(formData.phone)) {
      errors.phone = "Please enter a valid phone number";
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters";
    }

    return errors;
  }, []);

  const handleInputChange = useCallback((
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setState(prev => ({
      ...prev,
      formData: { ...prev.formData, [name]: value },
      formErrors: { ...prev.formErrors, [name]: undefined }
    }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const errors = validateForm(state.formData);
    if (Object.keys(errors).length > 0) {
      setState(prev => ({ ...prev, formErrors: errors }));
      return;
    }

    setState(prev => ({ ...prev, isSubmitting: true }));

    try {
      if (onFormSubmit) {
        await onFormSubmit(state.formData);
      } else {
        // Default behavior - simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log("Form submitted:", state.formData);
      }
      
      // Reset form on success
      setState(prev => ({
        ...prev,
        formData: { name: "", email: "", phone: "", message: "" },
        formErrors: {},
        isSubmitting: false
      }));
      
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Failed to send message. Please try again.");
      setState(prev => ({ ...prev, isSubmitting: false }));
    }
  }, [state.formData, validateForm, onFormSubmit]);

  return (
    <div className="contactmap-container">
      <div className="contactmap-left">
        <h2 className="contactmap-title">Reach Out & Contact Us</h2>
        <p className="contactmap-desc">
          Leave us a message or reach us directly via email or phone. We're here to help!
        </p>
        
        <form className="contactmap-form" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={state.formData.name}
              onChange={handleInputChange}
              required
              disabled={state.isSubmitting}
            />
            {state.formErrors.name && (
              <span className="error-message">{state.formErrors.name}</span>
            )}
          </div>
          
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={state.formData.email}
              onChange={handleInputChange}
              required
              disabled={state.isSubmitting}
            />
            {state.formErrors.email && (
              <span className="error-message">{state.formErrors.email}</span>
            )}
          </div>
          
          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={state.formData.phone}
              onChange={handleInputChange}
              required
              disabled={state.isSubmitting}
            />
            {state.formErrors.phone && (
              <span className="error-message">{state.formErrors.phone}</span>
            )}
          </div>
          
          <div>
            <textarea
              name="message"
              placeholder="Leave us a message..."
              rows={5}
              value={state.formData.message}
              onChange={handleInputChange}
              required
              disabled={state.isSubmitting}
            />
            {state.formErrors.message && (
              <span className="error-message">{state.formErrors.message}</span>
            )}
          </div>
          
          <button 
            type="submit" 
            disabled={state.isSubmitting}
            className={state.isSubmitting ? "submitting" : ""}
          >
            {state.isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
        
        <div className="contactmap-info">
          <div>
            <strong>Email:</strong>
            <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
          </div>
          <div>
            <strong>Phone:</strong>
            <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
          </div>
        </div>
      </div>
      
      <div className="contactmap-right">
        <h3 className="map-title">Our Location</h3>
        <div className="map-wrapper">
          <MapContainer
            center={state.position}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: "300px", width: "300%", borderRadius: "14px" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={state.position}>
              <Popup>
                {state.loading
                  ? "Locating..."
                  : "You are here (or our office if location not shared)"}
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default ContactMap;