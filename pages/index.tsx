import { useRouter } from "next/router";

export default function SplashScreen() {
  const router = useRouter();

  const handleEnter = () => {
    router.push("/home");
  };

  return (
    <>
      <div className="splash">
        <img
          src="/elmora.png"
          alt="ELMORA Logo"
          className="logo"
        />

        <button
          onClick={handleEnter}
          className="enterBtn"
        >
          Vstúpiť
        </button>
      </div>

      {/* === STYLES === */}
      <style jsx>{`
        .splash {
          background-image: url("/full_bg.png");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;

          min-height: 100vh;
          width: 100%;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          padding: 40px 20px;
          text-align: center;
        }

        .logo {
          width: 420px;
          max-width: 90%;
          height: auto;
          margin-bottom: 40px;
        }

        .enterBtn {
          padding: 14px 36px;
          font-size: 18px;
          font-weight: 600;
          border: none;
          border-radius: 9999px;
          background: linear-gradient(90deg, #01382E, #064e3b);
          color: #fff;
          box-shadow: 0 8px 20px rgba(0,0,0,0.2);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .enterBtn:hover {
          transform: scale(1.05);
          box-shadow: 0 12px 24px rgba(0,0,0,0.3);
        }

        /* === MOBIL === */
        @media (max-width: 768px) {
          .splash {
            background-image: url("/full_bg_mobile.png");
            background-position: center top;
          }

          .logo {
            width: 300px;
            margin-bottom: 32px;
          }
        }
      `}</style>
    </>
  );
}
