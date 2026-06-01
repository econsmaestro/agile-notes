import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agile Notes",
  description: "Study notes from LinkedIn Learning Agile Foundations and Scrum: The Basics",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
