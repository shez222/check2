"use client"
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { UserAuth } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

// Define InputComponent outside of PhoneSignInModal
const InputComponent = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>((props, ref) => (
  <input {...props} ref={ref} className="w-full p-2 border-none focus:ring-0" />
));
InputComponent.displayName = 'InputComponent';

function PhoneSignInModal() {
  const { phoneLogIn, verifyCode } = UserAuth();
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [verificationCode, setVerificationCode] = useState<string>('');
  const [isCodeSent, setIsCodeSent] = useState<boolean>(false);
  const router = useRouter();
  const phoneInputRef = useRef<HTMLInputElement>(null);
  const codeInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (phoneInputRef.current) {
      phoneInputRef.current.focus();
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isCodeSent) {
      phoneLogIn(phoneNumber);
      setIsCodeSent(true);
      if (codeInputRef.current) {
        codeInputRef.current.focus();
      }
    } else {
      verifyCode(verificationCode, onSuccess);
    }
  };

  const onSuccess = () => {
    router.back();
  };

  const handlePhoneChange = useCallback((value: string | undefined) => {
    setPhoneNumber(value || '');
  }, []);

  return (
    <div className="max-w-md mx-auto mt-8 p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <PhoneInput
            withoutCountry="true"
            defaultCountry="US"
            placeholder="Phone number"
            value={phoneNumber}
            onChange={handlePhoneChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            inputComponent={InputComponent}
            autoFocus
          />
        </div>
        {isCodeSent ? (
          <div>
            <input
              type="text"
              placeholder="Verification Code"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-md"
              disabled={!isCodeSent}
              ref={codeInputRef}
            />
          </div>
        ) : (
          <div></div>
        )}
        <button
          type="submit"
          className="w-full bg-black text-white py-2 px-4 rounded-md"
        >
          {isCodeSent ? 'Verify Code' : 'Send Code'}
        </button>
      </form>
    </div>
  );
}

export default PhoneSignInModal;