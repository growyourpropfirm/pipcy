import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Get Brevo API key from environment variables
    const BREVO_API_KEY = process.env.BREVO_API_KEY;
    const BREVO_LIST_ID = process.env.BREVO_LIST_ID || 1; // Default list ID

    if (!BREVO_API_KEY) {
      console.error('BREVO_API_KEY is not set');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Add contact to Brevo
    const brevoResponse = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': BREVO_API_KEY,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        listIds: [parseInt(BREVO_LIST_ID)],
        updateEnabled: false, // Don't update if contact exists
      }),
    });

    const brevoData = await brevoResponse.json();

    // Check if contact already exists (status 400 with specific error)
    if (brevoResponse.status === 400) {
      // Check if it's a duplicate email error
      const errorMessage = brevoData.message || '';
      const errorCode = brevoData.code || '';
      
      if (
        errorCode === 'duplicate_parameter' || 
        errorMessage.toLowerCase().includes('contact already exist') ||
        errorMessage.toLowerCase().includes('already exists') ||
        errorMessage.toLowerCase().includes('duplicate')
      ) {
        return NextResponse.json(
          { error: 'already_subscribed', message: 'It seems you already subscribed' },
          { status: 400 }
        );
      }
      // Other validation errors
      return NextResponse.json(
        { error: errorMessage || 'Invalid request' },
        { status: 400 }
      );
    }

    // Check for other errors
    if (!brevoResponse.ok) {
      console.error('Brevo API error:', brevoData);
      return NextResponse.json(
        { error: 'Failed to subscribe. Please try again later.' },
        { status: 500 }
      );
    }

    // Success
    return NextResponse.json(
      { success: true, message: 'Successfully subscribed!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Subscribe API error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}

