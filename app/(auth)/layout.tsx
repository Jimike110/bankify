import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
      {children}
      <div className="auth-asset">
        <div>
          <Image
            className="border-blue-500 border-4 rounded-xl"
            src="/icons/auth-image.png"
            alt="Auth Image"
            width={600}
            height={600}
          />
        </div>
      </div>
    </main>
  );
}
