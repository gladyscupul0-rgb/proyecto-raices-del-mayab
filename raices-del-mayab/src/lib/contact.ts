// Datos de contacto del negocio. El número incluye la lada de México (52).
export const WHATSAPP_NUMBER = "526567518415";
export const WHATSAPP_DISPLAY = "656 751 8415";

export function whatsappLink(message = "¡Hola Raíces del Mayab! Quiero hacer un pedido de cochinita pibil.") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
