import { Section, Text } from "@react-email/components";
import {
  EmailLayout,
  emailLabel,
  emailText,
  emailValue,
} from "./email-layout";

type CareerEmailProps = {
  name: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  message: string;
  fileName: string;
};

export function CareerApplicationNotification(props: CareerEmailProps) {
  return (
    <EmailLayout
      preview={`New career application from ${props.name}`}
      title="New career application"
    >
      <Section>
        <Text style={emailLabel}>Applicant</Text>
        <Text style={emailValue}>{props.name}</Text>
        <Text style={emailLabel}>Email</Text>
        <Text style={emailValue}>{props.email}</Text>
        <Text style={emailLabel}>Phone</Text>
        <Text style={emailValue}>{props.phone}</Text>
        <Text style={emailLabel}>Applied for</Text>
        <Text style={emailValue}>{props.position}</Text>
        <Text style={emailLabel}>Experience</Text>
        <Text style={emailValue}>{props.experience}</Text>
        <Text style={emailLabel}>Attached CV</Text>
        <Text style={emailValue}>{props.fileName}</Text>
        {props.message ? (
          <>
            <Text style={emailLabel}>Cover message</Text>
            <Text style={emailValue}>{props.message}</Text>
          </>
        ) : null}
      </Section>
    </EmailLayout>
  );
}

export function CareerApplicationAcknowledgement({
  name,
  position,
}: Pick<CareerEmailProps, "name" | "position">) {
  return (
    <EmailLayout
      preview="Your JIMSET career application was received"
      title="Career application received"
    >
      <Text style={emailText}>Dear {name},</Text>
      <Text style={emailText}>
        Thank you for applying for {position}. Our team has received your CV and
        application details. If your profile matches the requirement, we will
        contact you for the next step.
      </Text>
    </EmailLayout>
  );
}
