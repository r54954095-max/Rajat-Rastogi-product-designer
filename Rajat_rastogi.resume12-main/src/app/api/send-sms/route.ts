import { NextRequest } from 'next/server';
import { initTwilioClient, SendSMSResponse } from '@/lib/twilio';

export const runtime = 'nodejs';

type SendSMSRequest = {
  message: string;
};

type ErrorResponse = {
  success: false;
  error: string;
  errorCode?: number;
};

export async function POST(request: NextRequest): Promise<Response> {
  try {
    // Parse request body
    let body: SendSMSRequest;
    try {
      body = await request.json();
    } catch {
      return Response.json(
        { success: false, error: 'Invalid JSON in request body' },
        { status: 400 }
      );
    }

    // Validate required fields
    const { message } = body;

    if (!message || typeof message !== 'string') {
      return Response.json(
        { success: false, error: 'Missing or invalid message' },
        { status: 400 }
      );
    }

    // Validate message length
    if (message.length > 1600) {
      return Response.json(
        { success: false, error: 'Message too long (max 1600 characters)' },
        { status: 400 }
      );
    }

    const fromPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
    if (!fromPhoneNumber) {
      throw new Error('Missing TWILIO_PHONE_NUMBER environment variable');
    }

    // Fixed recipient number
    const toPhoneNumber = '+918527166858';

    // Initialize Twilio client
    const client = initTwilioClient();

    // Send SMS
    const result = await client.messages.create({
      body: message,
      from: fromPhoneNumber,
      to: toPhoneNumber,
    });

    // Success response
    const response: SendSMSResponse = {
      success: true,
      messageSid: result.sid,
      status: result.status,
    };

    return Response.json(response, { status: 200 });
  } catch (error) {
    // Handle Twilio-specific errors
    if (error instanceof Error) {
      const errorCode = (error as any).code;

      // Specific error handling for common Twilio errors
      const errorMap: { [key: number]: string } = {
        21614: 'To number is not a valid mobile number.',
        21400: 'Invalid parameter. Check phone numbers and message content.',
        20003: 'Authentication failed. Invalid Account SID or Auth Token.',
        20001: 'Invalid request - missing required parameters.',
      };

      const errorMessage = errorMap[errorCode] || error.message;

      const response: ErrorResponse = {
        success: false,
        error: errorMessage,
        errorCode,
      };

      // Log error for debugging
      console.error(`Twilio SMS Error [${errorCode}]:`, error.message);

      // Return appropriate status code
      const statusCode = errorCode === 20003 ? 401 : 
                         errorCode === 21614 ? 422 : 
                         errorCode === 21400 ? 400 : 500;

      return Response.json(response, { status: statusCode });
    }

    // Fallback for unknown errors
    console.error('Unknown error sending SMS:', error);
    return Response.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return Response.json(
    { error: 'Use POST method to send SMS' },
    { status: 405 }
  );
}
