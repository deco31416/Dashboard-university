"use client";

import { useOCAuth } from "@opencampus/ocid-connect-js";
import { useLogin } from "@/utils/auth";

export default function LoginButton() {
  const handleLogin = useLogin();

  return (
    <button
      className="btn-primary flex items-center gap-2 bg-[#1227F2] px-2 py-1 text-white hover:bg-[#1016BC] max-md:mr-1 max-sm:text-xs md:py-2"
      onClick={handleLogin}
    >
      <svg
        width="26"
        height="25"
        viewBox="0 0 26 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.8953 0.205309C10.4702 0.234799 8.1083 0.963632 6.10663 2.30007C4.10496 3.63651 2.55297 5.5209 1.64586 7.71614C0.738752 9.91138 0.517073 12.3194 1.0087 14.6373C1.50033 16.9552 2.68328 19.0794 4.40879 20.7427C6.1343 22.406 8.32526 23.5342 10.706 23.9851C13.0868 24.4361 15.5511 24.1897 17.7888 23.2771C20.0265 22.3645 21.9377 20.8264 23.2819 18.8562C24.6261 16.886 25.3434 14.5718 25.3434 12.2048C25.3228 9.00246 23.9998 5.93922 21.6654 3.68892C19.3309 1.43862 16.1763 0.185527 12.8953 0.205309Z"
          fill="#00EDBE"
        />
        <path
          d="M17.8154 7.76716C17.7821 7.16713 17.932 6.57095 18.2462 6.0542H8.21168C8.12175 6.05389 8.03264 6.07087 7.94943 6.10416C7.86622 6.13746 7.79054 6.18643 7.72673 6.24827C7.66291 6.31012 7.6122 6.38362 7.57749 6.4646C7.54277 6.54557 7.52474 6.63242 7.52441 6.7202V8.81371C7.52474 8.90149 7.54277 8.98834 7.57749 9.06931C7.6122 9.15029 7.66291 9.22379 7.72673 9.28563C7.79054 9.34748 7.86622 9.39645 7.94943 9.42975C8.03264 9.46305 8.12175 9.48002 8.21168 9.47971H18.2462C17.932 8.96295 17.7821 8.36718 17.8154 7.76716Z"
          fill="#141BEB"
        />
        <path
          d="M5.95985 12.2379C5.99259 12.8379 5.84206 13.4339 5.52734 13.9504H15.5619C15.6518 13.9507 15.741 13.9338 15.8242 13.9005C15.9074 13.8672 15.983 13.8182 16.0469 13.7563C16.1107 13.6945 16.1614 13.621 16.1961 13.54C16.2308 13.459 16.2489 13.3722 16.2492 13.2844V11.1909C16.2489 11.1031 16.2308 11.0163 16.1961 10.9353C16.1614 10.8543 16.1107 10.7808 16.0469 10.719C15.983 10.6571 15.9074 10.6082 15.8242 10.5749C15.741 10.5416 15.6518 10.5246 15.5619 10.5249H5.52734C5.84157 11.0417 5.99153 11.6378 5.95822 12.2379"
          fill="#141BEB"
        />
        <path
          d="M17.8154 16.7086C17.7821 16.1085 17.932 15.5124 18.2462 14.9956H8.21168C8.12175 14.9953 8.03264 15.0123 7.94943 15.0456C7.86622 15.0789 7.79054 15.1278 7.72673 15.1897C7.66291 15.2515 7.6122 15.325 7.57749 15.406C7.54277 15.487 7.52474 15.5738 7.52441 15.6616V17.7551C7.52474 17.8429 7.54277 17.9297 7.57749 18.0107C7.6122 18.0917 7.66291 18.1652 7.72673 18.227C7.79054 18.2889 7.86622 18.3379 7.94943 18.3712C8.03264 18.4045 8.12175 18.4214 8.21168 18.4211H18.2462C17.932 17.9044 17.7821 17.3082 17.8154 16.7082"
          fill="#141BEB"
        />
      </svg>
      <div>
        Connect <span className="font-semibold">OCID</span>
      </div>
    </button>
  );
}
