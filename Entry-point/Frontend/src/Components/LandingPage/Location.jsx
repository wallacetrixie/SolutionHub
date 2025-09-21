import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "../../styles/Location.css";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

function ContactMap() {
  const [position, setPosition] = useState([-1.286389, 36.817223]); // Nairobi, Kenya
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setPosition([pos.coords.latitude, pos.coords.longitude]);
          setLoading(false);
        },
        () => setLoading(false)
      );
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <div className="contactmap-container">
      <div className="contactmap-left">
        <h2 className="contactmap-title">Reach Out & Contact Us</h2>
        <p className="contactmap-desc">
          Leave us a message or reach us directly via email or phone. We’re here to help!
        </p>
        <form className="contactmap-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="tel" placeholder="Your Phone Number" required />
          <textarea placeholder="Leave us a message..." rows={5} required />
          <button type="submit">Send Message</button>
        </form>
        <div className="contactmap-info">
          <div>
            <strong>Email:</strong> <a href="mailto:hello@skillhub.com">hello@skillhub.com</a>
          </div>
          <div>
            <strong>Phone:</strong> <a href="tel:+254705103864">+254 705 103 864</a>
          </div>
        </div>
      </div>
      <div className="contactmap-right">
        <h3 className="map-title">Our Location</h3>
        <div className="map-wrapper">
          <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: "300px", width: "300%", borderRadius: "14px" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                {loading
                  ? "Locating..."
                  : "You are here (or our office if location not shared)"}
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
}

export default ContactMap;