interface EmailParams {
  to: string;
  from: string;
  subject: string;
  text: string;
  html?: string;
}

/**
 * Stub for email functionality - not being used in this portfolio site
 */
export async function sendEmail(params: EmailParams): Promise<boolean> {
  console.log("Email function called but not implemented:", params);
  return true;
}