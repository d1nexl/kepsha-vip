// Central, easy-to-edit contact configuration.
// Update these values in one place if numbers or usernames change.

export const PHONE_DISPLAY = "+420 775 929 681";
export const PHONE_E164 = "+420775929681";
export const PHONE_TEL = "tel:+420775929681";
export const PHONE_DIGITS = "420775929681"; // for wa.me / viber / t.me

export const CONTACT = {
  phoneDisplay: PHONE_DISPLAY,
  tel: PHONE_TEL,
  // WhatsApp deep link via phone number
  whatsapp: `https://wa.me/${PHONE_DIGITS}`,
  // Viber deep link via phone number (no guessed username)
  viber: `viber://chat?number=%2B${PHONE_DIGITS}`,
  // Telegram — username unknown, fall back to phone-based link (easy to swap for @username later)
  telegram: `https://t.me/+${PHONE_DIGITS}`,
  email: "mykhailo.kepsha@seznam.cz",
} as const;

export const BRAND = {
  name: "Kepsha.VIP",
  domain: "kepsha.vip",
  url: "https://kepsha.vip",
  owner: "Mykhailo",
} as const;

// Web3Forms access key — receives request-form submissions by e-mail.
// Get/replace the key at https://web3forms.com (linked to the address above).
export const WEB3FORMS_KEY = "6bec3a6a-f0c6-4ab7-8a0b-d4164d021592";
