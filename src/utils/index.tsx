import { message, phoneNumber } from "../constants";

export const handleWhatsAppRedirect = () => {
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(url, "_blank");
};
