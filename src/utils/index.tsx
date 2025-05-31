import { message, phoneNumber } from "../constants";

export const handleWhatsAppRedirect = () => {
  const encodedMessage = encodeURIComponent(message);
  const waWebUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  const waAppUrl = `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`;

  // Detect if it's a mobile device
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    // Try to open WhatsApp app directly
    window.location.href = waAppUrl;
  } else {
    // Fallback to WhatsApp Web
    window.open(waWebUrl, "_blank");
  }
};
