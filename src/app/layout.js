import "./globals.css";

export const metadata = {
  title: "Hariharan V S | Full Stack Developer & ML Enthusiast",
  description:
    "Portfolio of Hariharan V S — Full Stack Developer, Machine Learning Enthusiast, and Hackathon Winner. Skilled in React, Node.js, Spring Boot, Python, and more.",
  keywords: [
    "Hariharan V S",
    "Full Stack Developer",
    "Machine Learning",
    "Portfolio",
    "React",
    "Node.js",
    "Spring Boot",
    "Python",
  ],
  authors: [{ name: "Hariharan V S" }],
  openGraph: {
    title: "Hariharan V S | Full Stack Developer & ML Enthusiast",
    description:
      "Portfolio of Hariharan V S — Full Stack Developer, Machine Learning Enthusiast, and Hackathon Winner.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
