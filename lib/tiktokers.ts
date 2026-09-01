export type IconoLink =
  | "tiktok"
  | "instagram"
  | "facebook"
  | "whatsapp"
  | "telegram"
  | "youtube"
  | "x"
  | "linkedin"
  | "email"
  | "link";

export type Tema = "rosa" | "morado" | "azul" | "oscuro" | "atardecer";

export type EstiloBoton = "clasico" | "pildora" | "minimalista";

export type Link = { titulo: string; url: string; icono?: IconoLink };
