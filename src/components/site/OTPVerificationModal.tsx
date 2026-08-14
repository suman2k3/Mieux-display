// DEMO ONLY — Replace with backend OTP verification before production.
// Demo OTP code: 123456

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

interface OTPVerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  documentName: string;
  documentUrl: string;
}

export function OTPVerificationModal({
  isOpen,
  onClose,
  documentName,
  documentUrl,
}: OTPVerificationModalProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');
  
  const [otp, setOtp] = useState<string[]>(Array(6).fill(''));
  const [otpError, setOtpError] = useState('');
  const [countdown, setCountdown] = useState(30);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Body scroll lock and Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Reset state when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setPhone('');
      setPhoneError('');
      setOtp(Array(6).fill(''));
      setOtpError('');
      setCountdown(30);
    }
  }, [isOpen]);

  // Countdown timer for OTP
  useEffect(() => {
    if (step === 2 && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [step, countdown]);

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[0-9]{10}$/.test(phone)) {
      setPhoneError('Please enter a valid 10-digit mobile number.');
      return;
    }
    setPhoneError('');
    // TODO: POST /api/otp/send { phone }
    setStep(2);
    setCountdown(30);
    setTimeout(() => inputRefs.current[0]?.focus(), 100);
  };

  const handleOtpChange = (index: number, value: string) => {
    if (!/^[0-9]*$/.test(value)) return;
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setOtpError('');

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    if (newOtp.every(d => d !== '')) {
      verifyOtp(newOtp.join(''));
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const verifyOtp = (code: string) => {
    // TODO: POST /api/otp/verify { phone, code }
    if (code === '123456') {
      setStep(3);
    } else {
      setOtpError('Invalid OTP. Please try again.');
      setOtp(Array(6).fill(''));
      inputRefs.current[0]?.focus();
    }
  };

  const handleResend = () => {
    setCountdown(30);
    setOtp(Array(6).fill(''));
    setOtpError('');
    // TODO: POST /api/otp/send { phone }
    inputRefs.current[0]?.focus();
  };

  const handleDownload = () => {
    // TODO: POST /api/documents/download { documentName, phone }
    window.open(documentUrl, '_blank');
    onClose();
  };

  const maskPhone = (p: string) => {
    if (p.length !== 10) return p;
    return `+91 ${p.slice(0, 2)}XXX XX${p.slice(-3)}`;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
      />

      {/* Modal Card - Styled with #151518 Surface & MIEUX Purple */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-md overflow-hidden rounded-2xl border border-[#27272A] bg-[#151518] p-8 shadow-2xl text-white"
      >
        <button
          onClick={onClose}
          className="absolute right-6 top-6 text-[#A1A1AA] transition-colors hover:text-white"
        >
          <X className="h-6 w-6" />
          <span className="sr-only">Close</span>
        </button>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step-1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="flex flex-col space-y-6"
            >
              <div>
                <h2 className="font-display text-2xl font-bold text-white">
                  Download {documentName}
                </h2>
                <p className="mt-2 text-sm text-[#A1A1AA]">
                  Please enter your mobile number to continue.
                </p>
              </div>

              <form onSubmit={handlePhoneSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-[#F5F5F5]">
                    Mobile Number
                  </label>
                  <div className="flex gap-2">
                    <div className="flex items-center rounded-xl border border-[#27272A] bg-[#0D0D0F] px-4 py-3 text-[#A1A1AA]">
                      +91
                    </div>
                    <input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                      placeholder="Enter 10 digit number"
                      className="w-full rounded-xl border border-[#27272A] bg-[#0D0D0F] px-4 py-3 text-white outline-none transition-colors focus:border-[#9B1B9E]"
                      required
                    />
                  </div>
                  {phoneError && <p className="text-sm text-red-400">{phoneError}</p>}
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#9B1B9E] px-6 py-4 font-bold text-white transition-colors hover:bg-[#B52CB8]"
                >
                  Send OTP <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="flex flex-col space-y-6 text-center"
            >
              <div>
                <h2 className="font-display text-2xl font-bold text-white">
                  OTP sent to {maskPhone(phone)}
                </h2>
                <p className="mt-2 text-xs font-semibold text-[#FF6B00]">
                  Demo OTP: 123456
                </p>
              </div>

              <div className="flex justify-center gap-2 sm:gap-4">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    pattern="[0-9]"
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleOtpKeyDown(index, e)}
                    className="h-12 w-10 sm:h-14 sm:w-12 rounded-xl border border-[#27272A] bg-[#0D0D0F] text-center font-display text-xl font-bold text-white outline-none transition-colors focus:border-[#9B1B9E] focus:bg-[#1D1D21] sm:text-2xl"
                  />
                ))}
              </div>

              {otpError && <p className="text-sm text-red-400">{otpError}</p>}

              <div className="text-sm">
                {countdown > 0 ? (
                  <p className="text-[#A1A1AA]">
                    Resend OTP in <span className="font-bold text-white">{countdown}s</span>
                  </p>
                ) : (
                  <button
                    onClick={handleResend}
                    className="font-bold text-[#9B1B9E] hover:underline"
                  >
                    Resend OTP
                  </button>
                )}
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step-3"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex flex-col items-center space-y-6 text-center"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#22C55E]/20 border border-[#22C55E]/40">
                <CheckCircle2 className="h-10 w-10 text-[#22C55E]" />
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-white">
                  Mobile number verified
                </h2>
                <p className="mt-2 text-sm text-[#A1A1AA]">
                  Your document is ready to download.
                </p>
              </div>

              <button
                onClick={handleDownload}
                className="w-full rounded-xl bg-[#9B1B9E] px-6 py-4 font-bold text-white transition-colors hover:bg-[#B52CB8]"
              >
                Download {documentName}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
