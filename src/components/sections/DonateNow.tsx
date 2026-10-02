"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  Copy,
  Download,
  ShieldCheck,
} from "lucide-react";
import {
  donationBankDetails as bankDetails,
  donationQrImage,
} from "@/data/donation-payment";

const amounts = ["1000", "2500", "5000", "Custom"] as const;

export default function DonateNow() {
  const [selectedAmount, setSelectedAmount] = useState<string>("1000");
  const [customAmount, setCustomAmount] = useState("");
  const [copyStatus, setCopyStatus] = useState("");
  const [downloadStatus, setDownloadStatus] = useState("");

  const donationAmount =
    selectedAmount === "Custom" ? customAmount.trim() : selectedAmount;

  async function copyValue(label: string, value: string) {
    try {
      await navigator.clipboard.writeText(value);
      setCopyStatus(`${label} copied.`);
    } catch {
      setCopyStatus(
        `Could not copy the ${label.toLowerCase()}. Please copy it manually.`,
      );
    }
  }

  function downloadDetails() {
    const content = [
      "TRIMURTHI FOUNDATION — BANK DETAILS",
      "",
      ...bankDetails.map(({ label, value }) => `${label}: ${value}`),
      "",
      "Please confirm the beneficiary details before making a transfer.",
    ].join("\n");
    const file = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = url;
    link.download = "trimurthi-foundation-bank-details.txt";
    document.body.append(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    setDownloadStatus("Bank details downloaded.");
  }

  return (
    <section
      className="homepage-section donate-now-section"
      aria-labelledby="donate-now-title"
    >
      <div className="container">
        <div className="homepage-section-heading">
          <div>
            <p className="eyebrow">Give with confidence</p>
            <h2 id="donate-now-title">Donate Now</h2>
            <p>
              Every contribution helps create practical care, opportunity and
              hope.
            </p>
          </div>
        </div>

        <div className="donate-now-panel">
          <div className="donate-qr-panel">
            <div className="donate-qr-image-frame">
              <Image
                src={donationQrImage}
                alt="Trimurti Foundation UPI QR code"
                width={865}
                height={1600}
                className="donate-qr-image"
                sizes="930px"
                unoptimized
                loading="eager"
              />
            </div>
          </div>

          <div className="donate-details">
            <span className="section-chip">Secure giving</span>
            <h3>Choose how you want to help</h3>
            <p className="donate-intro">
              Select a contribution amount, or use the foundation bank details
              below to make a transfer.
            </p>

            <div className="donate-amounts" aria-label="Choose a donation amount">
              {amounts.map((amount) => (
                <button
                  type="button"
                  key={amount}
                  className={selectedAmount === amount ? "is-selected" : ""}
                  aria-pressed={selectedAmount === amount}
                  onClick={() => {
                    setSelectedAmount(amount);
                    setDownloadStatus("");
                  }}
                >
                  {amount === "Custom" ? amount : `₹${Number(amount).toLocaleString("en-IN")}`}
                </button>
              ))}
            </div>

            {selectedAmount === "Custom" && (
              <label className="donate-custom-amount" htmlFor="donate-custom-amount">
                <span>Custom amount (₹)</span>
                <input
                  id="donate-custom-amount"
                  type="number"
                  min="1"
                  step="1"
                  inputMode="numeric"
                  placeholder="Enter an amount"
                  value={customAmount}
                  onChange={(event) => setCustomAmount(event.target.value)}
                />
              </label>
            )}

            <div className="donate-finance-note">
              <ShieldCheck size={17} />
              <p>
                Please confirm the beneficiary and account details before
                transferring funds.
              </p>
            </div>

            <div className="donate-bank-card">
              <div className="donate-bank-heading">
                <div>
                  <span className="donate-bank-eyebrow">Bank transfer</span>
                  <h4>Bank Details</h4>
                </div>
              </div>

              <dl className="donate-bank-grid">
                {bankDetails.map(({ label, value, copyable }) => (
                  <div className="donate-bank-row" key={label}>
                    <dt>{label}</dt>
                    <dd>
                      <span>{value}</span>
                      {copyable && (
                        <button
                          type="button"
                          className="donate-copy-button"
                          aria-label={`Copy ${label}`}
                          onClick={() => copyValue(label, value)}
                        >
                          {copyStatus.startsWith(label) ? (
                            <Check size={14} />
                          ) : (
                            <Copy size={14} />
                          )}
                          <span>
                            {copyStatus.startsWith(label) ? "Copied" : "Copy"}
                          </span>
                        </button>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>

              <p className="donate-bank-warning">
                Please verify the bank details before making a transfer.
              </p>
              <button
                type="button"
                className="donate-download-button"
                onClick={downloadDetails}
              >
                <Download size={15} />
                Download donation details
              </button>
              {(copyStatus || downloadStatus) && (
                <p className="donate-action-status" role="status">
                  {downloadStatus || copyStatus}
                </p>
              )}
            </div>

            <div className="donate-actions">
              <Link
                href={
                  donationAmount && Number(donationAmount) > 0
                    ? `/donate?amount=${encodeURIComponent(donationAmount)}`
                    : "/donate"
                }
                className="button"
              >
                Donate Now <ArrowUpRight size={16} />
              </Link>
              <span className="donate-secure-note">
                <ShieldCheck size={15} /> Safe giving, thoughtful impact
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
