// This layout is for non-localized routes that redirect to localized versions
// No UI components needed here as pages will redirect immediately

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}