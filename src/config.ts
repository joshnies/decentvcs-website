const stytchPublicToken = import.meta.env.VITE_STYTCH_PUBLIC_TOKEN;

if (!stytchPublicToken) {
  throw new Error("VITE_STYTCH_PUBLIC_TOKEN is not set");
}

const config = {
  env: (import.meta.env.NODE_ENV as string | undefined) || "development",
  stytch: {
    publicToken: stytchPublicToken,
    sessionDurationMinutes: 43200, // 30 days
  },
};

export default config;
