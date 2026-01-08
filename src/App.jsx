import { useState } from "react";

function App() {
  const [enabled, setEnabled] = useState(false);

  const toggleIntent = () => {
    chrome.runtime.sendMessage({ type: "TOGGLE_INTENT" });
    setEnabled(prev => !prev);
  };

  return (
    <div className="w-[300px] h-[400px] p-4 text-center font-sans rounded-2xl shadow-xl">
      <h2 className="text-lg font-semibold mb-3">
        IntentYoutube
      </h2>

      <button
        onClick={toggleIntent}
        className={`w-full py-2 rounded-lg text-sm font-medium transition cursor-pointer
          ${enabled
            ? "bg-rose-600 text-white"
            : "bg-neutral-900 text-white"
          }`}
      >
        {enabled ? "Intent Mode ON" : "Enable Intent Mode"}
      </button>

      <p className="text-xs text-neutral-500 mt-3">
        Protect your purpose. No video interference.
      </p>
    </div>
  );
}

export default App;
