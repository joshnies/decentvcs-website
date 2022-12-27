const dashUrl = import.meta.env.VITE_DASH_URL;

if (!dashUrl) {
  throw new Error("VITE_DASH_URL is not set");
}

const docsUrl = import.meta.env.VITE_DOCS_URL;

if (!docsUrl) {
  throw new Error("VITE_DOCS_URL is not set");
}

const supportEmail = import.meta.env.VITE_SUPPORT_EMAIL;

if (!supportEmail) {
  throw new Error("VITE_SUPPORT_EMAIL is not set");
}

const stytchPublicToken = import.meta.env.VITE_STYTCH_PUBLIC_TOKEN;

if (!stytchPublicToken) {
  throw new Error("VITE_STYTCH_PUBLIC_TOKEN is not set");
}

const config = {
  /** Deployed environment name. */
  env: (import.meta.env.NODE_ENV as string | undefined) || "development",
  /** DecentVCS dashboard URL. */
  dashUrl,
  /** DecentVCS documentation site URL. */
  docsUrl,
  /** Support email address. */
  supportEmail,
  stytch: {
    /** Stytch public token. */
    publicToken: stytchPublicToken,
    /** Duration of the Stytch session in minutes. */
    sessionDurationMinutes: 43200, // 30 days
  },
};

export default config;
