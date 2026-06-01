// Single source of truth for chapter data shape (Level 1: compile-time typed).
// Each chapter module is declared `: Chapter` against these types, so a missing
// or misspelled field is a build error and editors autocomplete the shape.

/**
 * How families join a chapter's parent group chat. It isn't always a link — it
 * may be a WeChat QR code, a code to enter elsewhere, or some other method.
 * This discriminated union forces each variant to carry the right fields, and
 * forces the UI to handle every case.
 *
 * Reusable anywhere a "join" isn't a plain URL (e.g. a Google Classroom that
 * uses a class code instead of an invite link).
 */
export type JoinMethod =
  | { method: "link"; url: string }
  | { method: "qr"; imageUrl: string; caption?: string }
  | { method: "code"; code: string; instructions?: string }
  | { method: "other"; instructions: string };

export interface Officer {
  name: string;
  role: string;
  /** Optional — omit when a role has no published email. */
  email?: string;
  /** Optional bio. Shown on the chapter page when present. */
  description?: string;
  /** Optional headshot, root-relative (e.g. "/team/anlin.png"). */
  imageUrl?: string;
}

export interface Alum {
  name: string;
  pastRole: string;
  gradYear: string;
  /** Optional bio. Shown on the chapter page when present. */
  description?: string;
  /** Optional — omit when an alum has no published email. */
  email?: string;
  /** Optional headshot, root-relative (e.g. "/team/alum/kirsten.jpg"). */
  imageUrl?: string;
}

export interface Chapter {
  /** URL-safe slug; also the filename and the /chapters/[slug] segment. */
  slug: string;
  name: string;
  location: string;
  /** For plotting on the locator map. */
  coordinates: { lat: number; lng: number };
  officers: Officer[];
  alums: Alum[];
  links: {
    tuteeSignup: string;
    tutorSignup: string;
    tutorGoogleClassroom: string;
    /** Not a plain URL — see JoinMethod. */
    parentGroupChat: JoinMethod;
  };
}