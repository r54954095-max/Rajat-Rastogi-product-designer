import twilio from 'twilio';

export type SendSMSResponse = {
  success: boolean;
  messageSid?: string;
  status?: string;
  error?: string;
  errorCode?: number;
};

export const initTwilioClient = () => {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;

  if (!accountSid || !authToken) {
    throw new Error('Missing TWILIO_ACCOUNT_SID or TWILIO_AUTH_TOKEN');
  }

  return twilio(accountSid, authToken);
};

export const formatPhoneNumber = (phoneNumber: string): string => {
  // Remove all non-digit characters
  let cleaned = phoneNumber.replace(/\D/g, '');

  // If it starts with 91, keep it
  if (cleaned.startsWith('91')) {
    return `+${cleaned}`;
  }
  
  // If it's 10 digits, prepend +91
  if (cleaned.length === 10) {
    return `+91${cleaned}`;
  }

  // Generic E.164 format with +
  return `+${cleaned}`;
};

export const validateIndianPhoneNumber = (phoneNumber: string): { valid: boolean; formatted?: string; error?: string } => {
  const formatted = formatPhoneNumber(phoneNumber);
  
  // E.164 regex: +[1-9]\d{1,14}
  const e164Regex = /^\+[1-9]\d{1,14}$/;
  
  if (!e164Regex.test(formatted)) {
    return {
      valid: false,
      error: 'Invalid E.164 format. Must be +91 followed by 10 digits for India.',
    };
  }

  // India-specific: +91 (2 digits) + 10-digit number = +9110digits
  if (!formatted.startsWith('+91') || formatted.length !== 13) {
    return {
      valid: false,
      error: 'Invalid Indian phone number format. Expected +91 followed by 10 digits.',
    };
  }

  return { valid: true, formatted };
};
