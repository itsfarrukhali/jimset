import { Text } from "@react-email/components";
import { EmailLayout, emailText } from "./email-layout";

export function NewsletterWelcome() {
  return (
    <EmailLayout
      preview="You are subscribed to JIMSET updates"
      title="Welcome to JIMSET updates"
    >
      <Text style={emailText}>
        You are now subscribed to receive admissions news, program updates, and
        important announcements from JIMSET.
      </Text>
    </EmailLayout>
  );
}
