/**
 * Quiz PDF Template
 * Generates a personalized "Huid Advies Paspoort" PDF using @react-pdf/renderer
 */

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";
import type { QuizResults, PrimaryGoal } from "@/lib/quiz/types";
import { pdfContent } from "@/content/quiz";

// Define styles
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: "Helvetica",
    fontSize: 11,
    lineHeight: 1.5,
    color: "#1a1a1a",
  },
  header: {
    marginBottom: 30,
    borderBottomWidth: 2,
    borderBottomColor: "#8B7355",
    paddingBottom: 15,
  },
  brandName: {
    fontSize: 20,
    fontFamily: "Helvetica-Bold",
    color: "#8B7355",
    letterSpacing: 2,
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    fontFamily: "Helvetica-Bold",
    color: "#1a1a1a",
    marginBottom: 10,
  },
  meta: {
    fontSize: 10,
    color: "#666666",
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 12,
    fontFamily: "Helvetica-Bold",
    color: "#8B7355",
    marginBottom: 10,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  sectionSubtitle: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    color: "#1a1a1a",
    marginBottom: 6,
  },
  text: {
    fontSize: 11,
    color: "#333333",
    marginBottom: 8,
  },
  highlightBox: {
    backgroundColor: "#f7f5f2",
    padding: 15,
    borderRadius: 4,
    marginBottom: 15,
  },
  treatmentName: {
    fontSize: 14,
    fontFamily: "Helvetica-Bold",
    color: "#1a1a1a",
    marginBottom: 8,
  },
  tipItem: {
    flexDirection: "row",
    marginBottom: 8,
  },
  tipBullet: {
    width: 15,
    color: "#8B7355",
  },
  tipText: {
    flex: 1,
    fontSize: 11,
    color: "#333333",
  },
  travelBox: {
    backgroundColor: "#e8f4f8",
    padding: 12,
    borderRadius: 4,
    marginBottom: 15,
  },
  travelTitle: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    color: "#2563eb",
    marginBottom: 4,
  },
  travelText: {
    fontSize: 10,
    color: "#1e40af",
  },
  ctaBox: {
    backgroundColor: "#8B7355",
    padding: 15,
    borderRadius: 4,
    marginTop: 20,
  },
  ctaTitle: {
    fontSize: 12,
    fontFamily: "Helvetica-Bold",
    color: "#ffffff",
    marginBottom: 6,
  },
  ctaText: {
    fontSize: 11,
    color: "#f5f5f0",
  },
  footer: {
    position: "absolute",
    bottom: 30,
    left: 40,
    right: 40,
    textAlign: "center",
    fontSize: 9,
    color: "#888888",
    borderTopWidth: 1,
    borderTopColor: "#e5e5e5",
    paddingTop: 10,
  },
  aboutSection: {
    marginTop: 20,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: "#e5e5e5",
  },
  aboutTitle: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: "#666666",
    marginBottom: 4,
  },
  aboutText: {
    fontSize: 9,
    color: "#888888",
  },
});

interface QuizPDFProps {
  results: QuizResults;
  firstName: string | null;
  primaryGoal: PrimaryGoal;
}

/**
 * QuizPDFTemplate Component
 * Renders the personalized skin advice PDF
 */
export function QuizPDFTemplate({
  results,
  firstName,
  primaryGoal,
}: QuizPDFProps) {
  const today = new Date().toLocaleDateString("nl-BE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const displayName = firstName || pdfContent.header.defaultName;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.brandName}>{pdfContent.header.brandName}</Text>
          <Text style={styles.title}>{pdfContent.header.title}</Text>
          <Text style={styles.meta}>
            {pdfContent.header.datePrefix} {today} | {pdfContent.header.forPrefix} {displayName}
          </Text>
        </View>

        {/* Goal Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{pdfContent.sections.goalTitle}</Text>
          <Text style={styles.text}>{results.goalDescription}</Text>
        </View>

        {/* Treatment Recommendation */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{pdfContent.sections.recommendationTitle}</Text>
          <View style={styles.highlightBox}>
            <Text style={styles.treatmentName}>{results.treatment.name}</Text>
            <Text style={styles.text}>{results.treatment.description}</Text>
          </View>
          <Text style={styles.sectionSubtitle}>{pdfContent.sections.expectationTitle}</Text>
          <Text style={styles.text}>{results.treatment.whatToExpect}</Text>
        </View>

        {/* Lifestyle Tips */}
        {results.tips.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{pdfContent.sections.tipsTitle}</Text>
            <Text style={styles.text}>{pdfContent.sections.tipsSubtitle}</Text>
            {results.tips.map((tip, index) => (
              <View key={index} style={styles.tipItem}>
                <Text style={styles.tipBullet}>•</Text>
                <Text style={styles.tipText}>{tip}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Travel Info (for NL visitors) */}
        {results.includesTravelInfo && (
          <View style={styles.travelBox}>
            <Text style={styles.travelTitle}>{pdfContent.sections.travelTitle}</Text>
            <Text style={styles.travelText}>{pdfContent.sections.travelText}</Text>
          </View>
        )}

        {/* CTA Box */}
        <View style={styles.ctaBox}>
          <Text style={styles.ctaTitle}>{pdfContent.sections.ctaTitle}</Text>
          <Text style={styles.ctaText}>{pdfContent.sections.ctaText}</Text>
        </View>

        {/* About Section */}
        <View style={styles.aboutSection}>
          <Text style={styles.aboutTitle}>{pdfContent.sections.aboutTitle}</Text>
          <Text style={styles.aboutText}>{pdfContent.sections.aboutText}</Text>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text>{pdfContent.footer.address}</Text>
          <Text>{pdfContent.footer.phone} | {pdfContent.footer.website}</Text>
        </View>
      </Page>
    </Document>
  );
}
