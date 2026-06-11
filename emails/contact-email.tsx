import { Section, Text } from "@react-email/components";
import {
  EmailLayout,
  emailLabel,
  emailText,
  emailValue,
} from "./email-layout";

export function ContactNotification({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  return (
    <EmailLayout preview={`New message from ${name}`} title="New contact message">
      <Section>
        <Text style={emailLabel}>Name</Text>
        <Text style={emailValue}>{name}</Text>
        <Text style={emailLabel}>Email</Text>
        <Text style={emailValue}>{email}</Text>
        <Text style={emailLabel}>Message</Text>
        <Text style={emailValue}>{message}</Text>
      </Section>
    </EmailLayout>
  );
}

export function ContactAcknowledgement({ name }: { name: string }) {
  return (
    <EmailLayout
      preview="We received your message"
      title="Thank you for contacting JIMSET"
    >
      <Text style={emailText}>Dear {name},</Text>
      <Text style={emailText}>
        Your message has reached our team. We will review it and get back to you
        as soon as possible during office hours.
      </Text>
    </EmailLayout>
  );
}
