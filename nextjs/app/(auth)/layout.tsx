export default function SigninLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="border-b text-center p-1">
        20% off on your first order
      </div>
      {children}
    </div>
  );
}
