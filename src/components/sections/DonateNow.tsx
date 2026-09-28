"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  Copy,
  Download,
  QrCode,
  ShieldCheck,
} from "lucide-react";

const amounts = ["1000", "2500", "5000", "Custom"] as const;
const bankDetails = [
  { label: "Account Name", value: "Trimurti Foundation (Sample)" },
  { label: "Bank Name", value: "Example National Bank (Sample)" },
  { label: "Account Number", value: "XXXXXX1234", copyable: true },
  { label: "IFSC Code", value: "DEMO0001234", copyable: true },
  { label: "Branch", value: "Thrissur Main Branch (Sample)" },
  { label: "Account Type", value: "Savings (Sample)" },
];

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
      setCopyStatus(`${label} placeholder copied.`);
    } catch {
      setCopyStatus(
        `Could not copy the ${label.toLowerCase()} placeholder. Please copy it manually.`,
      );
    }
  }

  function downloadDetails() {
    const content = [
      "TRIMURTI FOUNDATION — SAMPLE DONATION DETAILS",
      "These are illustrative placeholders only. Do not use for a bank transfer.",
      "",
      ...bankDetails.map(({ label, value }) => `${label}: ${value}`),
      "",
      "Please verify official bank details with the foundation before making a transfer.",
    ].join("\n");
    const file = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = url;
    link.download = "trimurti-foundation-sample-donation-details.txt";
    document.body.append(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    setDownloadStatus("Sample donation details downloaded.");
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
          <div className="donate-qr-placeholder">
            <span className="donate-qr-icon" aria-hidden="true">
              <QrCode size={39} strokeWidth={1.5} />
            </span>
            <span className="donate-qr-eyebrow">Quick &amp; secure giving</span>
            <strong>UPI QR Coming Soon</strong>
            <span className="donate-qr-copy">
              Verified payment details will be published once confirmed by the
              foundation.
            </span>
            <span className="donate-qr-stamp">
              <ShieldCheck size={15} /> Secure giving
            </span>
          </div>

          <div className="donate-details">
            <span className="section-chip">Secure giving</span>
            <h3>Choose how you want to help</h3>
            <p className="donate-intro">
              Select a contribution amount, or use the sample bank details
              below while verified payment information is being prepared.
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
                Bank details shown here are sample placeholders, not valid
                payment instructions. Please verify official details before
                transferring funds.
              </p>
            </div>

            <div className="donate-bank-card">
              <div className="donate-bank-heading">
                <div>
                  <span className="donate-bank-eyebrow">Bank transfer</span>
                  <h4>Bank Details</h4>
                </div>
                <span className="donate-sample-badge">SAMPLE DETAILS</span>
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
                          aria-label={`Copy ${label} placeholder`}
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
