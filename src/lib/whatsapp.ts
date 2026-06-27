// Central WhatsApp config — replace WHATSAPP_NUMBER with the real number (intl. format, no +)
export const WHATSAPP_NUMBER = "+919895352709";

export function getWhatsAppLink(message: string, number: string = WHATSAPP_NUMBER) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export const waEnquire = (productName: string) =>
  getWhatsAppLink(`Hi, I want to know the price of ${productName}`);

export const waOrder = (productName: string) =>
  getWhatsAppLink(`Hello, I want to order: ${productName}`);

export const waGeneral = () =>
  getWhatsAppLink("Hello Jamal Almari, I'd like to know more about your collection.");
