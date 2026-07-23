// Medical disclaimer — plain and unambiguous.

import type { Metadata } from "next";
import { PageLayout, Section } from "@/components/PageLayout";
import { APP_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Medical Disclaimer",
  description: "Alaso is a tracking tool, not a medical device or a source of medical advice.",
  alternates: { canonical: "/medical-disclaimer" },
};

export default function MedicalDisclaimerPage() {
  return (
    <PageLayout
      title="Medical disclaimer"
      crumbs={[["Medical Disclaimer", "/medical-disclaimer"]]}
    >
      <Section heading="Not medical advice">
        <p>
          {APP_NAME} is a personal tracking tool. It records the numbers you enter and
          displays trends. It does not provide medical advice, diagnosis, or treatment,
          and it is not a medical device.
        </p>
      </Section>

      <Section heading="No health claims">
        <p>
          Weight changes are influenced by many factors. {APP_NAME} shows recorded trends
          and never claims that a specific amount of exercise caused a specific outcome.
          Any estimates in the app are labeled as estimates.
        </p>
      </Section>

      <Section heading="Talk to a professional">
        <p>
          Consult a qualified healthcare professional before beginning any exercise or
          weight-loss program, especially if you have a medical condition, are pregnant,
          or are recovering from injury. Stop exercising and seek medical attention if you
          feel pain, dizziness, or shortness of breath.
        </p>
      </Section>

      <Section heading="Emergencies">
        <p>
          {APP_NAME} is not for emergencies. If you think you are experiencing a medical
          emergency, call your local emergency number immediately.
        </p>
      </Section>
    </PageLayout>
  );
}
