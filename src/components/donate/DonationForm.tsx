"use client";

import { FormEvent, useId, useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import {
  donationBankDetails as bankDetails,
  donationQrImage,
} from "@/data/donation-payment";

const amounts = ["1000", "2500", "5000", "Custom"] as const;
const professions = [
  "Teacher",
  "Engineer",
  "Doctor",
  "Business Owner",
  "Student",
  "Government Employee",
  "Private Employee",
  "Freelancer",
  "Other",
];
type PaymentMethod = "QR" | "Bank Details";

export default function DonationForm() {
  const messageId = useId();
  const [selectedAmount, setSelectedAmount] = useState<string>("1000");
  const [customAmount, setCustomAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("QR");
  const [submitted, setSubmitted] = useState(false);
  const [receiptReady, setReceiptReady] = useState(false);

  const donationAmount =
    selectedAmount === "Custom" ? customAmount : selectedAmount;

  function downloadReceipt(form: HTMLFormElement) {
    const data = new FormData(form);
    const content = [
      "TRIMURTI FOUNDATION — DONATION ACKNOWLEDGEMENT",
      "",
      `Full Name: ${data.get("fullName")}`,
      `Email Address: ${data.get("email")}`,
      `Phone Number: ${data.get("phone")}`,
      `Profession: ${data.get("profession")}`,
      `Donation Amount: ₹${Number(donationAmount).toLocaleString("en-IN")}`,
      `Payment Method: ${paymentMethod}`,
      `Message: ${data.get("message") || "—"}`,
      `Date: ${new Date().toLocaleString("en-IN")}`,
      "",
      "Thank you for supporting Trimurti Foundation.",
    ].join("\n");
    const url = URL.createObjectURL(
      new Blob([content], { type: "text/plain;charset=utf-8" }),
    );
    const link = document.createElement("a");
    link.href = url;
    link.download = "trimurti-foundation-donation-acknowledgement.txt";
    link.click();
    URL.revokeObjectURL(url);
    setReceiptReady(true);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    setSubmitted(true);
    downloadReceipt(event.currentTarget);
  }

  if (submitted) {
    return (
      <div className="donation-confirmation" role="status">
        <span className="donation-confirmation-icon">
          <Check size={24} />
        </span>
        <h2>Thank you for your generosity.</h2>
        <p>
          Your acknowledgement has been prepared. Please complete your
          contribution using your selected payment method.
        </p>
        {!receiptReady && (
          <button
            className="button"
            type="button"
            onClick={() => setSubmitted(false)}
          >
            Return to form
          </button>
        )}
      </div>
    );
  }

  return (
    <form className="donation-form" onSubmit={handleSubmit}>
      <fieldset>
        <legend>Donor Information</legend>
        <div className="donation-form-grid">
          <label>
            <span>Full Name *</span>
            <input name="fullName" required autoComplete="name" />
          </label>
          <label>
            <span>Email Address *</span>
            <input name="email" type="email" required autoComplete="email" />
          </label>
          <label>
            <span>Phone Number *</span>
            <input name="phone" type="tel" required autoComplete="tel" />
          </label>
          <label>
            <span>Profession *</span>
            <select name="profession" defaultValue="" required>
              <option value="" disabled>
                Select your profession
              </option>
              {professions.map((profession) => (
                <option key={profession} value={profession}>
                  {profession}
                </option>
              ))}
            </select>
          </label>
        </div>
      </fieldset>

      <fieldset>
        <legend>Donation Details</legend>
        <p className="donation-field-label">Donation Amount *</p>
        <div className="donation-amounts" aria-label="Choose donation amount">
          {amounts.map((amount) => (
            <button
              type="button"
              key={amount}
              className={selectedAmount === amount ? "is-selected" : ""}
              aria-pressed={selectedAmount === amount}
              onClick={() => setSelectedAmount(amount)}
            >
              {amount === "Custom"
                ? "Other"
                : `₹${Number(amount).toLocaleString("en-IN")}`}
            </button>
          ))}
        </div>
        {selectedAmount === "Custom" && (
          <label className="donation-custom-amount">
            <span>Other amount (₹) *</span>
            <input
              aria-label="Other donation amount in rupees"
              type="number"
              min="1"
              step="1"
              required
              value={customAmount}
              onChange={(event) => setCustomAmount(event.target.value)}
              placeholder="Enter amount"
            />
          </label>
        )}
      </fieldset>

      <fieldset>
        <legend>Payment Information</legend>
        <p className="donation-field-label">Payment Method</p>
        <div
          className="donation-payment-options"
          role="radiogroup"
          aria-label="Payment method"
        >
          {(["QR", "Bank Details"] as PaymentMethod[]).map((method) => (
            <label
              className={`donation-payment-option ${paymentMethod === method ? "is-selected" : ""}`}
              key={method}
            >
              <input
                type="radio"
                name="paymentMethod"
                value={method}
                checked={paymentMethod === method}
                onChange={() => setPaymentMethod(method)}
              />
              <span>{method}</span>
            </label>
          ))}
        </div>

        {paymentMethod === "QR" ? (
          <div className="donation-payment-card donation-qr-card">
            <div className="donation-qr-frame">
              <Image
                src={donationQrImage}
                alt="Trimurti Foundation UPI QR code"
                width={865}
                height={1600}
                className="donate-qr-image"
                unoptimized
              />
            </div>
            <strong>Scan QR to complete your donation</strong>
            <p>
              Selected amount: ₹
              {Number(donationAmount || 0).toLocaleString("en-IN")}
            </p>
          </div>
        ) : (
          <div className="donation-payment-card donation-bank-card">
            <h3>Bank Details</h3>
            <dl>
              {bankDetails.map(({ label, value }) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
            <p>Please use your name as the payment reference.</p>
          </div>
        )}
      </fieldset>

      <fieldset className="donation-message-fieldset">
        <legend>Message (Optional)</legend>
        <label className="sr-only" htmlFor={messageId}>
          Message (Optional)
        </label>
        <textarea
          id={messageId}
          name="message"
          placeholder="Tell us why you chose to support this cause or leave a message of encouragement."
        />
      </fieldset>

      <button className="button donation-submit" type="submit">
        Donate Now
      </button>
    </form>
  );
}
