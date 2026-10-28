// Datos generales de la marca. Edita aquí número, mensaje y redes sociales.

export const SITE = {
  name: 'The Se7en',
  description:
    'Cases personalizados con tus fotos, recuerdos y detalles especiales. Tu mundo, a tu manera.',
  lang: 'es-PE',
};

export const WHATSAPP = {
  // Número en formato internacional, sin "+" ni espacios (51 = Perú).
  number: '51956377084',
  display: '956 377 084',
  message: '¡Hola The Se7en! ✨ Quiero personalizar mi case. ¿Me ayudan con mi diseño?',
};

export const whatsappUrl = (message: string = WHATSAPP.message) =>
  `https://wa.me/${WHATSAPP.number}?text=${encodeURIComponent(message)}`;

export type SocialPlatform = 'instagram' | 'facebook' | 'tiktok';

export const SOCIALS: { platform: SocialPlatform; label: string; url: string }[] = [
  { platform: 'instagram', label: 'Instagram', url: 'https://www.instagram.com/__these7en/' },
  { platform: 'facebook', label: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61579263255040' },
  { platform: 'tiktok', label: 'TikTok', url: 'https://www.tiktok.com/@these7encases' },
];

export const NAV = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#contacto', label: 'Contacto' },
];
