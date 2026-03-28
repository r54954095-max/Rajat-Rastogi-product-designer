import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
  subject: string;
}

export function ContactEmail({
  name,
  email,
  message,
  subject,
}: ContactEmailProps) {
  const previewText = `New contact form submission from ${name}`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white font-sans">
          <Container className="mx-auto px-4 py-8 max-w-2xl">
            <Heading className="text-3xl font-bold mb-6 text-gray-900">
              📬 New Contact Form Submission
            </Heading>

            <Section className="bg-purple-50 p-6 rounded-lg mb-6 border border-purple-200">
              <Text className="font-semibold text-lg text-gray-900 mb-2">
                From: {name}
              </Text>
              <Text className="text-gray-700 mb-4">
                📧 {email}
              </Text>
              <Text className="font-semibold text-gray-900 mt-4">
                Subject: {subject}
              </Text>
            </Section>

            <Section className="bg-gray-50 p-6 rounded-lg mb-6">
              <Text className="font-semibold text-gray-900 mb-3">
                Message:
              </Text>
              <Text className="whitespace-pre-wrap text-gray-800 leading-relaxed">
                {message}
              </Text>
            </Section>

            <Section className="text-gray-500 text-sm border-t border-gray-200 pt-4">
              <Text>
                This email was sent via the contact form on your portfolio website.
              </Text>
              <Text className="mt-2">
                You can reply directly to this email to respond to {name}.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
