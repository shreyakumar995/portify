import QrCodeCard from "@/components/QrCodeCard";

type Props = {
  username: string;
};

/** Rendered on screen for print/PDF only — hidden in the browser. */
export default function QRCodeSection({ username }: Props) {
  return (
    <section className="qr-print-only mt-12 sm:mt-14" aria-labelledby="qr-heading">
      <p className="home-eyebrow mb-2">Share</p>
      <h2 id="qr-heading" className="home-card-title text-base sm:text-lg mb-4">
        QR code for your portfolio
      </h2>
      <QrCodeCard username={username} />
    </section>
  );
}
