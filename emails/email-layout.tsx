import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import type { ReactNode } from "react";

export function EmailLayout({
  preview,
  title,
  children,
}: {
  preview: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <Html>
      <Head />
      <Preview>{preview}</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Section style={styles.header}>
            <Text style={styles.brand}>JIMSET</Text>
            <Text style={styles.tagline}>
              Jinnah Institute of Management Sciences, Engineering & Technology
            </Text>
          </Section>
          <Section style={styles.content}>
            <Heading style={styles.heading}>{title}</Heading>
            {children}
            <Hr style={styles.hr} />
            <Text style={styles.footer}>
              ST-1, 5-C, Near Matric Board Office, Nazimabad, Karachi
              <br />
              0330-0370660 · jimset@jpikhi.edu.pk
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

export const emailText = {
  color: "#374151",
  fontSize: "15px",
  lineHeight: "24px",
};

export const emailLabel = {
  color: "#1B3A6B",
  fontSize: "13px",
  fontWeight: "bold",
  marginBottom: "3px",
};

export const emailValue = {
  ...emailText,
  marginTop: "0",
  whiteSpace: "pre-wrap" as const,
};

const styles = {
  body: {
    backgroundColor: "#f3f4f6",
    fontFamily: "Arial, sans-serif",
    margin: "0",
    padding: "24px 8px",
  },
  container: {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    margin: "0 auto",
    maxWidth: "620px",
    overflow: "hidden",
  },
  header: {
    backgroundColor: "#0F1F38",
    padding: "24px 32px",
  },
  brand: {
    color: "#ffffff",
    fontSize: "28px",
    fontWeight: "bold",
    margin: "0 0 4px",
  },
  tagline: {
    color: "#d1d5db",
    fontSize: "12px",
    lineHeight: "18px",
    margin: "0",
  },
  content: {
    padding: "28px 32px",
  },
  heading: {
    color: "#1B3A6B",
    fontSize: "24px",
    margin: "0 0 20px",
  },
  hr: {
    borderColor: "#e5e7eb",
    margin: "28px 0 18px",
  },
  footer: {
    color: "#6b7280",
    fontSize: "12px",
    lineHeight: "18px",
    margin: "0",
  },
};
