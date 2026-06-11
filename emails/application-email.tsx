import { Section, Text } from "@react-email/components";
import {
  EmailLayout,
  emailLabel,
  emailText,
  emailValue,
} from "./email-layout";

type ApplicationEmailProps = {
  name: string;
  email: string;
  phone: string;
  program: string;
  message: string;
};

export function ApplicationNotification(props: ApplicationEmailProps) {
  return (
    <EmailLayout
      preview={`New application from ${props.name}`}
      title="New admission application"
    >
      <Section>
        <Text style={emailLabel}>Applicant</Text>
        <Text style={emailValue}>{props.name}</Text>
        <Text style={emailLabel}>Email</Text>
        <Text style={emailValue}>{props.email}</Text>
        <Text style={emailLabel}>Phone</Text>
        <Text style={emailValue}>{props.phone}</Text>
        <Text style={emailLabel}>Program</Text>
        <Text style={emailValue}>{props.program}</Text>
        {props.message ? (
          <>
            <Text style={emailLabel}>Additional information</Text>
            <Text style={emailValue}>{props.message}</Text>
          </>
        ) : null}
      </Section>
    </EmailLayout>
  );
}

export function ApplicationAcknowledgement({
  name,
  program,
}: Pick<ApplicationEmailProps, "name" | "program">) {
  return (
    <EmailLayout
      preview="Your JIMSET application was received"
      title="Application received"
    >
      <Text style={emailText}>Dear {name},</Text>
      <Text style={emailText}>
        Thank you for applying to {program}. Our admissions team will review
        your information and contact you with the next steps.
      </Text>
    </EmailLayout>
  );
}
